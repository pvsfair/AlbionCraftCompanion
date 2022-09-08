import { Configuration } from 'realm';
import {
  ShopCategorySchema,
  ShopSubcategorySchema,
  TranslationSchema,
  UpdateStatusSchema,
} from '../models/items';

export const realmConfig: Configuration = {
  path: 'myrealm',
  schema: [
    ShopCategorySchema,
    ShopSubcategorySchema,
    TranslationSchema,
    UpdateStatusSchema,
  ],
  deleteRealmIfMigrationNeeded: true,
};
