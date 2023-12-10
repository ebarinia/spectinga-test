import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TractorsService } from './tractors.service';

@Controller('tractors')
export class TractorsController {
  constructor(private readonly tractorsService: TractorsService) {}

  @Get()
  findAll() {
    return this.tractorsService.findAll();
  }
}
