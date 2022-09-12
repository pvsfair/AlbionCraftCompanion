import React, { useEffect, useMemo } from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { TProps } from './slash.types';
import itemsData from '../../../assets/itemsData.json';
import { ItemsData } from '../../models/data';
import { useRealm } from '../../contexts/realm.context';
import { useShopCategories } from '../../repositories/shopCategories';

export const Splash = ({ navigation }: TProps): React.ReactElement => {
  const { realm } = useRealm();
  const { getAll, hasData, populateData } = useShopCategories();
  const categoriesResult = getAll();
  const allCats = useMemo(
    () => categoriesResult?.sorted('key'),
    [categoriesResult],
  );

  useEffect(() => {
    if (!realm) {
      return;
    }

    if (hasData()) {
      return;
    }
    populateData((itemsData as ItemsData).items.shopcategories);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [realm]);

  useEffect(() => {
    console.log(1, allCats);
  }, [allCats]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={allCats}
        keyExtractor={c => c._id.id.toString('base64')}
        renderItem={({ item }) => (
          <Text style={{ color: 'black' }}>{item.key}</Text>
        )}
      />

      <Button title="go to main" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
