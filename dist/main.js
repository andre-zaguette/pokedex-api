"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const jwtSecret = configService.get('JWT_SECRET');
    if (!jwtSecret || jwtSecret === 'change-me') {
        throw new Error('JWT_SECRET must be set to a secure value before starting.');
    }
    const frontendUrl = configService.get('FRONTEND_URL') ?? 'http://localhost:3000';
    app.enableCors({
        origin: frontendUrl,
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    await app.listen(configService.get('PORT') ?? 3001);
}
void bootstrap();
//# sourceMappingURL=main.js.map