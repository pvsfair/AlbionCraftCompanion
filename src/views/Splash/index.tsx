import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { Results, BSON } from 'realm';
import { useRealm } from '../../repositories/items';
import { IShopCategory } from '../../models/items';
import { TProps } from './slash.types';
import itemsData from '../../../assets/itemsData.json';
import { ItemsData, LocalizedItemsDatum } from '../../models/data';

export const Splash = ({ navigation }: TProps): React.ReactElement => {
  const { realm } = useRealm();
  const fetch = (): Results<IShopCategory> | undefined => {
    const tasks = realm?.objects<IShopCategory>('ShopCategory');
    return tasks;
  };

  const hasPopulatedData = (data?: Results<any>): boolean =>
    data ? data.length > 0 : false;

  const populate = async () => {
    const elements = [];
    realm?.write(() => {
      (itemsData as ItemsData).items.shopcategories.shopcategory.forEach(
        element => {
          const ele = realm.create<IShopCategory>('ShopCategory', {
            _id: new BSON.UUID(),
            key: element['@id'],
            localizedKey: { 'EN-US': element['@id'] },
            value: parseInt(element['@value'], 10),
            shopsubcategory: element.shopsubcategory.map(sub => ({
              key: sub['@id'],
              value: parseInt(sub['@value'], 10),
              localizedKey: { 'EN-US': sub['@id'] },
            })),
          });
          elements.push(ele);
        },
      );
    });
    console.log(elements.length);
    // let task1;
    // realm?.write(() => {
    //   task1 = realm.create<any>('Task', {
    //     _id: 1,
    //     name: 'go grocery shoping',
    //     status: 'Open',
    //   });
    //   console.log(`created a task ${task1.name}`);
    // });
  };
  useEffect(() => {
    if (!realm) {
      return;
    }
    const data = fetch();
    console.log(data?.map(e => e.key));

    if (hasPopulatedData(data)) {
      return;
    }
    populate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [realm]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'black' }}>Splash</Text>
      <Button title="go to main" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
