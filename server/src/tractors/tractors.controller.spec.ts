import { Test, TestingModule } from '@nestjs/testing';
import { TractorsController } from './tractors.controller';
import { TractorsService } from './tractors.service';

describe('TractorsController', () => {
  let controller: TractorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TractorsController],
      providers: [TractorsService],
    }).compile();

    controller = module.get<TractorsController>(TractorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
