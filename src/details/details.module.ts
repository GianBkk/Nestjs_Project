import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SwitchEntity } from 'src/switch/switch.entity';
import { DetailsController } from './details.controller';
import { DetailsEntity } from './details.entity';
import { DetailsService } from './details.service';
import { ScheduleModule } from '@nestjs/schedule';


@Module({
    imports: [
      TypeOrmModule.forFeature([DetailsEntity, SwitchEntity]),
      ScheduleModule.forRoot()
    ],
    providers: [DetailsService],
    controllers: [DetailsController]
  })
  export class DetailsModule {}