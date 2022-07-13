import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { IDatabaseAbstract } from "./core/abstracts/database.abstract";
import { IBookRepository } from "./core/abstracts/book-repository.abstract";
import { Book } from "./entities";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PgBookRepository } from "./repositories/pg-book.repository";

@Injectable()
export class PgDatabaseService
  implements IDatabaseAbstract, OnApplicationBootstrap
{
  public books: IBookRepository<Book>;

  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>
  ) {};

  public onApplicationBootstrap() {
    this.books = new PgBookRepository<Book>(this.bookRepository);
  };
};