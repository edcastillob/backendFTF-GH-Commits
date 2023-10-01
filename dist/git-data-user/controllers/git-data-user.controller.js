"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitDataUserController = void 0;
const common_1 = require("@nestjs/common");
const git_data_user_service_1 = require("../services/git-data-user.service");
const swagger_1 = require("@nestjs/swagger");
let GitDataUserController = class GitDataUserController {
    constructor(GitDataUserService) {
        this.GitDataUserService = GitDataUserService;
    }
    getHello() {
        return this.GitDataUserService.getHello();
    }
    async getCommits() {
        try {
            const commits = await this.GitDataUserService.getCommitsFromGitHub();
            return commits;
        }
        catch (error) {
            throw error;
        }
    }
    async searchCommits(query) {
        try {
            const commits = await this.GitDataUserService.searchCommitsByMessage(query);
            return commits;
        }
        catch (error) {
            throw error;
        }
    }
    async searchCommitsByDate(date) {
        try {
            const commits = await this.GitDataUserService.searchCommitsByDate(date);
            return commits;
        }
        catch (error) {
            throw error;
        }
    }
    async getCommitDetails(sha) {
        try {
            const commitDetails = await this.GitDataUserService.getCommitDetailsBySha(sha);
            return commitDetails;
        }
        catch (error) {
            throw error;
        }
    }
};
exports.GitDataUserController = GitDataUserController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], GitDataUserController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('commits'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GitDataUserController.prototype, "getCommits", null);
__decorate([
    (0, common_1.Get)('commits/search'),
    __param(0, (0, common_1.Query)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GitDataUserController.prototype, "searchCommits", null);
__decorate([
    (0, common_1.Get)('commits/searchByDate'),
    __param(0, (0, common_1.Query)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GitDataUserController.prototype, "searchCommitsByDate", null);
__decorate([
    (0, common_1.Get)('commits/:sha'),
    __param(0, (0, common_1.Param)('sha')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GitDataUserController.prototype, "getCommitDetails", null);
exports.GitDataUserController = GitDataUserController = __decorate([
    (0, swagger_1.ApiTags)('Commits edcastillob'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [git_data_user_service_1.GitDataUserService])
], GitDataUserController);
//# sourceMappingURL=git-data-user.controller.js.map