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

export interface ITask {
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

interface IEnchantment {
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
export interface IHideoutItem extends IBaseItem {
  mindistance: number;
  mindistanceintunnel: number;
  placementduration: number;
  primetimedurationminutes: number;
}
export interface IFarmableItem extends IBaseItem {
  placefame: number;
  pickupable: boolean;
  destroyable: boolean;
  unlockedtoplace: boolean;
  kind: string;
  animationid: string;

  activefarmfocuscost: number;
  activefarmmaxcycles: number;
  activefarmactiondurationseconds: number;
  activefarmcyclelengthseconds: number;
  activefarmbonus: number;

  harvest?: {
    growtime: number;
    lootlist: string;
    lootchance: number;
    fame: number;
    seed: {
      chance: number;
      amount: number;
    };
  };
  resourcevalue?: number;
  grownitem?: {
    uniquename: string;
    growtime: number;
    fame: number;
    offspring: {
      chance: number;
      amount: number;
    };
  };
  consumption?: {
    food: {
      nutritionmax: number;
      secondspernutrition: number;
      acceptedfood: {
        foodcategory: string;
      };
      lossbeforehungry?: number;
    };
  };
  products?: {
    product: {
      productiontime: number;
      actionname: string;
      lootlist: string;
      lootchance: number;
      fame: number;
    };
  };
}
export interface ISimpleItem extends IBaseItem {
  droponpvpknockdown?: boolean;
  replaceondeath?: {
    replacementitem: {
      uniquename: string;
      count: number;
    };
  };
  dontgivefameoncraft?: boolean;
}
export interface IConsumableItem extends IBaseItem {
  slottype: string;
  consumespell: string;
  dummyitempower?: number;
  enchantments?: {
    enchantment: IEnchantment[] | IEnchantment;
  };
  foodcategory?: string;
}
export interface IConsumableFromInventoryItem extends IBaseItem {
  consumespell: string;
  dummyitempower?: number;
  allowfullstackusage?: boolean;
  logconsumption?: boolean;
  decayitem?: string;
  decayoneventend?: string;
}
export interface IEquipamentItem extends IBaseItem {
  maxqualitylevel: string;
  slottype: Type;
  itempowerprogressiontype?: Iontype;
  skincount?: number;
  activespellslots: number;
  passivespellslots: number;
  physicalarmor: number;
  magicresistance: number;
  durability: number;
  durabilityloss_attack: number;
  durabilityloss_spelluse: number;
  durabilityloss_receivedattack: number;
  durabilityloss_receivedspell: number;
  hitpointsmax: number;
  hitpointsregenerationbonus: number;
  energymax: number;
  energyregenerationbonus: number;
  crowdcontrolresistance: number;
  itempower: number;
  physicalattackdamagebonus: number;
  magicattackdamagebonus: number;
  physicalspelldamagebonus: number;
  magicspelldamagebonus: number;
  healbonus: number;
  bonusccdurationvsplayers: number;
  bonusccdurationvsmobs: number;
  threatbonus: number;
  magiccooldownreduction: number;
  bonusdefensevsplayers?: number;
  bonusdefensevsmobs?: number;
  magiccasttimereduction?: number;
  attackspeedbonus?: number;
  movespeedbonus?: number;
  healmodifier?: number;
  canbeovercharged?: boolean;
  energycostreduction?: number;
  masterymodifier?: number;
  craftingcategory?: string;
  combatspecachievement?: string;
  enchantments?: IEnchantment;
  destinycraftfamefactor?: number;
  movespeed?: number;
  maxload?: number;
  facestate?: string;
  requiredaccesslevel?: number;
  beardstate?: string;
}
export interface IWeapon extends IBaseItem {
  uniquename: string;
  mesh?: string;
  uisprite?: string;
  maxqualitylevel: string;
  abilitypower: string;
  slottype: Type;
  shopcategory: Attacktype;
  shopsubcategory1: Shopsubcategory1Enum;
  attacktype: Attacktype;
  attackdamage?: string;
  attackspeed?: string;
  attackrange?: string;
  twohanded: string;
  tier: string;
  weight: string;
  activespellslots: string;
  passivespellslots: string;
  durability: string;
  durabilityloss_attack: string;
  durabilityloss_spelluse: string;
  durabilityloss_receivedattack: string;
  durabilityloss_receivedspell: string;
  mainhandanimationtype: string;
  unlockedtocraft: string;
  unlockedtoequip: string;
  itempower: string;
  unequipincombat?: string;
  uicraftsoundstart: EquipmentitemUicraftsoundstart;
  uicraftsoundfinish: EquipmentitemUicraftsoundfinish;
  canbeovercharged?: string;
  canharvest?: Canharvest;
  craftingcategory?: Shopsubcategory1Enum;
  descriptionlocatag?: WeaponDescriptionlocatag;
  craftingspelllist?: WeaponCraftingspelllist;
  attackbuildingdamage?: string;
  fishing?: string;
  fishingspeed?: string;
  physicalspelldamagebonus?: string;
  magicspelldamagebonus?: string;
  fxbonename?: Fxbonename;
  fxboneoffset?: Fxboneoffset;
  hitpointsmax?: string;
  hitpointsregenerationbonus?: string;
  itempowerprogressiontype?: Type;
  focusfireprotectionpenetration?: string;
  healmodifier?: string;
  masterymodifier?: string;
  physicalattackdamagebonus?: string;
  magicattackdamagebonus?: string;
  projectile?: ProjectileElement[] | ProjectileElement;
  combatspecachievement?: string;
  enchantments?: EquipmentitemEnchantments;
  destinycraftfamefactor?: string;
  showinmarketplace?: string;
  attackvariations?: Attackvariations;
  triggershealingsickness?: string;
  hidefromplayer?: string;
  requiredaccesslevel?: string;
  attackdamagetimefactor?: string;
  mainhandanimationtype_attack?: MainhandanimationtypeAttack;
  attackvfx?: WeaponAttackvfx;
  tradable?: string;
  skincount?: string;
  physicalarmor?: string;
  magicresistance?: string;
  energymax?: string;
  energyregenerationbonus?: string;
  crowdcontrolresistance?: string;
  healbonus?: string;
  bonusccdurationvsplayers?: string;
  bonusccdurationvsmobs?: string;
  threatbonus?: string;
  magiccooldownreduction?: string;
  bonusdefensevsplayers?: string;
  bonusdefensevsmobs?: string;
  magiccasttimereduction?: string;
  attackspeedbonus?: string;
  movespeedbonus?: string;
  namelocatag?: string;
}
export interface Items {
  // shopcategories: Shopcategories;
  // hideoutitem: Hideoutitem;
  // farmableitem: Farmableitem[];
  // simpleitem: Simpleitem[];
  // consumableitem: Consumableitem[];
  // consumablefrominventoryitem: Consumablefrominventoryitem[];
  // equipmentitem: Equipmentitem[];
  weapon: Weapon[];
  mount: Mount[];
  furnitureitem: Furnitureitem[];
  journalitem: Journalitem[];
  labourercontract: Labourercontract[];
  mountskin: Mountskin[];
  crystalleagueitem: Crystalleagueitem[];
  killtrophy: Killtrophy;
}

export enum ConsumablefrominventoryitemShopcategory {
  Consumables = 'consumables',
  Skillbooks = 'skillbooks',
}

export enum Shop {
  KillEmotes = 'kill_emotes',
  Maps = 'maps',
  Other = 'other',
  Potion = 'potion',
  Skillbook = 'skillbook',
  SkillbookFiber = 'skillbook_fiber',
  SkillbookHide = 'skillbook_hide',
  SkillbookOre = 'skillbook_ore',
  SkillbookRock = 'skillbook_rock',
  SkillbookWood = 'skillbook_wood',
  Vanity = 'vanity',
}

export enum ConsumablefrominventoryitemUicraftsoundfinish {
  PlayUIActionCraftClothFinish = 'Play_ui_action_craft_cloth_finish',
  PlayUIActionCraftLeatherFinish = 'Play_ui_action_craft_leather_finish',
  PlayUIActionCraftPotionFinish = 'Play_ui_action_craft_potion_finish',
}

export enum ConsumablefrominventoryitemUicraftsoundstart {
  PlayUIActionCraftClothStart = 'Play_ui_action_craft_cloth_start',
  PlayUIActionCraftLeatherStart = 'Play_ui_action_craft_leather_start',
  PlayUIActionCraftPotionStart = 'Play_ui_action_craft_potion_start',
}

export enum Uispriteoverlay {
  ItemoverlayGuildVanity = 'ITEMOVERLAY_GUILD_VANITY',
  ItemoverlayKillEmote = 'ITEMOVERLAY_KILL_EMOTE',
  ItemoverlayNonTradable = 'ITEMOVERLAY_NON_TRADABLE',
  ItemoverlayNonTradableKillEmote = 'ITEMOVERLAY_NON_TRADABLE_KILL_EMOTE',
  ItemoverlayNonTradableVanity = 'ITEMOVERLAY_NON_TRADABLE_VANITY',
  ItemoverlayVanity = 'ITEMOVERLAY_VANITY',
}

export interface Playerfactionstanding {
  '@faction': Faction;
  '@minstanding': string;
}

export interface AudioInfo {
  '@name': string;
}

export interface PurpleCraftingrequirement {
  '@silver': string;
  '@time': string;
  '@craftsingleperdefault'?: string;
  craftresource: CraftingrequirementCraftresourceClass;
}

export interface CraftingrequirementCraftresourceClass {
  '@uniquename': string;
  '@count': string;
  '@maxreturnamount'?: string;
  '@enchantmentlevel'?: string;
  '@preservequality'?: string;
}

export interface PurpleCraftingrequirements {
  '@time'?: string;
  '@swaptransaction'?: string;
  currency?: Currency;
  '@silver'?: string;
  '@craftingfocus'?: string;
  '@forcesinglecraft'?: string;
  craftresource?:
    | CraftingrequirementCraftresourceClass[]
    | CraftingrequirementCraftresourceClass;
  '@amountcrafted'?: string;
  '@craftsingleperdefault'?: string;
  playerfactionstanding?: Playerfactionstanding;
  '@salvageitemfactor'?: string;
}

export interface Currency {
  '@uniquename': Uniquename;
  '@amount': string;
}

export enum Uniquename {
  FactionCaerleon = 'FACTION_CAERLEON',
  FactionForest = 'FACTION_FOREST',
  FactionHighland = 'FACTION_HIGHLAND',
  FactionMountain = 'FACTION_MOUNTAIN',
  FactionSteppe = 'FACTION_STEPPE',
  FactionSwamp = 'FACTION_SWAMP',
  Favor = 'FAVOR',
}

export interface Playerfactionstanding {
  '@faction': Faction;
  '@minstanding': string;
}

export enum Faction {
  Caerleon = 'Caerleon',
  Forest = 'Forest',
  Highland = 'Highland',
  Mountain = 'Mountain',
  Steppe = 'Steppe',
  Swamp = 'Swamp',
}

export interface Consumableitem {
  '@uniquename': string;
  '@itemvalue'?: string;
  '@fishingfame'?: string;
  '@fishingminigamesetting'?: string;
  '@descriptionlocatag'?: string;
  '@uisprite'?: string;
  '@nutrition'?: string;
  '@abilitypower': string;
  '@slottype': SlottypeEnum;
  '@consumespell': string;
  '@shopcategory': ConsumablefrominventoryitemShopcategory;
  '@shopsubcategory1': ConsumableitemShopsubcategory1;
  '@resourcetype'?: ConsumableitemResourcetype;
  '@tier': string;
  '@weight'?: string;
  '@dummyitempower'?: string;
  '@maxstacksize'?: string;
  '@unlockedtocraft': string;
  '@unlockedtoequip': string;
  '@uicraftsoundstart'?: ConsumableitemUicraftsoundstart;
  '@uicraftsoundfinish'?: ConsumableitemUicraftsoundfinish;
  '@craftingcategory'?: SlottypeEnum;
  craftingrequirements?: ConsumableitemCraftingrequirements;
  enchantments?: ConsumableitemEnchantments;
  '@famevalue'?: string;
  '@uispriteoverlay1'?: Uispriteoverlay;
  '@tradable'?: string;
  '@foodcategory'?: Foodcategory;
}

export enum SlottypeEnum {
  Food = 'food',
  Potion = 'potion',
}

export enum Foodcategory {
  Chocolate = 'chocolate',
  Meat = 'meat',
  Plants = 'plants',
}

export enum ConsumableitemResourcetype {
  Fish = 'FISH',
}

export enum ConsumableitemShopsubcategory1 {
  Cooked = 'cooked',
  Fish = 'fish',
  Fishingbait = 'fishingbait',
  Potion = 'potion',
  Vanity = 'vanity',
}

export enum ConsumableitemUicraftsoundfinish {
  PlayUIActionCraftFoodFinish = 'Play_ui_action_craft_food_finish',
  PlayUIActionCraftPotionFinish = 'Play_ui_action_craft_potion_finish',
}

export enum ConsumableitemUicraftsoundstart {
  PlayUIActionCraftFoodFirmStart = 'Play_ui_action_craft_food_firm_start',
  PlayUIActionCraftFoodFryStart = 'Play_ui_action_craft_food_fry_start',
  PlayUIActionCraftPotionStart = 'Play_ui_action_craft_potion_start',
}

export interface ConsumableitemCraftingrequirements {
  '@silver'?: string;
  '@amountcrafted'?: string;
  '@forcesinglecraft'?: string;
  '@craftingfocus'?: string;
  '@time'?: string;
  craftresource?:
    | CraftingrequirementCraftresourceClass[]
    | CraftingrequirementCraftresourceClass;
  '@gold'?: string;
}

export interface ConsumableitemEnchantments {
  enchantment: PurpleEnchantment[] | FluffyEnchantment;
}

export interface PurpleEnchantment {
  '@enchantmentlevel': string;
  '@abilitypower': string;
  '@dummyitempower': string;
  '@consumespell': string;
  craftingrequirements: FluffyCraftingrequirements;
  upgraderequirements: Upgraderequirements;
  '@nutrition'?: string;
  '@weight'?: string;
}

export interface FluffyCraftingrequirements {
  '@amountcrafted': string;
  '@craftingfocus': string;
  '@time': string;
  craftresource: CraftingrequirementCraftresourceClass[];
}

export interface Upgraderequirements {
  upgraderesource: ReplacementitemElement;
}

export interface ReplacementitemElement {
  '@uniquename': string;
  '@count': string;
}

export interface FluffyEnchantment {
  '@enchantmentlevel': string;
  '@abilitypower': string;
  '@dummyitempower': string;
  '@consumespell': string;
  craftingrequirements: HideoutitemCraftingrequirements;
  upgraderequirements: Upgraderequirements;
}

export interface HideoutitemCraftingrequirements {
  '@amountcrafted'?: string;
  '@craftingfocus': string;
  '@time': string;
  craftresource: ReplacementitemElement[];
  '@silver'?: string;
}

export interface Crystalleagueitem {
  '@uniquename': string;
  '@uisprite': string;
  '@shopcategory': CrystalleagueitemShopcategory;
  '@shopsubcategory1': CrystalleagueitemShopsubcategory1;
  '@tier': string;
  '@enchantmentlevel': string;
  '@resourcetype': CrystalleagueitemResourcetype;
  '@weight': string;
  '@maxstacksize': string;
  '@namelocatag': Namelocatag;
  '@descriptionlocatag': CrystalleagueitemDescriptionlocatag;
  '@descvariable0': string;
  '@salvageable': string;
  '@itemvalue': string;
  '@tradable': string;
  '@unlockedtocraft': string;
  '@canbestoredinbattlevault': string;
  craftingrequirements: CrystalleagueitemCraftingrequirements;
  '@uispriteoverlay1'?: Uispriteoverlay;
  '@showinmarketplace'?: string;
}

export enum CrystalleagueitemDescriptionlocatag {
  CrystalLeagueTokenDesc = '@CRYSTAL_LEAGUE_TOKEN_DESC',
  CrystalLeagueTokenLegacyDesc = '@CRYSTAL_LEAGUE_TOKEN_LEGACY_DESC',
}

export enum Namelocatag {
  CrystalLeagueCtyToken = '@CRYSTAL_LEAGUE_CTY_TOKEN',
  CrystalLeagueToken = '@CRYSTAL_LEAGUE_TOKEN',
  CrystalLeagueTokenLegacy = '@CRYSTAL_LEAGUE_TOKEN_LEGACY',
  CrystalLeagueTokenNonLethal = '@CRYSTAL_LEAGUE_TOKEN_NON_LETHAL',
}

export enum CrystalleagueitemResourcetype {
  CrystalLeagueToken = 'CRYSTAL_LEAGUE_TOKEN',
}

export enum CrystalleagueitemShopcategory {
  Artefacts = 'artefacts',
  Cityresources = 'cityresources',
  Furniture = 'furniture',
  Luxurygoods = 'luxurygoods',
  Materials = 'materials',
  Other = 'other',
  Products = 'products',
  Resources = 'resources',
  Token = 'token',
}

export enum CrystalleagueitemShopsubcategory1 {
  Crystalleague = 'crystalleague',
}

export interface CrystalleagueitemCraftingrequirements {
  '@silver': string;
  '@salvagesilverfactor'?: string;
}

export interface Equipmentitem {
  '@uniquename': string;
  '@uisprite'?: string;
  '@maxqualitylevel': string;
  '@abilitypower': string;
  '@slottype': Type;
  '@itempowerprogressiontype'?: Iontype;
  '@shopcategory': EquipmentitemShopcategory;
  '@shopsubcategory1': string;
  '@uicraftsoundstart'?: EquipmentitemUicraftsoundstart;
  '@uicraftsoundfinish'?: EquipmentitemUicraftsoundfinish;
  '@skincount'?: string;
  '@tier': string;
  '@weight': string;
  '@activespellslots': string;
  '@passivespellslots': string;
  '@physicalarmor': string;
  '@magicresistance': string;
  '@durability': string;
  '@durabilityloss_attack': string;
  '@durabilityloss_spelluse': string;
  '@durabilityloss_receivedattack': string;
  '@durabilityloss_receivedspell': string;
  '@offhandanimationtype'?: Iontype;
  '@unlockedtocraft': string;
  '@unlockedtoequip': string;
  '@hitpointsmax': string;
  '@hitpointsregenerationbonus': string;
  '@energymax': string;
  '@energyregenerationbonus': string;
  '@crowdcontrolresistance': string;
  '@itempower': string;
  '@physicalattackdamagebonus': string;
  '@magicattackdamagebonus': string;
  '@physicalspelldamagebonus': string;
  '@magicspelldamagebonus': string;
  '@healbonus': string;
  '@bonusccdurationvsplayers': string;
  '@bonusccdurationvsmobs': string;
  '@threatbonus': string;
  '@magiccooldownreduction': string;
  '@bonusdefensevsplayers'?: string;
  '@bonusdefensevsmobs'?: string;
  '@magiccasttimereduction'?: string;
  '@attackspeedbonus'?: string;
  '@movespeedbonus'?: string;
  '@healmodifier'?: string;
  '@canbeovercharged'?: string;
  '@showinmarketplace'?: string;
  '@energycostreduction'?: string;
  '@masterymodifier'?: string;
  craftingrequirements?:
    | FluffyCraftingrequirement[]
    | TentacledCraftingrequirements;
  '@craftingcategory'?: EquipmentitemCraftingcategory;
  '@combatspecachievement'?: string;
  SocketPreset?: AudioInfo;
  enchantments?: EquipmentitemEnchantments;
  '@destinycraftfamefactor'?: string;
  AssetVfxPreset?: AudioInfo;
  '@famevalue'?: string;
  craftingspelllist?: EquipmentitemCraftingspelllist;
  '@descriptionlocatag'?: EquipmentitemDescriptionlocatag;
  '@tradable'?: string;
  '@movespeed'?: string;
  '@maxload'?: string;
  '@facestate'?: Facestate;
  '@hidefromplayer'?: string;
  '@requiredaccesslevel'?: string;
  '@uispriteoverlay1'?: Uispriteoverlay;
  AudioInfo?: AudioInfo;
  '@beardstate'?: Beardstate;
  '@scalemodifier'?: string;
  '@mesh'?: string;
  '@omitmesh'?: string;
  '@mainhandanimationtype'?: string;
  '@skincolormodifier'?: string;
}

export enum Beardstate {
  Empty = 'EMPTY',
  Flat = 'FLAT',
  Half = 'HALF',
}

export enum EquipmentitemCraftingcategory {
  Bag = 'bag',
  Cape = 'cape',
  ClothArmor = 'cloth_armor',
  ClothHelmet = 'cloth_helmet',
  ClothShoes = 'cloth_shoes',
  Gatherergear = 'gatherergear',
  LeatherArmor = 'leather_armor',
  LeatherHelmet = 'leather_helmet',
  LeatherShoes = 'leather_shoes',
  Offhand = 'offhand',
  PlateArmor = 'plate_armor',
  PlateHelmet = 'plate_helmet',
  PlateShoes = 'plate_shoes',
}

export enum EquipmentitemDescriptionlocatag {
  ItemsCapeitemDesc = '@ITEMS_CAPEITEM_DESC',
  ItemsDecorativeEquipmentDesc = '@ITEMS_DECORATIVE_EQUIPMENT_DESC',
  ItemsGeneralBagInsightDesc = '@ITEMS_GENERAL_BAG_INSIGHT_DESC',
  ItemsGeneralEquipmentItemDesc = '@ITEMS_GENERAL_EQUIPMENT_ITEM_DESC',
  ItemsT1ArmorLeatherSet1Desc = '@ITEMS_T1_ARMOR_LEATHER_SET1_DESC',
  ItemsT2ArmorClothSet1Desc = '@ITEMS_T2_ARMOR_CLOTH_SET1_DESC',
  ItemsT2ArmorPlateSet1Desc = '@ITEMS_T2_ARMOR_PLATE_SET1_DESC',
}

export enum Facestate {
  Empty = 'EMPTY',
  Face = 'FACE',
  Half = 'HALF',
  Hood = 'HOOD',
}

export enum Iontype {
  Armor = 'armor',
  Avalonshield = 'avalonshield',
  Bag = 'bag',
  Book = 'book',
  Cane = 'cane',
  Cape = 'cape',
  Censer = 'censer',
  Demonskull = 'demonskull',
  Head = 'head',
  Horn = 'horn',
  Lamp = 'lamp',
  ORB = 'orb',
  Shield = 'shield',
  Shoes = 'shoes',
  Skullshield = 'skullshield',
  Spikedshield = 'spikedshield',
  Talisman = 'talisman',
  Torch = 'torch',
  Totem = 'totem',
  Towershield = 'towershield',
}

export enum EquipmentitemShopcategory {
  Accessories = 'accessories',
  Armor = 'armor',
  Gatherergear = 'gatherergear',
  Melee = 'melee',
  Offhand = 'offhand',
}

export enum Type {
  Armor = 'armor',
  Bag = 'bag',
  Cape = 'cape',
  Head = 'head',
  Mainhand = 'mainhand',
  Offhand = 'offhand',
  Shoes = 'shoes',
}

export enum EquipmentitemUicraftsoundfinish {
  PlayUIActionCraftClothFinish = 'Play_ui_action_craft_cloth_finish',
  PlayUIActionCraftLeatherFinish = 'Play_ui_action_craft_leather_finish',
  PlayUIActionCraftMagicFinish = 'Play_ui_action_craft_magic_finish',
  PlayUIActionCraftMetalFinish = 'Play_ui_action_craft_metal_finish',
  PlayUIActionCraftPlateFinish = 'Play_ui_action_craft_plate_finish',
  PlayUIActionCraftToolFinish = 'Play_ui_action_craft_tool_finish',
  PlayUIActionCraftWoodFinish = 'Play_ui_action_craft_wood_finish',
}

export enum EquipmentitemUicraftsoundstart {
  PlayUIActionCraftClothStart = 'Play_ui_action_craft_cloth_start',
  PlayUIActionCraftLeatherStart = 'Play_ui_action_craft_leather_start',
  PlayUIActionCraftMagicStart = 'Play_ui_action_craft_magic_start',
  PlayUIActionCraftMetalStart = 'Play_ui_action_craft_metal_start',
  PlayUIActionCraftPlateStart = 'Play_ui_action_craft_plate_start',
  PlayUIActionCraftToolStart = 'Play_ui_action_craft_tool_start',
  PlayUIActionCraftWoodStart = 'Play_ui_action_craft_wood_start',
}

export interface FluffyCraftingrequirement {
  '@silver'?: string;
  '@time': string;
  '@craftingfocus': string;
  craftresource: CraftingrequirementCraftresourceClass[];
}

export interface TentacledCraftingrequirements {
  '@silver'?: string;
  '@time': string;
  '@craftingfocus': string;
  craftresource?:
    | CraftingrequirementCraftresourceClass[]
    | CraftingrequirementCraftresourceClass;
}

export interface EquipmentitemCraftingspelllist {
  craftspell: PurpleCraftspell[] | FluffyCraftspell;
}

export interface PurpleCraftspell {
  '@uniquename': string;
  '@slots'?: string;
}

export interface FluffyCraftspell {
  '@uniquename': string;
}

export interface EquipmentitemEnchantments {
  enchantment: EnchantmentsEnchantmentClass[];
}

export interface EnchantmentsEnchantmentClass {
  '@enchantmentlevel': string;
  '@itempower': string;
  '@durability': string;
  craftingrequirements:
    | FluffyCraftingrequirement[]
    | TentacledCraftingrequirements;
  upgraderequirements: Upgraderequirements;
}

export enum Animationid {
  Breed = 'breed',
  Planting = 'planting',
  Sow = 'sow',
}

export enum Kind {
  Animal = 'animal',
  Plant = 'plant',
}

export enum FarmableitemShopcategory {
  Farmables = 'farmables',
  Products = 'products',
}

export enum FarmableitemShopsubcategory1 {
  Animals = 'animals',
  Seed = 'seed',
}

export interface Consumption {
  food: Food;
}

export interface Food {
  '@nutritionmax': string;
  '@secondspernutrition': string;
  acceptedfood: Acceptedfood;
  '@lossbeforehungry'?: string;
}

export interface Acceptedfood {
  '@foodcategory': Foodcategory;
}

export interface Grownitem {
  '@uniquename': string;
  '@growtime': string;
  '@fame': string;
  offspring: Offspring;
}

export interface Offspring {
  '@chance': string;
  '@amount': string;
}

export interface Harvest {
  '@growtime': string;
  '@lootlist': string;
  '@lootchance': string;
  '@fame': string;
  seed: Offspring;
}

export interface Products {
  product: Product;
}

export interface Product {
  '@productiontime': string;
  '@actionname': string;
  '@lootlist': string;
  '@lootchance': string;
  '@fame': string;
}

export interface Furnitureitem {
  '@uniquename': string;
  '@shopcategory': FurnitureitemShopcategory;
  '@shopsubcategory1': string;
  '@tier': string;
  '@durability'?: string;
  '@durabilitylossperdayfactor'?: string;
  '@weight': string;
  '@unlockedtocraft'?: string;
  '@placeableindoors': string;
  '@placeableoutdoors': string;
  '@placeableindungeons': string;
  '@placeableinexpeditions': string;
  '@accessrightspreset'?: string;
  '@uicraftsoundstart'?: FurnitureitemUicraftsoundstart;
  '@uicraftsoundfinish'?: FurnitureitemUicraftsoundfinish;
  craftingrequirements?:
    | PurpleCraftingrequirement[]
    | StickyCraftingrequirements;
  AudioInfo?: AudioInfo;
  repairkit?: Repairkit;
  '@customizewithguildlogo'?: string;
  '@uisprite'?: string;
  '@hideinmarketplaceuntil'?: string;
  '@enchantmentlevel'?: string;
  '@tile'?: string;
  '@itemvalue'?: string;
  container?: Container;
  '@showinmarketplace'?: string;
  '@residencyslots'?: string;
  '@labourerfurnituretype'?: Labourerfurnituretype;
  '@labourersaffected'?: Labourersaffected;
  '@labourerhappiness'?: string;
  '@labourersperfurnitureitem'?: string;
  '@placeableonlyonislands'?: string;
  '@descriptionlocatag'?: FurnitureitemDescriptionlocatag;
  '@salvageable'?: string;
  '@hidefromplayer'?: string;
  '@namelocatag'?: string;
  cheatprovider?: null;
  '@maxstacksize'?: string;
  '@tradable'?: string;
  '@durabilitylossperusefactor'?: string;
}

export enum FurnitureitemDescriptionlocatag {
  ItemsFurnitureitemPlayerislandDesc = '@ITEMS_FURNITUREITEM_PLAYERISLAND_DESC',
  ItemsFurnitureitemTrophyFiberDesc = '@ITEMS_FURNITUREITEM_TROPHY_FIBER_DESC',
  ItemsFurnitureitemTrophyFishDesc = '@ITEMS_FURNITUREITEM_TROPHY_FISH_DESC',
  ItemsFurnitureitemTrophyGeneralDesc = '@ITEMS_FURNITUREITEM_TROPHY_GENERAL_DESC',
  ItemsFurnitureitemTrophyHideDesc = '@ITEMS_FURNITUREITEM_TROPHY_HIDE_DESC',
  ItemsFurnitureitemTrophyMercenaryDesc = '@ITEMS_FURNITUREITEM_TROPHY_MERCENARY_DESC',
  ItemsFurnitureitemTrophyOreDesc = '@ITEMS_FURNITUREITEM_TROPHY_ORE_DESC',
  ItemsFurnitureitemTrophyRockDesc = '@ITEMS_FURNITUREITEM_TROPHY_ROCK_DESC',
  ItemsFurnitureitemTrophyWoodDesc = '@ITEMS_FURNITUREITEM_TROPHY_WOOD_DESC',
  ItemsUniqueFurnitureitemADCGlassSphereADesc = '@ITEMS_UNIQUE_FURNITUREITEM_ADC_GLASS_SPHERE_A_DESC',
}

export enum Labourerfurnituretype {
  Bed = 'bed',
  Table = 'table',
  Trophy = 'trophy',
}

export enum Labourersaffected {
  All = 'all',
  Fiber = 'fiber',
  Fishing = 'fishing',
  Hide = 'hide',
  Mercenary = 'mercenary',
  Ore = 'ore',
  Stone = 'stone',
  Wood = 'wood',
}

export enum FurnitureitemShopcategory {
  Furniture = 'furniture',
  Trophies = 'trophies',
}

export enum FurnitureitemUicraftsoundfinish {
  PlayUIActionCraftFlourFinish = 'Play_ui_action_craft_flour_finish',
  PlayUIActionCraftFoodFinish = 'Play_ui_action_craft_food_finish',
  PlayUIActionCraftMeatFinish = 'Play_ui_action_craft_meat_finish',
  PlayUIActionCraftRefineFiberFinish = 'Play_ui_action_craft_refine_fiber_finish',
  PlayUIActionCraftRefineHideFinish = 'Play_ui_action_craft_refine_hide_finish',
  PlayUIActionCraftRefineOreFinish = 'Play_ui_action_craft_refine_ore_finish',
  PlayUIActionCraftRefineStoneFinish = 'Play_ui_action_craft_refine_stone_finish',
  PlayUIActionCraftRefineWoodFinish = 'Play_ui_action_craft_refine_wood_finish',
}

export enum FurnitureitemUicraftsoundstart {
  PlayUIActionCraftFlourStart = 'Play_ui_action_craft_flour_start',
  PlayUIActionCraftFoodFirmStart = 'Play_ui_action_craft_food_firm_start',
  PlayUIActionCraftFoodFryStart = 'Play_ui_action_craft_food_fry_start',
  PlayUIActionCraftFoodLiquidStart = 'Play_ui_action_craft_food_liquid_start',
  PlayUIActionCraftMeatStart = 'Play_ui_action_craft_meat_start',
  PlayUIActionCraftRefineFiberStart = 'Play_ui_action_craft_refine_fiber_start',
  PlayUIActionCraftRefineHideStart = 'Play_ui_action_craft_refine_hide_start',
  PlayUIActionCraftRefineOreStart = 'Play_ui_action_craft_refine_ore_start',
  PlayUIActionCraftRefineStoneStart = 'Play_ui_action_craft_refine_stone_start',
  PlayUIActionCraftRefineWoodStart = 'Play_ui_action_craft_refine_wood_start',
}

export interface Container {
  '@capacity': string;
  '@weightlimit': string;
}

export interface StickyCraftingrequirements {
  '@time': string;
  '@craftingfocus'?: string;
  craftresource?:
    | ReplacementitemElement[]
    | CraftingrequirementCraftresourceClass;
  '@gold'?: string;
  '@silver'?: string;
  '@amountcrafted'?: string;
}

export interface Repairkit {
  '@repaircostfactor': string;
  '@maxtier': string;
}

export interface Journalitem {
  '@salvageable': string;
  '@uniquename': string;
  '@tier': string;
  '@maxfame': string;
  '@baselootamount': string;
  '@shopcategory': CrystalleagueitemShopcategory;
  '@shopsubcategory1': JournalitemShopsubcategory1;
  '@weight': string;
  '@unlockedtocraft': string;
  '@fasttravelfactor'?: string;
  craftingrequirements: JournalitemCraftingrequirements;
  famefillingmissions: Famefillingmissions;
  lootlist: Lootlist;
  '@uisprite'?: string;
}

export enum JournalitemShopsubcategory1 {
  Journal = 'journal',
}

export interface JournalitemCraftingrequirements {
  '@silver': string;
  '@time': string;
  '@swaptransaction': string;
}

export interface Famefillingmissions {
  gatherfame?: Fame;
  craftitemfame?: Fame;
  killmobfame?: Killmobfame;
  fameearned?: Fameearned;
  fishingfame?: Fameearned;
}

export interface Fame {
  '@mintier': string;
  '@value': string;
  validitem: Validitem[];
}

export interface Validitem {
  '@id': string;
}

export interface Fameearned {
  '@value': string;
}

export interface Killmobfame {
  '@mintier': string;
  '@value': string;
}

export interface Lootlist {
  loot: LootElement[] | LootElement;
}

export interface LootElement {
  '@itemname'?: string;
  '@itemamount'?: string;
  '@weight': string;
  '@labourerfame': string;
  '@itemenchantmentlevel'?: string;
  '@silveramount'?: string;
}

export interface Killtrophy {
  '@uniquename': string;
  '@shopcategory': CrystalleagueitemShopcategory;
  '@shopsubcategory1': string;
  '@tier': string;
  '@weight': string;
  '@durability': string;
  '@unlockedtocraft': string;
  '@placeableindoors': string;
  '@placeableoutdoors': string;
  '@placeableindungeons': string;
  '@placeableinexpeditions': string;
  '@placeableonlyonislands': string;
  '@uisprite': string;
  '@descriptionlocatag': FurnitureitemDescriptionlocatag;
  '@showinmarketplace': string;
  '@hidefromplayer': string;
  craftingrequirements: KilltrophyCraftingrequirements;
}

export interface KilltrophyCraftingrequirements {
  '@gold': string;
  '@time': string;
}

export interface Labourercontract {
  '@uniquename': string;
  '@tier': string;
  '@shopcategory': LabourercontractShopcategory;
  '@shopsubcategory1': string;
  '@unlockedtocraft': string;
  '@weight': string;
}

export enum LabourercontractShopcategory {
  Labourers = 'labourers',
}

export interface Mount {
  '@uniquename': string;
  '@mountcategory'?: string;
  '@maxqualitylevel': string;
  '@itempower': string;
  '@abilitypower': string;
  '@slottype': Slottype;
  '@shopcategory': MountShopcategory;
  '@shopsubcategory1': string;
  '@mountedbuff': string;
  '@halfmountedbuff': string;
  '@tier': string;
  '@weight': string;
  '@activespellslots': string;
  '@passivespellslots': string;
  '@durability': string;
  '@durabilityloss_attack': string;
  '@durabilityloss_spelluse': string;
  '@durabilityloss_receivedattack': string;
  '@durabilityloss_receivedspell': string;
  '@durabilityloss_receivedattack_mounted': string;
  '@durabilityloss_receivedspell_mounted': string;
  '@durabilityloss_mounting': string;
  '@unlockedtocraft': string;
  '@unlockedtoequip': string;
  '@mounttime': string;
  '@dismounttime': string;
  '@mounthitpointsmax': string;
  '@mounthitpointsregeneration': string;
  '@prefabname': string;
  '@prefabscaling': string;
  '@despawneffect': Despawneffect;
  '@despawneffectscaling': string;
  '@remountdistance': string;
  '@halfmountrange': string;
  '@forceddismountcooldown': string;
  '@forceddismountspellcooldown': string;
  '@fulldismountcooldown': string;
  '@remounttime': string;
  '@uicraftsoundstart': MountUicraftsoundstart;
  '@uicraftsoundfinish': MountUicraftsoundfinish;
  '@dismountbuff': Dismountbuff;
  '@forceddismountbuff'?: Forceddismountbuff;
  '@hostiledismountbuff'?: Hostiledismountbuff;
  '@showinmarketplace'?: string;
  '@hidefromplayer'?: string;
  '@vfxAddonKeyword': string;
  craftingrequirements: MountCraftingrequirements;
  craftingspelllist?: EquipmentitemCraftingspelllist;
  SocketPreset: AudioInfo;
  AudioInfo: AudioInfo;
  AssetVfxPreset?: AudioInfo;
  FootStepVfxPreset?: AudioInfo;
  '@canusetownportal'?: string;
  '@uisprite'?: string;
  '@nametagoffset'?: string;
  '@canuseingvg'?: string;
  mountspelllist?: Mountspelllist;
  '@enchantmentlevel'?: string;
  '@canuseinfactionwarfare'?: string;
  '@hideinmarketplaceuntil'?: string;
  '@itemvalue'?: string;
  '@descriptionlocatag'?: string;
}

export enum Despawneffect {
  FXClientPrefabsDemountFxBig = 'FX/ClientPrefabs/demount_fx_big',
  FXClientPrefabsDemountFxMedium = 'FX/ClientPrefabs/demount_fx_medium',
  FXClientPrefabsDemountFxSmall = 'FX/ClientPrefabs/demount_fx_small',
  FXClientPrefabsDemountFxVerySmall = 'FX/ClientPrefabs/demount_fx_very_small',
}

export enum Dismountbuff {
  Dismounted = 'DISMOUNTED',
}

export enum Forceddismountbuff {
  ForceDismounted = 'FORCE_DISMOUNTED',
}

export enum Hostiledismountbuff {
  DismountedHostile = 'DISMOUNTED_HOSTILE',
}

export enum MountShopcategory {
  Mounts = 'mounts',
}

export enum Slottype {
  Mount = 'mount',
}

export enum MountUicraftsoundfinish {
  PlayMountMounted = 'Play_mount_mounted',
  PlayUIActionCraftSiegemountFinish = 'Play_ui_action_craft_siegemount_finish',
}

export enum MountUicraftsoundstart {
  PlayUIActionCraftMountStart = 'Play_ui_action_craft_mount_start',
}

export interface MountCraftingrequirements {
  '@silver': string;
  '@time': string;
  '@craftingfocus'?: string;
  craftresource?:
    | CraftingrequirementCraftresourceClass[]
    | ReplacementitemElement;
  '@gold'?: string;
  '@compensategold'?: string;
}

export interface Mountspelllist {
  mountspell: MountspellElement[] | MountspellElement;
}

export interface MountspellElement {
  '@uniquename': string;
  '@spellslot': Spellslot;
}

export enum Spellslot {
  Armor = 'armor',
  Mainhand1 = 'mainhand1',
  Mainhand2 = 'mainhand2',
  Offhandormainhand3 = 'offhandormainhand3',
  Shoes = 'shoes',
}

export interface Mountskin {
  '@uniquename': string;
  '@uisprite'?: string;
  '@prefabname': string;
  '@prefabscaling': string;
  '@despawneffect': Despawneffect;
  '@despawneffectscaling': string;
  '@vfxAddonKeyword': string;
  SocketPreset: AudioInfo;
  AudioInfo: AudioInfo;
  FootStepVfxPreset?: AudioInfo;
  AssetVfxPreset?: AudioInfo;
}

export enum SimpleitemCraftingcategory {
  Fiber = 'fiber',
  Food = 'food',
  Hide = 'hide',
  Ore = 'ore',
  Rock = 'rock',
  Wood = 'wood',
}

export enum SimpleitemDescriptionlocatag {
  CaravanTradepackCaerleonHeavyDesc = '@CARAVAN_TRADEPACK_CAERLEON_HEAVY_DESC',
  CaravanTradepackCaerleonLightDesc = '@CARAVAN_TRADEPACK_CAERLEON_LIGHT_DESC',
  CaravanTradepackCaerleonMediumDesc = '@CARAVAN_TRADEPACK_CAERLEON_MEDIUM_DESC',
  CaravanTradepackForestHeavyDesc = '@CARAVAN_TRADEPACK_FOREST_HEAVY_DESC',
  CaravanTradepackForestLightDesc = '@CARAVAN_TRADEPACK_FOREST_LIGHT_DESC',
  CaravanTradepackForestMediumDesc = '@CARAVAN_TRADEPACK_FOREST_MEDIUM_DESC',
  CaravanTradepackHighlandHeavyDesc = '@CARAVAN_TRADEPACK_HIGHLAND_HEAVY_DESC',
  CaravanTradepackHighlandLightDesc = '@CARAVAN_TRADEPACK_HIGHLAND_LIGHT_DESC',
  CaravanTradepackHighlandMediumDesc = '@CARAVAN_TRADEPACK_HIGHLAND_MEDIUM_DESC',
  CaravanTradepackMountainHeavyDesc = '@CARAVAN_TRADEPACK_MOUNTAIN_HEAVY_DESC',
  CaravanTradepackMountainLightDesc = '@CARAVAN_TRADEPACK_MOUNTAIN_LIGHT_DESC',
  CaravanTradepackMountainMediumDesc = '@CARAVAN_TRADEPACK_MOUNTAIN_MEDIUM_DESC',
  CaravanTradepackSteppeHeavyDesc = '@CARAVAN_TRADEPACK_STEPPE_HEAVY_DESC',
  CaravanTradepackSteppeLightDesc = '@CARAVAN_TRADEPACK_STEPPE_LIGHT_DESC',
  CaravanTradepackSteppeMediumDesc = '@CARAVAN_TRADEPACK_STEPPE_MEDIUM_DESC',
  CaravanTradepackSwampHeavyDesc = '@CARAVAN_TRADEPACK_SWAMP_HEAVY_DESC',
  CaravanTradepackSwampLightDesc = '@CARAVAN_TRADEPACK_SWAMP_LIGHT_DESC',
  CaravanTradepackSwampMediumDesc = '@CARAVAN_TRADEPACK_SWAMP_MEDIUM_DESC',
  ExpeditionTokenDesc = '@EXPEDITION_TOKEN_DESC',
  ItemsArtefactWeaponDesc = '@ITEMS_ARTEFACT_WEAPON_DESC',
  ItemsCapeitemBpDesc = '@ITEMS_CAPEITEM_BP_DESC',
  ItemsFishsauceDesc = '@ITEMS_FISHSAUCE_DESC',
  ItemsQuestitemTokenArenaUnrankedDesc = '@ITEMS_QUESTITEM_TOKEN_ARENA_UNRANKED_DESC',
  ItemsQuestitemTokenArenaUnrankedLegacyDesc = '@ITEMS_QUESTITEM_TOKEN_ARENA_UNRANKED_LEGACY_DESC',
  ItemsShardAvalonianDesc = '@ITEMS_SHARD_AVALONIAN_DESC',
  ItemsUniqueFurnitureitemGvgSeasonNotreadyDesc = '@ITEMS_UNIQUE_FURNITUREITEM_GVG_SEASON_NOTREADY_DESC',
}

export interface TentacledCraftingrequirement {
  '@time': string;
  '@amountcrafted'?: string;
  craftresource?:
    | CraftingrequirementCraftresourceClass[]
    | CraftingrequirementCraftresourceClass;
  '@silver'?: string;
  '@craftingfocus'?: string;
  currency?: Currency;
}

export interface IndigoCraftingrequirements {
  '@time': string;
  craftresource?:
    | ReplacementitemElement[]
    | CraftingrequirementCraftresourceClass;
  '@silver'?: string;
  '@amountcrafted'?: string;
  '@craftingfocus'?: string;
  '@returnproductnotresource'?: string;
  '@swaptransaction'?: string;
  currency?: Currency;
  playerfactionstanding?: Playerfactionstanding;
}

export interface Replaceondeath {
  replacementitem: ReplacementitemElement;
}

export interface Weapon {
  '@uniquename': string;
  '@mesh'?: string;
  '@uisprite'?: string;
  '@maxqualitylevel': string;
  '@abilitypower': string;
  '@slottype': Type;
  '@shopcategory': Attacktype;
  '@shopsubcategory1': Shopsubcategory1Enum;
  '@attacktype': Attacktype;
  '@attackdamage'?: string;
  '@attackspeed'?: string;
  '@attackrange'?: string;
  '@twohanded': string;
  '@tier': string;
  '@weight': string;
  '@activespellslots': string;
  '@passivespellslots': string;
  '@durability': string;
  '@durabilityloss_attack': string;
  '@durabilityloss_spelluse': string;
  '@durabilityloss_receivedattack': string;
  '@durabilityloss_receivedspell': string;
  '@mainhandanimationtype': string;
  '@unlockedtocraft': string;
  '@unlockedtoequip': string;
  '@itempower': string;
  '@unequipincombat'?: string;
  '@uicraftsoundstart': EquipmentitemUicraftsoundstart;
  '@uicraftsoundfinish': EquipmentitemUicraftsoundfinish;
  '@canbeovercharged'?: string;
  canharvest?: Canharvest;
  craftingrequirements?:
    | StickyCraftingrequirement[]
    | IndecentCraftingrequirements;
  AudioInfo?: AudioInfo;
  SocketPreset?: AudioInfo;
  '@craftingcategory'?: Shopsubcategory1Enum;
  '@descriptionlocatag'?: WeaponDescriptionlocatag;
  craftingspelllist?: WeaponCraftingspelllist;
  '@attackbuildingdamage'?: string;
  '@fishing'?: string;
  '@fishingspeed'?: string;
  '@physicalspelldamagebonus'?: string;
  '@magicspelldamagebonus'?: string;
  '@fxbonename'?: Fxbonename;
  '@fxboneoffset'?: Fxboneoffset;
  '@hitpointsmax'?: string;
  '@hitpointsregenerationbonus'?: string;
  '@itempowerprogressiontype'?: Type;
  '@focusfireprotectionpenetration'?: string;
  '@healmodifier'?: string;
  '@masterymodifier'?: string;
  '@physicalattackdamagebonus'?: string;
  '@magicattackdamagebonus'?: string;
  projectile?: ProjectileElement[] | ProjectileElement;
  '@combatspecachievement'?: string;
  enchantments?: EquipmentitemEnchantments;
  '@destinycraftfamefactor'?: string;
  '@showinmarketplace'?: string;
  attackvariations?: Attackvariations;
  AssetVfxPreset?: AudioInfo;
  '@triggershealingsickness'?: string;
  '@hidefromplayer'?: string;
  '@requiredaccesslevel'?: string;
  '@attackdamagetimefactor'?: string;
  '@mainhandanimationtype_attack'?: MainhandanimationtypeAttack;
  attackvfx?: WeaponAttackvfx;
  '@tradable'?: string;
  '@skincount'?: string;
  '@physicalarmor'?: string;
  '@magicresistance'?: string;
  '@energymax'?: string;
  '@energyregenerationbonus'?: string;
  '@crowdcontrolresistance'?: string;
  '@healbonus'?: string;
  '@bonusccdurationvsplayers'?: string;
  '@bonusccdurationvsmobs'?: string;
  '@threatbonus'?: string;
  '@magiccooldownreduction'?: string;
  '@bonusdefensevsplayers'?: string;
  '@bonusdefensevsmobs'?: string;
  '@magiccasttimereduction'?: string;
  '@attackspeedbonus'?: string;
  '@movespeedbonus'?: string;
  '@namelocatag'?: string;
}

export enum Attacktype {
  Magic = 'magic',
  Melee = 'melee',
  Ranged = 'ranged',
  Tools = 'tools',
}

export enum Shopsubcategory1Enum {
  Arcanestaff = 'arcanestaff',
  Axe = 'axe',
  Bow = 'bow',
  Crossbow = 'crossbow',
  Cursestaff = 'cursestaff',
  Dagger = 'dagger',
  Demolitionhammer = 'demolitionhammer',
  Firestaff = 'firestaff',
  Fishing = 'fishing',
  Froststaff = 'froststaff',
  Hammer = 'hammer',
  Holystaff = 'holystaff',
  Knuckles = 'knuckles',
  Mace = 'mace',
  Naturestaff = 'naturestaff',
  Pickaxe = 'pickaxe',
  Quarterstaff = 'quarterstaff',
  Sickle = 'sickle',
  Skinningknife = 'skinningknife',
  Spear = 'spear',
  Stonehammer = 'stonehammer',
  Sword = 'sword',
  Tools = 'tools',
  Woodaxe = 'woodaxe',
}

export enum WeaponDescriptionlocatag {
  ItemsGeneralEquipmentItemDesc = '@ITEMS_GENERAL_EQUIPMENT_ITEM_DESC',
  ItemsT82HToolSiegehammerDesc = '@ITEMS_T8_2H_TOOL_SIEGEHAMMER_DESC',
}

export enum Fxbonename {
  LeftArm3 = 'LeftArm_3',
  RightArm3 = 'RightArm_3',
}

export enum Fxboneoffset {
  The0202270135 = '0.2 -0.227 0.135',
  The133011043 = '1.33 0.11 -0.43',
}

export enum MainhandanimationtypeAttack {
  KnucklesSpeed = 'knuckles_speed',
  QuarterstaffSpeed = 'quarterstaff_speed',
}

export interface Attackvariations {
  '@attackchaintime': string;
  attack: Attack[];
}

export interface Attack {
  '@attacktype': Attacktype;
  '@attackdamagefactor': string;
  '@attackdamagetimefactor': string;
  '@attackspeedfactor': string;
  attackvfx?: AttackvfxElement[];
}

export interface AttackvfxElement {
  '@prefab': Prefab;
  '@socket': Socket;
  '@constraintpreset': Constraintpreset;
  '@target': Target;
  '@visibility'?: Visibility;
}

export enum Constraintpreset {
  InWorldWithRotate = 'inWorldWithRotate',
}

export enum Prefab {
  FXClientPrefabsFxHit02 = 'FX/ClientPrefabs/fx_hit_02',
  PrefabsVfxMeleeHitMeleeHit = 'Prefabs/Vfx/MeleeHit/MeleeHit',
}

export enum Socket {
  Damage = 'damage',
  Mainhand = 'mainhand',
  Offhand = 'offhand',
}

export enum Target {
  Self = 'self',
  Target = 'target',
}

export enum Visibility {
  AffectedAndInstigatorOnly = 'AffectedAndInstigatorOnly',
}

export interface WeaponAttackvfx {
  '@prefab': Prefab;
  '@target': Target;
}

export interface Canharvest {
  '@resourcetype': CanharvestResourcetype;
}

export enum CanharvestResourcetype {
  Fiber = 'FIBER',
  Hide = 'HIDE',
  Ore = 'ORE',
  Rock = 'ROCK',
  Wood = 'WOOD',
}

export interface StickyCraftingrequirement {
  '@silver'?: string;
  '@time': string;
  '@craftingfocus': string;
  craftresource: CraftingrequirementCraftresourceClass[];
  '@swaptransaction'?: string;
}

export interface IndecentCraftingrequirements {
  '@silver': string;
  '@time': string;
  '@craftingfocus': string;
  craftresource:
    | CraftingrequirementCraftresourceClass[]
    | ReplacementitemElement;
}

export interface WeaponCraftingspelllist {
  craftspell: TentacledCraftspell[] | PurpleCraftspell;
}

export interface TentacledCraftspell {
  '@uniquename': string;
  '@slots'?: string;
  '@tag'?: Tag;
}

export enum Tag {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G',
  H = 'H',
  I = 'I',
}

export interface ProjectileElement {
  '@prefab': string;
  '@startsocket': Startsocket;
  '@hitsocket': Socket;
  '@flyspeed'?: string;
  impactvfx: Impactvfx;
  AudioInfo?: AudioInfo;
  '@timeoffset'?: string;
}

export enum Startsocket {
  Mainhandprojectile = 'mainhandprojectile',
  Mainhandprojectilemuzzle = 'mainhandprojectilemuzzle',
  Offhandprojectile = 'offhandprojectile',
}

export interface Impactvfx {
  '@prefab': string;
  '@impactsocket': Socket;
}
