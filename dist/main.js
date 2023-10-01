"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const morgan = require("morgan");
const constant_1 = require("./constant");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.use(morgan('dev'));
    app.enableCors(constant_1.CORS);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('FULLTIME FORCE CHALLENGE')
        .setDescription('Ing. Edwar Castillo Full Stack Developer__ API GitHub Commits')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    const port = configService.get('PORT');
    await app.listen(port);
    console.log(`⚡📱 Application running on port ${port} ...`);
}
bootstrap();
//# sourceMappingURL=main.js.map