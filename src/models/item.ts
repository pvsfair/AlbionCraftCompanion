import { BSON, ObjectSchema } from 'realm';
import CraftingRequirement from './craftingRequirements';

export default class Item {
  static tableName = 'Item';
  static schema: ObjectSchema = {
    name: this.tableName,
    properties: {
      _id: 'uuid',
      uniqueName: 'string',
      tier: 'int',
      maxqualitylevel: 'int?',
      weight: 'float?',
      category: 'string',
      subcategory: 'string',
      itemvalue: 'int?',
      famevalue: 'int?',
      nutrition: 'int?',
      enchantmentlevel: 'int?',
      namelocatag: 'string?',
      craftingcategory: 'string?',
      abilitypower: 'int?',
      craftingRequirements: { type: 'list', objectType: 'CraftingRequirement' },
      enchantments: { type: 'list', objectType: 'Enchantment' },
      extraInfo: 'string{}',
    },
    primaryKey: '_id',
  };

  _id!: BSON.UUID;
  uniquename!: string;
  maxqualitylevel?: number;
  tier!: number;
  weight?: number;
  shopcategory!: string;
  shopsubcategory1!: string;
  itemvalue?: number;
  famevalue?: number;
  nutrition?: number;
  enchantmentlevel?: number;
  craftingrequirements?: CraftingRequirement[];
  namelocatag?: string;
  craftingcategory?: string;
  abilitypower?: number;
  enchantments?: IEnchantment[];
  extraInfo!: {
    maxStackSize?: string;
    foodcategory?: string;
    resourcetype?: string;
    unlockedtocraft?: string;
    unlockedtoequip?: string;
    unlockedtouse?: string;
    descriptionlocatag?: string;
    salvageable?: string;
    tradable?: string;
    [key: string]: string | undefined;
  };
}
