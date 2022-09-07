import { useEffect, useState } from 'react';
import Realm from 'realm';
import { TaskSchema } from '../models/items';

let realmInstance: Realm;

export const getRealmInstance = async (): Promise<Realm> => {
  if (!realmInstance) {
    realmInstance = await Realm.open({ path: 'myrealm', schema: [TaskSchema] });
  }
  return realmInstance;
};

export const useRealm = () => {
  const [realm, setRealm] = useState<Realm>();
  useEffect(() => {
    Realm.open({ path: 'myrealm', schema: [TaskSchema] }).then(setRealm);
    return () => {
      realm?.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { realm };
};
