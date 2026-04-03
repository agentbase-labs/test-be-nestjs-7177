import { NestFactory } from '@nestjs/core';
import { Module, Controller, Get } from '@nestjs/common';

@Controller()
class AppController {
  @Get() getHello() { return { message: 'NestJS Works!' }; }
  @Get('health') getHealth() { return { status: 'ok', framework: 'nestjs' }; }
}

@Module({ controllers: [AppController] })
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 10000, '0.0.0.0');
}
bootstrap();