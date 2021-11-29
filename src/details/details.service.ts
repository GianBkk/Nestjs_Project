import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetailsEntity } from './details.entity';



@Injectable()
export class DetailsService {
    constructor(
        @InjectRepository(DetailsEntity) private readonly detailsRepository: Repository<DetailsEntity>
    ) {}

    
    
}
