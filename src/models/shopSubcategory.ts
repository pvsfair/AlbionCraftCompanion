import { ObjectSchema } from 'realm';
import Translation from './translation';

export default class ShopSubcategory {
  static tableName = 'ShopSubcategory';
  static schema: ObjectSchema = {
    name: this.tableName,
    embedded: true,
    properties: {
      key: 'string',
      value: 'int',
      localizedKey: 'Translation',
    },
  };

  key!: string;
  value!: number;
  localizedKey!: Translation;
}
