"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitDataUserService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const commits_json_1 = require("../../commits/commits.json");
let GitDataUserService = class GitDataUserService {
    getHello() {
        return '⚡📱Backend Desafío técnico Edwar Castillo...';
    }
    async getCommitsFromGitHub() {
        try {
            const response = await axios_1.default.get('https://api.github.com/repos/edcastillob/FULLTIMEFORCE-EDCASTILLO/commits', {
                headers: {
                    Authorization: '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',
                },
            });
            const selectedCommits = response.data.map((commit) => ({
                sha: commit.sha,
                url: commit.url,
                commit: {
                    message: commit.commit.message,
                    author: {
                        date: commit.commit.author.date,
                        name: commit.commit.author.name,
                    },
                },
            }));
            return selectedCommits;
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error) && error.response?.status === 401) {
                console.log('Falló la autenticación de GitHub. Cargando datos desde commitsJson.');
                return commits_json_1.default;
            }
            else {
                throw error;
            }
        }
    }
    async searchCommitsByMessage(query) {
        try {
            const commits = await this.getCommitsFromGitHub();
            const filteredCommits = commits.filter((commit) => commit.commit.message.toLowerCase().includes(query.toLowerCase()));
            return filteredCommits;
        }
        catch (error) {
            throw error;
        }
    }
    async searchCommitsByDate(date) {
        try {
            const commits = await this.getCommitsFromGitHub();
            const filteredCommits = commits.filter((commit) => commit.commit.author.date.startsWith(date));
            return filteredCommits;
        }
        catch (error) {
            throw error;
        }
    }
    async getCommitDetailsBySha(sha) {
        try {
            const resp = await axios_1.default.get(`https://api.github.com/repos/edcastillob/FULLTIMEFORCE-EDCASTILLO/commits/${sha}`);
            if (resp.status === 200) {
                const commitDetails = {
                    sha: resp.data.sha,
                    node_id: resp.data.node_id,
                    commit: {
                        message: resp.data.commit.message,
                        author: {
                            name: resp.data.commit.author.name,
                            date: resp.data.commit.author.date,
                        },
                    },
                    url: resp.data.url,
                    html_url: resp.data.html_url,
                    comments_url: resp.data.comments_url,
                    parents: resp.data.parents.map((parent) => ({
                        sha: parent.sha,
                        url: parent.url,
                        html_url: parent.html_url,
                    })),
                };
                return commitDetails;
            }
            else {
                return null;
            }
        }
        catch (error) {
            throw error;
        }
    }
};
exports.GitDataUserService = GitDataUserService;
exports.GitDataUserService = GitDataUserService = __decorate([
    (0, common_1.Injectable)()
], GitDataUserService);
//# sourceMappingURL=git-data-user.service.js.map