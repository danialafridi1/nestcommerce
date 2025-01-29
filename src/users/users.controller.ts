import { Body, Controller, DefaultValuePipe, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query } from '@nestjs/common';
import { GetUserParamDTO } from './dtos/get-users-param.dto';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}
    @Get()
    getAllUsers(@Query('limit',new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page',new DefaultValuePipe(1), ParseIntPipe) page: number,
        ) {
        const users = this.userService.getAllUsers();
   return users;
    }
@Get(":id")
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
