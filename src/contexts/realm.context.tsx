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

type ctxType = {
  realm?: Realm;
};
const RealmContext = createContext<ctxType>({
  realm: undefined,
});
RealmContext.displayName = 'RealmContext';

const RealmProvider = ({ children, config }: Props) => {
  const [realm, setRealm] = useState<Realm>();

  const [, updateState] = React.useState<object>();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  useEffect(() => {
    Realm.open(config).then(r => {
      r.addListener('change', () => forceUpdate());
      setRealm(r);
    });
    return () => {
      realm?.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config]);
  if (realm) {
    return (
      <RealmContext.Provider value={{ realm }}>
        {children}
      </RealmContext.Provider>
    );
  }
  return null;
};

const useRealm = (): ctxType => {
  const context = useContext(RealmContext);
  if (!context || typeof context === 'undefined') {
    throw new Error('useRealm must be used within a realm provider');
  }
  return context;
};

export { RealmContext, RealmProvider, useRealm };
