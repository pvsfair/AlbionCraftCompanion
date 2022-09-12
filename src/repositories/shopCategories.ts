import { Results } from 'realm';
import { useRealm } from '../contexts/realm.context';
import { ShopCategory } from '../models';
import { ShopCategories } from '../models/data';
import { useBaseRepo, IBaseReturn } from './baseRepo';

interface IShopCategoriesReturn
  extends Omit<IBaseReturn<ShopCategory>, 'getByField' | 'populateData'> {
  getByUniqueName(uniqueName: string): Results<ShopCategory> | undefined;
  populateData(data: ShopCategories): boolean;
}

export const useShopCategories = (): IShopCategoriesReturn => {
  const { realm } = useRealm();

  const { getAll, getByField, hasData } = useBaseRepo(ShopCategory);

  const getByUniqueName = (uniqueName: string) =>
    getByField?.('key', uniqueName);

  const populateData = (data: ShopCategories): boolean => {
    realm?.write(() => {
      for (let category of data.shopcategory) {
        realm.create<ShopCategory>(
          ShopCategory.tableName,
          ShopCategory.generate(
            category['@id'],
            category['@value'],
            category.shopsubcategory,
          ),
        );
      }
    });

    return true;
  };

  return { getAll, hasData, getByUniqueName, populateData };
};
