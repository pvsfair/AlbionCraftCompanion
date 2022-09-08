import { ObjectSchema } from 'realm';

export default class Translation {
  static schema: ObjectSchema = {
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

  'EN-US'?: string;
  'DE-DE'?: string;
  'FR-FR'?: string;
  'RU-RU'?: string;
  'PL-PL'?: string;
  'ES-ES'?: string;
  'PT-BR'?: string;
  'IT-IT'?: string;
  'ZH-CN'?: string;
  'KO-KR'?: string;
  'JA-JP'?: string;
}
