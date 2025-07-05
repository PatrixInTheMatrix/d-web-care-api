// src/settings/settings.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SettingsDocument } from './settings.schema';

@Injectable()
export class SettingsService {
  constructor(
    @InjectModel('Settings') private readonly model: Model<SettingsDocument>,
  ) {}

  async getSettings(): Promise<SettingsDocument> {
    const all = await this.model.find().limit(1).exec();
    if (all.length === 0) {
      // Falls noch kein Eintrag existiert, Default schreiben
      const defaults = new this.model({
        backgroundColor: '#ffffff',
        textColor: '#000000',
        praxisName: 'D-WebCare',
        menu: [],
      });
      return defaults.save();
    }
    return all[0];
  }

  async saveSettings(dto: Partial<SettingsDocument>): Promise<void> {
    const all = await this.model.find().limit(1).exec();
    if (all.length === 0) {
      await new this.model(dto).save();
    } else {
      await this.model.updateOne({ _id: all[0]._id }, dto).exec();
    }
  }
}
