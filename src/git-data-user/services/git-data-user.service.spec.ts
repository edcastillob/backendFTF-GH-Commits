import { Test, TestingModule } from '@nestjs/testing';
import { GitDataUserService } from './git-data-user.service';

describe('GitDataUserService', () => {
  let service: GitDataUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GitDataUserService],
    }).compile();

    service = module.get<GitDataUserService>(GitDataUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
