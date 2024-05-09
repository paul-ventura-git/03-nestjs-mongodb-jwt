/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
