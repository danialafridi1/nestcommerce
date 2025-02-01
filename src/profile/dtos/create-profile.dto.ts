import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateProfileDto {
  @IsString()
  @IsNotEmpty({ message: "Please enter your name" })
  @MinLength(3, { message: "Name is too short" })
  @IsOptional()
  name?: string;
  @IsString()
  @IsOptional()
    phone?: string;
    @IsString()
    @IsOptional()
    address?: string;
    @IsString()
    @IsOptional()
    state?: string;
    @IsString()
    @IsOptional()
    city?: string;
    @IsString()
    @IsOptional()
    zip?: string;
    @IsString()
    @IsOptional()
    country?: string;
}
