import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Book {
    @PrimaryColumn()
    id:string;

    @Column()
    name:string;

    @Column()
    lastname:string;

    @Column()
    age:number;

    @Column()
    phone_number:string;

    @Column()
    start_date:string;

    @Column()
    end_date:string;

    @Column()
    house_id:string;

    @Column({nullable:true})
    discount_code?:string;
}
