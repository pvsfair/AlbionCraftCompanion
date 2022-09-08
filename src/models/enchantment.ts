import { ObjectSchema } from 'realm';
import CraftingRequirement from './craftingRequirements';
import EnchantmentUpgradeResource from './enchantmentUpgradeResource';

export default class Enchantment {
  static tableName = 'Enchantment';
  static schema: ObjectSchema = {
    name: this.tableName,
    embedded: true,
    properties: {
      enchantmentlevel: 'int',
      abilitypower: 'int',
      dummyitempower: 'int',
      consumespell: 'string',
      craftingRequirements: { type: 'list', objectType: 'CraftingRequirement' },
      upgraderequirements: 'EnchantmentUpgradeResource',
      nutrition: 'int?',
      weight: 'float?',
    },
  };

  enchantmentlevel!: number;
  abilitypower!: number;
  dummyitempower!: number;
  consumespell!: string;
  craftingrequirements?: CraftingRequirement[];
  upgraderequirements!: EnchantmentUpgradeResource;
  nutrition?: number;
  weight?: number;
}
