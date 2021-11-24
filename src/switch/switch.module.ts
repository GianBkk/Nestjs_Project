import { Module } from '@nestjs/common';
import { SwitchService } from './services/switch.service';
import { SwitchController } from './controllers/switch.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SwitchModelEntity } from './models/switch.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SwitchModelEntity])
  ],
  providers: [SwitchService],
  controllers: [SwitchController]
})
export class SwitchModule {}
