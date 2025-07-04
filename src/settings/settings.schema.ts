import { Schema } from 'mongoose';

export const SettingsSchema = new Schema({
  backgroundColor: String,
  textColor: String,
  praxisName: String,
  menu: [{ label: String, slug: String }],
}, { _id: false });
