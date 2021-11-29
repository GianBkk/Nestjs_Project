import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetailsController } from './details.controller';
import { DetailsEntity } from './details.entity';
import { DetailsProvider } from './details.provider';
import { DetailsService } from './details.service';





@Module({
    imports: [
      TypeOrmModule.forFeature([DetailsEntity])
    ],
    providers: [DetailsService, ...DetailsProvider],
    controllers: [DetailsController]
  })
  export class DetailsModule {}