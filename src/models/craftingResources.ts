import { ObjectSchema } from 'realm';

export default class CraftingResource {
  static tableName = 'CraftingResource';
  static schema: ObjectSchema = {
    name: this.tableName,
    embedded: true,
    properties: {
      uniqueName: 'string',
      count: 'int',
      maxReturnAmount: 'int?',
      enchantmentLevel: 'int?',
      preserveQuality: 'bool',
    },
  };

  uniqueName!: string;
  count!: number;
  maxReturnAmount?: number;
  enchantmentLevel?: number;
  preserveQuality?: boolean;
}
