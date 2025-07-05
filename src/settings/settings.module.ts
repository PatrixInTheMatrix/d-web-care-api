import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SettingsService } from './settings.service';
import { SettingsController } from './settings.controller';
import { SettingsGateway } from './settings.gateway';
import { SettingsModel } from './settings.schema';

@Module({
  imports: [MongooseModule.forFeature([SettingsModel])],
  providers: [SettingsService, SettingsGateway],
  controllers: [SettingsController],
  exports: [SettingsService],
})
export class SettingsModule {}
