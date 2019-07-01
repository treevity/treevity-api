import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppModule', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = module.createNestApplication();
        await app.init();
    }, 20000);

    it(`should return response with error for unauthorized request`, async () => {
        const response = await request(app.getHttpServer())
            .post('/graphql')
            .send({
                operationName: null,
                variables: {},
                query: '{\n  allUsers {\n    id\n  }\n}\n',
            });

        expect(response.body).toHaveProperty('errors');
        expect(response.body.errors.length > 0).toBeTruthy();
    });

    afterEach(async () => {
        await app.close();
    }, 20000);
});
