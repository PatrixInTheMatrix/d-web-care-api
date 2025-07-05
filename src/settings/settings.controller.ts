import { Controller, Get, Post, Body } from '@nestjs/common';
import { SettingsService } from './settings.service';

type PraxisSettings = {
  backgroundColor: string;
  textColor: string;
  praxisName: string;
  menu: { label: string; slug: string }[];
};

@Controller('api/settings')
export class SettingsController {
  constructor(private readonly service: SettingsService) {}

  @Get()
  async getSettings(): Promise<PraxisSettings> {
    return {
      backgroundColor: '#ffffff',
      textColor: '#000000',
      praxisName: 'D-WebCare',
      menu: [],
    };
  }

  @Post()
  saveSettings(@Body() data: PraxisSettings) {
    return this.service.saveSettings(data);
  }
}