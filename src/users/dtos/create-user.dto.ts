import {IsEmail,IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString, MinLength } from "class-validator";
export enum UserRole {
  ADMIN = 'admin',
  VENDOR = 'vendor',
  CUSTOMER = 'customer',
}
export class CreateUserDTO {
    @IsString()
    @IsNotEmpty({message: "Please enter your name"})
        @MinLength(3, { message: "Name is too short" })
    name: string;
    @IsEmail()
    @IsNotEmpty({ message: "Please enter your email" })
    email: string;
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
    @IsString()
     @IsOptional()
    phone: string;
    @IsEnum(UserRole)
    role:UserRole;
  

}