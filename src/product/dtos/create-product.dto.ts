import { IsNotEmpty, MinLength, IsPositive, IsString, IsUrl, IsInt } from 'class-validator';
import { User } from 'src/users/user.entity';

export class CreateProductDto {
    @IsNotEmpty({
        message: "Please enter product name"
    })
    @MinLength(5, { message: "Product name should be at least 5 characters long" })
    name: string;

    @IsNotEmpty({
        message: "Please enter product description"
    })
    description: string;

    @IsNotEmpty({
        message: "Please enter product price"
    })
    @IsPositive({
        message: "Product price must be a positive number"
    })
    price: number;

    @IsNotEmpty({
        message: "Please enter product stock"
    })
    @IsInt({
        message: "Stock quantity must be an integer"
    })
    @IsPositive({
        message: "Stock quantity must be a positive number"
    })
    stock: number;

    @IsNotEmpty({
        message: "Please enter product image URL"
    })
    @IsUrl({}, {
        message: "Please provide a valid image URL"
    })
    image: string;

    @IsNotEmpty({
        message: "Please enter product category"
    })
    @IsString({
        message: "Category must be a string"
    })
    category: string;

    @IsNotEmpty({
        message: "Please enter vendor ID"
    })
    @IsPositive({
        message: "Vendor ID must be a positive number"
    })
    vendor: User;
}
