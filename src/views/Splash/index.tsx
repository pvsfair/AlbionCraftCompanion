import React, { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';
import { Results, BSON } from 'realm';
import { TProps } from './slash.types';
import itemsData from '../../../assets/itemsData.json';
import { ItemsData } from '../../models/data';
import { useRealm } from '../../contexts/realm.context';
import { ShopCategory } from '../../models';

export const Splash = ({ navigation }: TProps): React.ReactElement => {
  const realm = useRealm();
  const [cat, setCat] = useState<Results<ShopCategory>>();
  const fetch = (): Results<ShopCategory> | undefined => {
    const tasks = realm?.objects(ShopCategory);
    setCat(tasks);
    return tasks;
  };

  const hasPopulatedData = (data?: Results<any>): boolean =>
    data ? data.length > 0 : false;

  const populate = async () => {
    console.log('populating');
    const elements = [];
    realm?.write(() => {
      (itemsData as ItemsData).items.shopcategories.shopcategory.forEach(
        element => {
          const ele = realm.create<ShopCategory>(ShopCategory.tableName, {
            _id: new BSON.UUID(),
            key: element['@id'],
            localizedKey: { 'EN-US': element['@id'] },
            value: parseInt(element['@value'], 10),
            subcategories: element.shopsubcategory.map(sub => ({
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
      {cat?.map(c => (
        <Text key={c._id.id.toString('base64')} style={{ color: 'black' }}>
          {c.subcategories[0].key}
        </Text>
      ))}

      <Button title="go to main" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
