import { ObjectSchema } from 'realm';

export default class EnchantmentUpgradeResource {
  static tableName = 'EnchantmentUpgradeResource';
  static schema: ObjectSchema = {
    name: this.tableName,
    embedded: true,
    properties: {
      uniquename: 'string',
      count: 'int',
    },
  };

  uniquename!: string;
  count!: number;
}
