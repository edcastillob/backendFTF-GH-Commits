import { GitDataUserInterface } from '../interfaces/git-data-user.interface';
import { CommitDetail } from '../interfaces/commitDetail.interface';
export declare class GitDataUserService {
    getHello(): string;
    getCommitsFromGitHub(): Promise<any[]>;
    searchCommitsByMessage(query: string): Promise<GitDataUserInterface[]>;
    searchCommitsByDate(date: string): Promise<GitDataUserInterface[]>;
    getCommitDetailsBySha(sha: string): Promise<CommitDetail | null>;
}
