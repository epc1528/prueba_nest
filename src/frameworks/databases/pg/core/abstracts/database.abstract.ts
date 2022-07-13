import { Book } from "../../entities";
import { IBookRepository } from "./book-repository.abstract";

export abstract class IDatabaseAbstract {
    public abstract readonly books: IBookRepository<Book>;
};