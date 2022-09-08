import { ObjectSchema } from 'realm';
import CraftingResource from './craftingResources';

export default class CraftingRequirement {
  static tableName = 'CraftingRequirement';
  static schema: ObjectSchema = {
    name: this.tableName,
    embedded: true,
    properties: {
      time: 'float',
      amountCrafted: 'int?',
      silver: 'int?',
      craftingFocus: 'int?',
      returnProductNotResource: 'bool?',
      swapTransaction: 'bool?',
      craftResource: { type: 'list', objectType: 'CraftingResource' },
    },
  };

  time!: number;
  amountCrafted?: number;
  silver?: number;
  craftingfocus?: number;
  returnProductNotResource?: boolean;
  swapTransaction?: boolean;
  craftResource?: CraftingResource[];
}
