import { Injectable } from '@nestjs/common';
import { CreateTractorDto } from './dto/create-tractor.dto';
import { UpdateTractorDto } from './dto/update-tractor.dto';

@Injectable()
export class TractorsService {
  create(createTractorDto: CreateTractorDto) {
    return 'This action adds a new tractor';
  }

  findAll() {
    return `This action returns all tractors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tractor`;
  }

  update(id: number, updateTractorDto: UpdateTractorDto) {
    return `This action updates a #${id} tractor`;
  }

  remove(id: number) {
    return `This action removes a #${id} tractor`;
  }
}
