import { Object, Results } from 'realm';
import { useRealm } from '../contexts/realm.context';

export interface IBaseReturn<T> {
  getAll(): Results<T> | undefined;
  getByField(fieldName: string, fieldValue: string): Results<T> | undefined;
  hasData(data?: Results<T & Object> | ReadonlyArray<T & Object>): boolean;
  populateData<TT>(data: TT): boolean;
}

export const useBaseRepo = <T>(model: {
  new (...arg: any[]): T;
}): IBaseReturn<T> => {
  const { realm } = useRealm();
  const getAll = () => realm?.objects(model);

  const getByField = (fieldName: string, fieldValue: string) =>
    realm?.objects(model).filtered(`${fieldName} == ${fieldValue}`);

  const hasData = (
    data: Results<T & Object> | ReadonlyArray<T & Object> | undefined = realm
      ?.objects(model)
      .snapshot(),
  ) => (data ? data.length > 0 : false);

  const populateData = <TT>(_data: TT): boolean => {
    throw new Error('Please Implement this function');
  };

  return { getAll, getByField, hasData, populateData };
};
