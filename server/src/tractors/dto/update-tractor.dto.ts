import { PartialType } from '@nestjs/mapped-types';
import { CreateTractorDto } from './create-tractor.dto';

export class UpdateTractorDto extends PartialType(CreateTractorDto) {}
