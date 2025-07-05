import { Controller, Get, Post, Body } from '@nestjs/common';
import { SettingsGateway } from 'src/settings.gateway';
import { SettingsService } from './settings.service';

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

  constructor(
    private readonly service: SettingsService,
    private readonly gateway: SettingsGateway,
  ) { }

  @Get()
  getSettings(): PraxisSettings {
    return this.settings;
  }

  @Post()
  saveSettings(@Body() dto: PraxisSettings): { success: boolean } {
    this.service.saveSettings(dto);
    this.gateway.broadcastSettingsUpdate(); // 🔥 alle Clients benachrichtigen
    return { success: true };
  }
}
