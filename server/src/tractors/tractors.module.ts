import { Module } from '@nestjs/common';
import { TractorsService } from './tractors.service';
import { TractorsController } from './tractors.controller';

@Module({
  controllers: [TractorsController],
  providers: [TractorsService],
})
export class TractorsModule {}
