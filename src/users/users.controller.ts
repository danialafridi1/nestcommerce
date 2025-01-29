import { Body, Controller, DefaultValuePipe, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query } from '@nestjs/common';
import { GetUserParamDTO } from './dtos/get-users-param.dto';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}
    @Get(":isMarried?")
    getAllUsers(@Query('limit',new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page',new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Param() param: GetUserParamDTO) {
        const users = this.userService.getAllUsers();
    console.log("Type of param.isMarried:", typeof param.isMarried);
    console.log("Value of param.isMarried:", param.isMarried);

    return param.isMarried !== undefined
        ? users.filter(user => user.isMarried === param.isMarried)
        : users;
    }
@Get("user/:id")
getUserById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.getUserById(id);
}
    @Post()
    createUser(@Body() createUserDTO: CreateUserDTO) {
        console.log(createUserDTO);
        this.userService.createUser(createUserDTO);
        return 'User created successfully!';
    }
    
}
