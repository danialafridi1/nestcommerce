import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { ProfileModule } from './profile/profile.module';


import databaseConfig from './config/database.config';
@Module({
  imports:
    [ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),

      UsersModule, TypeOrmModule.forRootAsync({
    useFactory: databaseConfig,
  }), ProductModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
