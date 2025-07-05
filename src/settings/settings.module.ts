import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Settings, SettingsSchema } from './settings.schema';
import { SettingsGateway } from './settings.gateway';
import { SettingsService } from './settings.service';
import { SettingsController } from './settings.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Settings.name, schema: SettingsSchema }])
  ],
  providers: [SettingsService, SettingsGateway],
  controllers: [SettingsController],
  exports: [SettingsService],
})
export class SettingsModule {}
