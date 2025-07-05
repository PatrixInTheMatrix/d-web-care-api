import { Module } from '@nestjs/common';
import { SettingsController } from './settings/settings.controller';
import { SettingsService } from './settings/settings.service';
import { SettingsGateway } from './settings.gateway';
@Module({
  controllers: [SettingsController],
  providers: [SettingsService, SettingsGateway],
})
export class AppModule {}
