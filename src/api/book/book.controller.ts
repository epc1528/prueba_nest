import { Controller, Post, Body, UseGuards} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { ValidDiscountGuard } from 'src/lib/guard/axios.guard';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { BookCreateOutput } from './output/book-create-output';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @UseGuards(ValidDiscountGuard)
  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    const books = await this.bookService.create(createBookDto);
    return plainToClass(BookCreateOutput, {message: "Book Accepted", code: 200})
  }
}
