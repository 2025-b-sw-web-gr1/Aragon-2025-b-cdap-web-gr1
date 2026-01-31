import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar validación global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Configurar CORS
  app.enableCors();

  // Configurar Swagger
  const config = new DocumentBuilder()
    .setTitle('Teams & Players API')
    .setDescription(
      'API RESTful para gestionar Equipos y Jugadores. Relación 1 a muchos con NestJS, TypeORM y SQLite.',
    )
    .setVersion('1.0.0')
    .addTag('teams', 'Operaciones sobre equipos')
    .addTag('players', 'Operaciones sobre jugadores')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log('🚀 Aplicación corriendo en http://localhost:3000');
  console.log('📚 Documentación Swagger disponible en http://localhost:3000/api');
}
bootstrap();
