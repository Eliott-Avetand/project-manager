import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { readFileSync } from 'fs';
import express from 'express';

async function bootstrap() {
    const httpsOptions = {
        key: readFileSync(process.env.SSL_KEY),
        cert: readFileSync(process.env.SSL_CERTIFICATE),
    };
    const app = await NestFactory.create<NestExpressApplication>(AppModule, { httpsOptions });

    app.enableCors({
        origin: ['http://localhost:3000', 'https://loustik-manager.fr'],
        credentials: true,
        methods: "GET, POST, OPTIONS, PUT, DELETE",
        optionsSuccessStatus: 200,
        allowedHeaders: "*"
    });
    app.use(cookieParser());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    await app.listen(8080);
}

bootstrap();
