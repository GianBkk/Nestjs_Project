import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './database/typeorm.config';
import { SwitchModule } from './switch/switch.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    SwitchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
