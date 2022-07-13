import { Module } from '@nestjs/common';
import { BookModule } from './api/book/book.module';
import { PgDatabaseModule } from './frameworks/databases/pg/pg-data.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
    }),BookModule,
    PgDatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
