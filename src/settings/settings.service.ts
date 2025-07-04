import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SettingsService {
  constructor(@InjectModel('Settings') private model: Model<any>) {}

  async getSettings() {
    return this.model.findOne().lean();
  }

  async saveSettings(data: any) {
    const existing = await this.model.findOne();
    if (existing) {
      return this.model.updateOne({}, data);
    }
    return this.model.create(data);
  }
}
