import React, {
  useState,
  useEffect,
  ReactElement,
  createContext,
  useContext,
} from 'react';
import Realm, { Configuration } from 'realm';

interface Props {
  children: ReactElement;
  config: Configuration;
}
const RealmContext = createContext<Realm | null>(null);
RealmContext.displayName = 'RealmContext';

const RealmProvider = ({ children, config }: Props) => {
  const [realm, setRealm] = useState<Realm | null>(null);
  useEffect(() => {
    Realm.open(config).then(setRealm);
    return () => {
      realm?.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config]);
  if (realm) {
    return (
      <RealmContext.Provider value={realm}>{children}</RealmContext.Provider>
    );
  }
  return null;
};

const useRealm = (): Realm | null => {
  const context = useContext(RealmContext);
  if (!context || typeof context === 'undefined') {
    throw new Error('useRealm must be used within a realm provider');
  }
  return context;
};

export { RealmContext, RealmProvider, useRealm };
