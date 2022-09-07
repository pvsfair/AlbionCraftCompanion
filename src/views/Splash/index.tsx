import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { Results } from 'realm';
import { useRealm } from '../../repositories/items';
import { TTask } from '../../models/items';
import { TProps } from './slash.types';

export const Splash = ({ navigation }: TProps): React.ReactElement => {
  const { realm } = useRealm();
  const fetch = (): Results<TTask> | undefined => {
    const tasks = realm?.objects<TTask>('Task');
    console.log(1, realm, tasks);
    return tasks;
  };

  const hasPopulatedData = (data?: Results<TTask>): boolean =>
    data ? data.length > 0 : false;

  const populate = async () => {
    let task1;
    realm?.write(() => {
      task1 = realm.create('Task', {
        _id: 1,
        name: 'go grocery shoping',
        status: 'Open',
      });
      console.log(`created a task ${task1.name}`);
    });
  };
  useEffect(() => {
    if (!realm) {
      return;
    }
    // const data = fetch();
    // if (hasPopulatedData(data)) {
    //   return;
    // }
    // populate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [realm]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'black' }}>Splash</Text>
      <Button title="go to main" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
