import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());

  app.enableCors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        'http://localhost:4200',
        'https://d-web-care.onrender.com',
        'https://diwidi.net',
      ];

      const isLocalhost = !origin || origin.startsWith('http://localhost');
      const isRender = origin?.startsWith('https://d-web-care.onrender.com');
      const isRoot = origin === 'https://diwidi.net';
      const isDiwidiSubdomain = origin?.endsWith('.diwidi.net');

      if (isLocalhost || isRender || isRoot || isDiwidiSubdomain) {
        callback(null, true);
      } else {
        callback(new Error(`❌ Origin not allowed by CORS: ${origin}`));
      }
    },
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
  console.log(`🚀 API läuft auf Port ${process.env.PORT ?? 3000} im ${process.env.NODE_ENV} Mode`);
}
bootstrap();
