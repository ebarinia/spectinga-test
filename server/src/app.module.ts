import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { TractorsModule } from './tractors/tractors.module';
import { LocalesModule } from './locales/locales.module';

@Module({
  imports: [PrismaModule, UsersModule, TractorsModule, LocalesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}