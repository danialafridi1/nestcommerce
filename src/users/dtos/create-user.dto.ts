import { Transform } from "class-transformer";
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDTO {
    @IsNumber()
    id: number;
    @IsString()
    @IsNotEmpty({message: "Please enter your name"})
        @MinLength(3, { message: "Name is too short" })
    name: string;
    @IsEmail()
    email: string;
    @IsString()
        @IsOptional()
    gender: string;
    @IsBoolean()
    isMarried: boolean;

}