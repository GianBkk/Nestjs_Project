import { Controller, Get } from '@nestjs/common';
import { DetailsService } from './details.service';


@Controller()
export class DetailsController {
  constructor(private readonly detailsService: DetailsService) {}

  

  
}
