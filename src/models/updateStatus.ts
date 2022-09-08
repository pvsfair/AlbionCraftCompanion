import { BSON, ObjectSchema } from 'realm';

export default class UpdateStatus {
  static schema: ObjectSchema = {
    name: 'UpdateStatus',
    properties: {
      _id: 'uuid',
      schemaName: 'string',
      lastUpdated: 'date',
    },
    primaryKey: '_id',
  };

  _id!: BSON.UUID;
  schemaName!: string;
  lastUpdated!: Date;
}
