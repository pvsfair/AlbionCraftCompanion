import { BSON, ObjectSchema } from 'realm';
import { ShopSubcategory as IShopSubcategory } from './data';
import { Translation, ShopSubcategory } from './index';

export default class ShopCategory {
  static tableName = 'ShopCategory';
  static schema: ObjectSchema = {
    name: this.tableName,
    properties: {
      _id: 'uuid',
      key: 'string',
      value: 'int',
      localizedKey: 'Translation',
      subcategories: { type: 'list', objectType: 'ShopSubcategory' },
    },
    primaryKey: '_id',
  };

  static generate(
    id: string,
    value: string,
    categories: IShopSubcategory[],
  ): ShopCategory {
    return {
      _id: new BSON.UUID(),
      key: id,
      localizedKey: { 'EN-US': id },
      value: parseInt(value, 10),
      subcategories: categories.map(subCategory =>
        ShopSubcategory.generate(subCategory['@id'], subCategory['@value']),
      ),
    };
  }

  _id!: BSON.UUID;
  key!: string;
  value!: number;
  localizedKey!: Translation;
  subcategories!: ShopSubcategory[];
}
