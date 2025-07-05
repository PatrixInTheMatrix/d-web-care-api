import { Controller, Get, Post, Body } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { SettingsGateway } from './settings.gateway';
import { Settings } from './settings.schema';

@Controller('api/settings')
export class SettingsController {
  constructor(
    private readonly service: SettingsService,
    private readonly gateway: SettingsGateway,
  ) {}

  @Get()
  async getSettings(): Promise<Settings> {
    return await this.service.getSettings(); // ✅ aus DB laden
  }

  @Post()
  async saveSettings(@Body() dto: Settings): Promise<{ success: boolean }> {
    await this.service.saveSettings(dto);
    this.gateway.broadcastSettingsUpdate(); // 🔁 Live-Update senden
    return { success: true };
  }
}
