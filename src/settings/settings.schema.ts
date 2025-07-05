// src/settings/settings.schema.ts
import { Schema, Document } from 'mongoose';

/**
 * Flacher Typ für die Settings-Daten – wird überall im Code verwendet
 */
export type Settings = {
  backgroundColor: string;
  textColor: string;
  praxisName: string;
  menu: { label: string; slug: string }[];
};

/**
 * Erweiterung des Mongoose-Dokuments mit den Settings-Feldern
 * Fügt interne Felder wie _id, __v hinzu
 */
export interface SettingsDocument extends Document, Settings {}

/**
 * Das Schema für die MongoDB-Collection 'settings'
 */
export const SettingsSchema = new Schema<SettingsDocument>({
  backgroundColor: { type: String, required: true },
  textColor: { type: String, required: true },
  praxisName: { type: String, required: true },
  menu: [
    {
      label: { type: String, required: true },
      slug: { type: String, required: true },
    },
  ],
});

/**
 * Exportiertes Model für MongooseModule.forFeature([...])
 */
export const SettingsModel = {
  name: 'Settings',
  schema: SettingsSchema,
};
