import { Controller, Get, Post, Body } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { PraxisSettingsDto } from './dto/praxis-settings.dto';

@Controller('api/settings')
export class SettingsController {
  constructor(private readonly service: SettingsService) {}

  @Get()
  getSettings(): PraxisSettingsDto {
    return {
      backgroundColor: '#ffffff',
      textColor: '#000000',
      praxisName: 'D-WebCare',
      menu: [],
    };
  }

  @Post()
  saveSettings(@Body() data: PraxisSettingsDto): { success: boolean } {
    this.service.saveSettings(data);
    return { success: true };
  }
}
