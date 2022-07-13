import { IsNotEmpty, IsNumber, IsOptional, IsString, Max, MaxLength, Min, MinLength } from 'class-validator'

export class CreateBookDto {
    @IsString()
    @MinLength(9)
    @MaxLength(10)
    @IsNotEmpty()
    id:string;

    @IsString()
    @MinLength(2)
    @MaxLength(50)
    @IsNotEmpty()
    name:string;

    @IsString()
    @MinLength(2)
    @MaxLength(50)
    @IsNotEmpty()
    lastname:string;

    @IsNumber()
    @Min(18)
    @Max(100)
    @IsNotEmpty()
    age:number;

    @IsString()
    @MinLength(9)
    @MaxLength(20)
    @IsNotEmpty()
    phoneNumber:string;

    @IsString()
    @IsNotEmpty()
    startDate:string;

    @IsString()
    @IsNotEmpty()
    endDate:string;

    @IsString()
    @MinLength(6)
    @MaxLength(15)
    @IsNotEmpty()
    houseId:string;

    @IsString()
    @MinLength(8)
    @MaxLength(8)
    @IsOptional()
    discountCode:string;
}
