import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [UsersModule, TypeOrmModule.forRootAsync({
    useFactory: () => ({
      type: 'postgres',
    entities:[],
    host: 'localhost',
    port: 8000,
    username: 'postgres',
    password: 'afridi4you',
    database: 'nest_commerce',
      synchronize: true,
    })
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
