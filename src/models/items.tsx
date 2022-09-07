import { BSON, ObjectSchema } from 'realm';

export const ItemSchema: ObjectSchema = {
  name: 'Item',
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

export interface IBaseItem {
  _id: BSON.UUID;
  uniquename: string;
  maxqualitylevel?: number;
  tier: number;
  weight?: number;
  shopcategory: string;
  shopsubcategory1: string;
  itemvalue?: number;
  famevalue?: number;
  nutrition?: number;
  enchantmentlevel?: number;
  craftingrequirements?: ICrafingRequirements[] | ICrafingRequirements;
  namelocatag?: string;
  craftingcategory?: string;
  abilitypower?: number;
  enchantments?: IEnchantment[] | IEnchantment;
  extraInfo: {
    maxStackSize?: string;
    foodcategory?: string;
    resourcetype?: string;
    unlockedtocraft?: boolean;
    unlockedtoequip?: boolean;
    unlockedtouse?: boolean;
    descriptionlocatag?: string;
    salvageable?: boolean;
    tradable?: boolean;
    [key: string]: string | boolean | undefined;
  };
}

export const CraftingRequirementSchema: ObjectSchema = {
  name: 'CraftingRequirement',
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

export interface ICrafingRequirements {
  time: number;
  amountCrafted?: number;
  silver?: number;
  craftingfocus?: number;
  returnProductNotResource?: boolean;
  swapTransaction?: boolean;
  craftResource?: ICraftResource | ICraftResource[];
}

export const CraftingResourceSchema: ObjectSchema = {
  name: 'CraftingResource',
  embedded: true,
  properties: {
    uniqueName: 'string',
    count: 'int',
    maxReturnAmount: 'int?',
    enchantmentLevel: 'int?',
    preserveQuality: 'bool',
  },
};

export interface ICraftResource {
  uniqueName: string;
  count: number;
  maxReturnAmount?: number;
  enchantmentLevel?: number;
  preserveQuality?: boolean;
}

export const ItemLocalizationSchema: ObjectSchema = {
  name: 'ItemLocale',
  properties: {
    _id: 'uuid',
    nameIdentifier: 'string',
    descriptionIdentifier: 'string',
    localizedNames: 'Translation?',
    localizedDescription: 'Translation?',
    UniqueName: 'string',
    item: 'Item?',
  },
  primaryKey: '_id',
};

export const TranslationSchema: ObjectSchema = {
  name: 'Translation',
  embedded: true,
  properties: {
    'EN-US': 'string?',
    'DE-DE': 'string?',
    'FR-FR': 'string?',
    'RU-RU': 'string?',
    'PL-PL': 'string?',
    'ES-ES': 'string?',
    'PT-BR': 'string?',
    'IT-IT': 'string?',
    'ZH-CN': 'string?',
    'KO-KR': 'string?',
    'JA-JP': 'string?',
  },
};

export interface IItemLocalization {
  _id: BSON.UUID;
  LocalizationNameVariable: string;
  LocalizationDescriptionVariable: string;
  LocalizedNames: { [key in langs]?: string };
  LocalizedDescriptions: { [key in langs]?: string };
  UniqueName: string;
  Item: IBaseItem;
}

export const EnchantmentSchema: ObjectSchema = {
  name: 'Enchantment',
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

export const EnchantmentUpgradeResourceSchema: ObjectSchema = {
  name: 'EnchantmentUpgradeResource',
  embedded: true,
  properties: {
    uniquename: 'string',
    count: 'int',
  },
};

export interface IEnchantment {
  enchantmentlevel: number;
  abilitypower: number;
  dummyitempower: number;
  consumespell: string;
  craftingrequirements?: ICrafingRequirements[] | ICrafingRequirements;
  upgraderequirements: {
    upgraderesource: {
      uniquename: string;
      count: number;
    };
  };
  nutrition?: number;
  weight?: number;
}

export const ShopCategorySchema: ObjectSchema = {
  name: 'ShopCategory',
  properties: {
    _id: 'uuid',
    key: 'string',
    value: 'int',
    localizedKey: 'Translation',
    subcategories: 'ShopSubcategory',
  },
  primaryKey: '_id',
};

export const ShopSubcategorySchema: ObjectSchema = {
  name: 'ShopSubcategory',
  embedded: true,
  properties: {
    key: 'string',
    value: 'int',
    localizedKey: 'Translation',
  },
};

export interface IShopCategory {
  _id: BSON.UUID;
  key: string;
  value: number;
  localizedKey: { [key in langs]?: string };
  shopsubcategory: {
    key: string;
    value: number;
    localizedKey: { [key in langs]?: string };
  }[];
}

export type langs =
  | 'EN-US'
  | 'DE-DE'
  | 'FR-FR'
  | 'RU-RU'
  | 'PL-PL'
  | 'ES-ES'
  | 'PT-BR'
  | 'IT-IT'
  | 'ZH-CN'
  | 'KO-KR'
  | 'JA-JP';
