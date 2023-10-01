import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { GitDataUserInterface } from '../interfaces/git-data-user.interface';
import { CommitDetail } from '../interfaces/commitDetail.interface';
import commitsJson from '../../commits/commits.json';

@Injectable()
export class GitDataUserService {
  getHello(): string {
    return '⚡📱Backend Desafío técnico Edwar Castillo...';
  }

  async getCommitsFromGitHub(): Promise<any[]> {
    try {
      const response = await axios.get(
        'https://api.github.com/repos/edcastillob/FULLTIMEFORCE-EDCASTILLO/commits',{
          headers: {
            Authorization: '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', 
          },
        });

      const selectedCommits: GitDataUserInterface[] = response.data.map(
        (commit: GitDataUserInterface) => ({
          sha: commit.sha,
          url: commit.url,
          commit: {
            message: commit.commit.message,
            author: {
              date: commit.commit.author.date,
              name: commit.commit.author.name,
            },
          },
        })
      );     
      return selectedCommits;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401 ) {
        console.log('Falló la autenticación de GitHub. Cargando datos desde commitsJson.');
        return commitsJson;
      } else {
        throw error;
      }
    }
  }

  async searchCommitsByMessage(query: string): Promise<GitDataUserInterface[]> {
    try {
      const commits = await this.getCommitsFromGitHub();
      const filteredCommits = commits.filter((commit) =>
        commit.commit.message.toLowerCase().includes(query.toLowerCase())
      );
      return filteredCommits;
    } catch (error) {
      throw error;
    }
  }
  async searchCommitsByDate(date: string): Promise<GitDataUserInterface[]> {
    try {
      const commits = await this.getCommitsFromGitHub();
      const filteredCommits = commits.filter((commit) =>
        commit.commit.author.date.startsWith(date)
      );
      return filteredCommits;
    } catch (error) {
      throw error;
    }
  }
  async getCommitDetailsBySha(sha: string): Promise<CommitDetail | null> {
    try {
      const resp = await axios.get(
        `https://api.github.com/repos/edcastillob/FULLTIMEFORCE-EDCASTILLO/commits/${sha}`
      );

      if (resp.status === 200) {
        const commitDetails: CommitDetail = {
          sha: resp.data.sha,
          node_id: resp.data.node_id,
          commit: {
            message: resp.data.commit.message,
            author:{
              name: resp.data.commit.author.name,
              date: resp.data.commit.author.date,
            },
          },
          url: resp.data.url,
          html_url: resp.data.html_url,
          comments_url: resp.data.comments_url,
          parents: resp.data.parents.map((parent: any) => ({
            sha: parent.sha,
            url: parent.url,
            html_url: parent.html_url,
          })),
        };
        return commitDetails;
      } else {
        return null; 
      }
    } catch (error) {
      throw error;
    }
  }
}
