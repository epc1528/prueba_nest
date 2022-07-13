import { IBookRepository } from "../core/abstracts/book-repository.abstract";
import { PgGenericRepository } from "./pg-generic.repository";

export class PgBookRepository<T> 
    extends PgGenericRepository<T>
    implements IBookRepository<T>
{
    
};