import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { SwitchService } from './switch.service';
import { SwitchEntity } from './switch.entity';

@Controller('switch')
export class SwitchController {
    constructor(private switchService : SwitchService) {}
    
    @Post()
    create(@Body() dto : SwitchEntity) : Promise<SwitchEntity> {
        return this.switchService.createSwitch(dto);
    }

    @Get(':id')
    getOneById(@Param('id') id : number): Promise<SwitchEntity> {
        return this.switchService.getOneById(id);
    }

    


}
