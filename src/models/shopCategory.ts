import { BSON, ObjectSchema } from 'realm';
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

  _id!: BSON.UUID;
  key!: string;
  value!: number;
  localizedKey!: Translation;
  subcategories!: ShopSubcategory[];
}
