import { Controller, Get, Param, Query } from '@nestjs/common';
import { GitDataUserService } from '../services/git-data-user.service';
import { GitDataUserInterface } from '../interfaces/git-data-user.interface';
import { CommitDetail } from '../interfaces/commitDetail.interface';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Commits edcastillob')
@Controller()
export class GitDataUserController {
  constructor(private readonly GitDataUserService: GitDataUserService) {}

  @Get()
  getHello(): string {
    return this.GitDataUserService.getHello();
  }

  @Get('commits')
  async getCommits(): Promise<GitDataUserInterface[]> {
    try {
      const commits = await this.GitDataUserService.getCommitsFromGitHub();
      return commits;
    } catch (error) {
      throw error;
    }
  }

  @Get('commits/search')
  async searchCommits(@Query('query') query: string): Promise<GitDataUserInterface[]> {
    try {
      const commits = await this.GitDataUserService.searchCommitsByMessage(query);
      return commits;
    } catch (error) {
      throw error;
    }
  }

  @Get('commits/searchByDate')
  async searchCommitsByDate(@Query('date') date: string): Promise<GitDataUserInterface[]> {
    try {
      const commits = await this.GitDataUserService.searchCommitsByDate(date);
      return commits;
    } catch (error) {
      throw error;
    }
  }
  @Get('commits/:sha')
  async getCommitDetails(@Param('sha') sha: string): Promise<CommitDetail | null> {
    try {
      const commitDetails = await this.GitDataUserService.getCommitDetailsBySha(sha);
      return commitDetails;
    } catch (error) {
      throw error;
    }
  }
}
