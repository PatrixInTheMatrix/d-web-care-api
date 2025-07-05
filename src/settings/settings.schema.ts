import { Schema, Document } from 'mongoose';

export interface SettingsDocument extends Document {
  backgroundColor: string;
  textColor: string;
  praxisName: string;
  menu: { label: string; slug: string }[];
}

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

export const SettingsModel = { name: 'Settings', schema: SettingsSchema };
