import { Controller, Get, Post, Body } from '@nestjs/common';

interface PraxisSettings {
  backgroundColor: string;
  textColor: string;
  praxisName: string;
  menu: { label: string; slug: string }[];
}

@Controller('api/settings')
export class SettingsController {
  private settings: PraxisSettings = {
    backgroundColor: '#ffffff',
    textColor: '#000000',
    praxisName: 'D-WebCare',
    menu: [],
  };

  @Get()
  getSettings(): PraxisSettings {
    return this.settings;
  }

  @Post()
  saveSettings(@Body() dto: PraxisSettings): { success: boolean } {
    this.settings = dto;
    return { success: true };
  }
}
