import { Test, TestingModule } from '@nestjs/testing';
import { TractorsService } from './tractors.service';

describe('TractorsService', () => {
  let service: TractorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TractorsService],
    }).compile();

    service = module.get<TractorsService>(TractorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
