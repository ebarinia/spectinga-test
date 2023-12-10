import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TractorsService } from './tractors.service';
import { CreateTractorDto } from './dto/create-tractor.dto';
import { UpdateTractorDto } from './dto/update-tractor.dto';

@Controller('tractors')
export class TractorsController {
  constructor(private readonly tractorsService: TractorsService) {}

  @Post()
  create(@Body() createTractorDto: CreateTractorDto) {
    return this.tractorsService.create(createTractorDto);
  }

  @Get()
  findAll() {
    return this.tractorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tractorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTractorDto: UpdateTractorDto) {
    return this.tractorsService.update(+id, updateTractorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tractorsService.remove(+id);
  }
}
