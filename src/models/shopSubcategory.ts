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

  static generate(id: string, value: string): ShopSubcategory {
    return {
      key: id,
      localizedKey: { 'EN-US': id },
      value: parseInt(value, 10),
    };
  }

  key!: string;
  value!: number;
  localizedKey!: Translation;
}
