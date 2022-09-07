export const TaskSchema = {
  name: 'Task',
  properties: {
    _id: 'int',
    name: 'string',
    status: 'string?',
  },
  primaryKey: '_id',
};

type langs =
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

export interface IItemLocalization {
  LocalizationNameVariable: string;
  LocalizationDescriptionVariable: string;
  LocalizedNames: Record<langs, string>;
  LocalizedDescriptions: Record<langs, string>;
  Index: number;
  UniqueName: string;
}

export interface IShopCategory {
  id: string;
  value: number;
  shopsubcategory: {
    id: string;
    value: number;
  }[];
}

interface ICraftResource {
  uniquename: string;
  count: number;
  maxreturnamount?: number;
  enchantmentlevel?: number;
  preservequality?: boolean;
}

interface ICrafingRequirements {
  time: number;
  amountcrafted?: number;
  craftresource?: ICraftResource | ICraftResource[];
  silver?: number;
  craftingfocus?: number;
  currency?: {
    uniquename: string;
    amount: string;
  };
  returnproductnotresource?: boolean;
  swaptransaction?: boolean;
  playerfactionstanding?: {
    faction: string;
    minstanding: string;
  };
}

export interface IBaseItem {
  uniquename: string;
  tier: number;
  weight?: number;
  maxstacksize?: number;
  foodcategory?: string;
  resourcetype?: string;
  shopcategory: string;
  shopsubcategory1: string;
  unlockedtocraft?: boolean;
  unlockedtoequip?: boolean;
  unlockedtouse?: boolean;
  itemvalue?: number;
  famevalue?: number;
  nutrition?: number;
  enchantmentlevel?: number;
  fishingfame?: number;
  fishingminigamesetting?: string;
  craftingrequirements?: ICrafingRequirements[] | ICrafingRequirements;
  descriptionlocatag?: string;
  fasttravelfactor?: number;
  showinmarketplace?: boolean;
  hidefromplayer?: boolean;
  namelocatag?: string;
  salvageable?: boolean;
  tradable?: boolean;
  craftingcategory?: string;
  abilitypower?: number;
}
