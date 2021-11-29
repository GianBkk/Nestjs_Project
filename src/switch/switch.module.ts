import { Module } from '@nestjs/common';
import { SwitchService } from './switch.service';
import { SwitchController } from './switch.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SwitchEntity } from './switch.entity';
import { DatabaseModule } from 'src/database/database.module';
import { SwitchProvider } from './switch.provider';


@Module({
  imports: [
    DatabaseModule
  ],
  providers: [SwitchService, ...SwitchProvider],
  controllers: [SwitchController]
})
export class SwitchModule {}
