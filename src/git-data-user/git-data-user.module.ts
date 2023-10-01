import { Module } from '@nestjs/common';
import { GitDataUserService } from './services/git-data-user.service';
import { GitDataUserController } from './controllers/git-data-user.controller';

@Module({
  providers: [GitDataUserService],
  controllers: [GitDataUserController]
})
export class GitDataUserModule {}
