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
exports.UserPokemonController = void 0;
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("../common/current-user.decorator");
const jwt_auth_guard_1 = require("../common/jwt-auth.guard");
const create_user_pokemon_dto_1 = require("./dto/create-user-pokemon.dto");
const update_user_pokemon_dto_1 = require("./dto/update-user-pokemon.dto");
const user_pokemon_service_1 = require("./user-pokemon.service");
let UserPokemonController = class UserPokemonController {
    userPokemonService;
    constructor(userPokemonService) {
        this.userPokemonService = userPokemonService;
    }
    list(user) {
        return this.userPokemonService.list(user.sub);
    }
    create(user, body) {
        return this.userPokemonService.create(user.sub, body);
    }
    update(user, id, body) {
        return this.userPokemonService.update(user.sub, id, body);
    }
    remove(user, id) {
        return this.userPokemonService.remove(user.sub, id);
    }
};
exports.UserPokemonController = UserPokemonController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserPokemonController.prototype, "list", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_user_pokemon_dto_1.CreateUserPokemonDto]),
    __metadata("design:returntype", void 0)
], UserPokemonController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_user_pokemon_dto_1.UpdateUserPokemonDto]),
    __metadata("design:returntype", void 0)
], UserPokemonController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], UserPokemonController.prototype, "remove", null);
exports.UserPokemonController = UserPokemonController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('collection'),
    __metadata("design:paramtypes", [user_pokemon_service_1.UserPokemonService])
], UserPokemonController);
//# sourceMappingURL=user-pokemon.controller.js.map