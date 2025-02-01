import {IsEmail,IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString, MinLength } from "class-validator";
import { CreateProfileDto } from "src/profile/dtos/create-profile.dto";
export enum UserRole {
  ADMIN = 'admin',
  VENDOR = 'vendor',
  CUSTOMER = 'customer',
}
export class CreateUserDTO {
   
    @IsEmail()
    @IsNotEmpty({ message: "Please enter your email" })
    email: string;
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
    @IsEnum(UserRole)
  role: UserRole;
  @IsOptional()
  profile?: CreateProfileDto | null;
  

}