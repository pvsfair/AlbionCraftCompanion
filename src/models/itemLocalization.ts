import { BSON, ObjectSchema } from 'realm';
import Item from './item';
import Translation from './translation';

export default class ItemLocalization {
  static tableName = 'ItemLocalization';
  static schema: ObjectSchema = {
    name: this.tableName,
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

  _id!: BSON.UUID;
  LocalizationNameVariable!: string;
  LocalizationDescriptionVariable!: string;
  LocalizedNames?: Translation;
  LocalizedDescriptions?: Translation;
  UniqueName!: string;
  Item!: Item;
}
