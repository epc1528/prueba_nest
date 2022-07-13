import { IsNotEmpty, IsNumber, IsOptional, IsString, Max, MaxLength, Min, MinLength } from 'class-validator'

export class CreateBookDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(9)
    @MaxLength(10)
    id:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    name:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    lastname:string;

    @IsNotEmpty()
    @IsNumber()
    @Min(18)
    @Max(100)
    age:number;

    @IsNotEmpty()
    @IsString()
    @MinLength(9)
    @MaxLength(20)
    phoneNumber:string;

    @IsNotEmpty()
    @IsString()
    startDate:string;

    @IsNotEmpty()
    @IsString()
    endDate:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(15)
    houseId:string;

    @IsString()
    @MinLength(8)
    @MaxLength(8)
    @IsOptional()
    discountCode:string;
}
