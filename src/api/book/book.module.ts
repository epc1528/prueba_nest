import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { PgDatabaseModule } from 'src/frameworks/databases/pg/pg-data.module';
import { ExceptionsModule } from 'src/config/exception/exception.module';
import { GuardsModule } from 'src/lib/guard/guard.module';

@Module({
  controllers: [BookController],
  providers: [BookService],
  imports:[PgDatabaseModule, ExceptionsModule, GuardsModule]
})
export class BookModule {}
