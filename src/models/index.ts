import UpdateStatus from './updateStatus';
import ShopCategory from './shopCategory';
import ShopSubcategory from './shopSubcategory';
import Translation from './translation';
import Item from './item';
import CraftingRequirement from './craftingRequirements';
import CraftingResource from './craftingResources';
import Enchantment from './enchantment';
import EnchantmentUpgradeResource from './enchantmentUpgradeResource';
import ItemLocalization from './itemLocalization';

import { Configuration } from 'realm';
const realmConfig: Configuration = {
  inMemory: true,
  schema: [
    Translation,
    ShopSubcategory,
    ShopCategory,
    UpdateStatus,
    Item,
    CraftingRequirement,
    CraftingResource,
    Enchantment,
    EnchantmentUpgradeResource,
    ItemLocalization,
  ],
  deleteRealmIfMigrationNeeded: true,
};

export {
  realmConfig,
  Translation,
  ShopSubcategory,
  ShopCategory,
  UpdateStatus,
  Item,
  CraftingRequirement,
  CraftingResource,
  Enchantment,
  EnchantmentUpgradeResource,
  ItemLocalization,
};
