import { GitDataUserService } from '../services/git-data-user.service';
import { GitDataUserInterface } from '../interfaces/git-data-user.interface';
import { CommitDetail } from '../interfaces/commitDetail.interface';
export declare class GitDataUserController {
    private readonly GitDataUserService;
    constructor(GitDataUserService: GitDataUserService);
    getHello(): string;
    getCommits(): Promise<GitDataUserInterface[]>;
    searchCommits(query: string): Promise<GitDataUserInterface[]>;
    searchCommitsByDate(date: string): Promise<GitDataUserInterface[]>;
    getCommitDetails(sha: string): Promise<CommitDetail | null>;
}
