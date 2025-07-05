import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Settings extends Document {
  @Prop() backgroundColor: string;
  @Prop() textColor: string;
  @Prop() praxisName: string;
  @Prop() menu: { label: string; slug: string }[];
}

export const SettingsSchema = SchemaFactory.createForClass(Settings);
