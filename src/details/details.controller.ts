import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DetailsEntity } from './details.entity';
import { DetailsService } from './details.service';


@Controller()
export class DetailsController {
  constructor(private readonly detailsService: DetailsService) {}

  @Get(':id')
  getOne(@Param('id') id : number) : Promise<DetailsEntity> {
    return this.detailsService.getOneById(id)
  }

  @Get()
  getAll() : Promise<DetailsEntity[]> {
    return this.detailsService.getAll()
  }

  @Post()
  create(@Body() dto : DetailsEntity) : Promise<DetailsEntity> {
    return this.detailsService.create(dto)
  }
}
