import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { SwitchModelEntity } from '../models/switch.entity';

import { SwitchModel } from '../models/switch.interface';

@Injectable()
export class SwitchService {
    constructor(
        @InjectRepository(SwitchModelEntity)
        private readonly switchModelRepository: Repository<SwitchModelEntity>
    ) {}

    createSwitch(switchModel: SwitchModel): Observable<SwitchModel> {
        return from(this.switchModelRepository.save(switchModel));
    }
}
