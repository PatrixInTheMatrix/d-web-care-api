import { Controller, Get, Post, Body } from '@nestjs/common';
import { SettingsService } from './settings.service';

@Controller('api/settings')
export class SettingsController {
  constructor(private readonly service: SettingsService) { }

  @Get('settings')
  async getSettings(): Promise<PraxisSettings> {
    return {
      backgroundColor: '#ffffff',
      textColor: '#000000',
      praxisName: 'D-WebCare',
      menu: [],
    };
  }

  @Post()
  saveSettings(@Body() data: any) {
    return this.service.saveSettings(data);
  }
}
