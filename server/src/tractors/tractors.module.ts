import { Module } from '@nestjs/common';
import { TractorsService } from './tractors.service';
import { TractorsController } from './tractors.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TractorsController],
  providers: [TractorsService],
  imports: [PrismaModule],
})
export class TractorsModule {}
