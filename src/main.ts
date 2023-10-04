import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { CORS } from './constant';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.use(morgan('dev'));
  app.enableCors(CORS);

  const config = new DocumentBuilder()
    .setTitle('FULLTIME FORCE CHALLENGE')
    .setDescription('Ing. Edwar Castillo Full Stack Developer__ API GitHub Commits')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = configService.get<number>('PORT') || 3000; // Usar el puerto configurado o 3000 por defecto

  await app.listen(port);
  console.log(`⚡📱 Application running on port ${port} ...`);
}

bootstrap();

