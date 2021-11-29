import { Module } from '@nestjs/common';
import { SwitchService } from './switch.service';
import { SwitchController } from './switch.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SwitchEntity } from './switch.entity';



@Module({
  imports: [
    TypeOrmModule.forFeature([SwitchEntity])
  ],
  providers: [SwitchService],
  controllers: [SwitchController]
})
export class SwitchModule {}
