import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('API RESTful - Teams and Players Management');
  });

  describe('Teams', () => {
    it('/teams (POST) - crear equipo', () => {
      return request(app.getHttpServer())
        .post('/teams')
        .send({ name: 'Real Madrid', country: 'España' })
        .expect(201);
    });

    it('/teams (GET) - obtener todos los equipos', () => {
      return request(app.getHttpServer())
        .get('/teams')
        .expect(200)
        .expect((res) => {
          expect(Array.isArray(res.body)).toBe(true);
        });
    });

    it('/teams/:id (GET) - obtener equipo por ID', () => {
      return request(app.getHttpServer())
        .get('/teams/1')
        .expect(200);
    });

    it('/teams/:id (PUT) - actualizar equipo', () => {
      return request(app.getHttpServer())
        .put('/teams/1')
        .send({ name: 'Real Madrid CF' })
        .expect(200);
    });

    it('/teams/:id (DELETE) - eliminar equipo', () => {
      return request(app.getHttpServer())
        .delete('/teams/999')
        .expect(404);
    });
  });

  describe('Players', () => {
    it('/players (POST) - crear jugador', () => {
      return request(app.getHttpServer())
        .post('/players')
        .send({
          name: 'Cristiano Ronaldo',
          position: 'Delantero',
          teamId: 1,
        })
        .expect(201);
    });

    it('/players (GET) - obtener todos los jugadores', () => {
      return request(app.getHttpServer())
        .get('/players')
        .expect(200)
        .expect((res) => {
          expect(Array.isArray(res.body)).toBe(true);
        });
    });

    it('/players/:id (GET) - obtener jugador por ID', () => {
      return request(app.getHttpServer())
        .get('/players/1')
        .expect(200);
    });

    it('/players/:id (PUT) - actualizar jugador', () => {
      return request(app.getHttpServer())
        .put('/players/1')
        .send({ position: 'Delantero Centro' })
        .expect(200);
    });

    it('/teams/:id/players (GET) - obtener jugadores de un equipo', () => {
      return request(app.getHttpServer())
        .get('/teams/1/players')
        .expect(200);
    });
  });
});
