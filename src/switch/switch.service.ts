import { Injectable, Inject } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { SwitchEntity } from './switch.entity';



@Injectable()
export class SwitchService {
    constructor(
        @Inject('SWITCH_REPOSITORY')
        private readonly switchRepository: Repository<SwitchEntity>
    ) {}

    createSwitch(dto : SwitchEntity): Promise<SwitchEntity> {
        const newSwitch = this.switchRepository.create(dto)
        return this.switchRepository.save(newSwitch);
    }

    async getOneById(id : number) : Promise<SwitchEntity> {
        try {
            return this.switchRepository.findOne(id);
        } catch (error) {
            // handle error
            throw error;
        }
    }

    getAll() : Promise<SwitchEntity[]> {
        return this.switchRepository.find();
    }

    async updateSwitch(dto : SwitchEntity) : Promise<SwitchEntity> {
        try {
            return await this.switchRepository.save(dto);
        } catch (error) {
            throw error;
        } 
    }

    async deleteSwitch(id : number) : Promise<SwitchEntity> {
        const switchtodelete = await this.getOneById(id)
        try {
            return this.switchRepository.remove(switchtodelete);
        } catch (error) {
            throw error
        }
    }
    
}
