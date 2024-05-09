/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { EnvModule } from './env/env.module';

@Module({
  imports: [AuthModule, PostModule, UsersModule, EnvModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
