import { Body, Controller, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { SwitchModel } from '../models/switch.interface';
import { SwitchService } from '../services/switch.service';

@Controller('switch')
export class SwitchController {
    constructor(private switchService : SwitchService) {}
    @Post()
    create(@Body() create: SwitchModel): Observable<SwitchModel> {
        return this.switchService.createSwitch(create)
    }
}
