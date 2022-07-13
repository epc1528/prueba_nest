import { Injectable } from '@nestjs/common';
import { ExceptionsService } from 'src/config/exception/exceptions.service';
import { IDatabaseAbstract } from 'src/frameworks/databases/pg/core/abstracts/database.abstract';
import { CreateBookDto } from './dto/create-book.dto';
import { ICreateBook } from './interfaces/create-book.interface';

@Injectable()
export class BookService {

  constructor(
    private databaseService: IDatabaseAbstract,
    private exceptions: ExceptionsService,
  ){}

  async create({phoneNumber, startDate, endDate, houseId, discountCode, ...data}: CreateBookDto) {
    const book:ICreateBook = {
      phone_number: phoneNumber,
      start_date:startDate,
      end_date:endDate,
      house_id:houseId,
      discount_code:discountCode,
      ...data
    }
    return await this.databaseService.books.create(book)
  }
}
