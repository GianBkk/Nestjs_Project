import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SwitchEntity } from 'src/switch/switch.entity';
import { Repository } from 'typeorm';
import { DetailsEntity } from './details.entity';
import { Cron } from '@nestjs/schedule';
const snmp = require('snmp-native');


@Injectable()
export class DetailsService {
    constructor(
        @InjectRepository(DetailsEntity) private readonly detailsRepo: Repository<DetailsEntity>,
        @InjectRepository(SwitchEntity) private readonly switchRepo: Repository<SwitchEntity>
    ) {}

    async getOneById(id: number) : Promise<DetailsEntity> {
        try {
            return await this.detailsRepo.findOne(id); 
        } catch (error) {
            throw error;
        }
    }

    getAll() : Promise<SwitchEntity[]> {
        return this.switchRepo.find();
    }

    create(dto : DetailsEntity) : Promise<DetailsEntity> {
        const newDetail = this.detailsRepo.create(dto);
        return this.detailsRepo.save(newDetail);
    }

    @Cron('0 */30 9-17 * * *')
    async handleCron() {
        const data = await this.getAll();
        const timestamp = Date.now();


        data.forEach(data => {
            
            let session = new snmp.Session({ host: data.ip, port: 161, community: 'public' })

            let oids = [data.oid, data.oiddesc, data.oidtime];

            session.getAll({oids : oids}, function(error, varbinds) {
                let name = varbinds[0].value;
                let desc = varbinds[1].value;
                let time = varbinds[2].value;
                this.create([{name: name, desc: desc, time: time, timestamp: timestamp}])   
            })

            


        });



    }




    
    
}
