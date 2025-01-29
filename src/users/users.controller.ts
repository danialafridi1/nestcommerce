import { Body, Controller, DefaultValuePipe, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query } from '@nestjs/common';
import { GetUserParamDTO } from './dtos/get-users-param.dto';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}
    @Get(":role?")
    getAllUsers(@Query('limit',new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Param() param: GetUserParamDTO,
        ) {
        let users = this.userService.getAllUsers();
        if (param.role) {
            users = users.filter(user => user.role === param.role);
        }

        return users.slice((page - 1) * limit, page * limit);
        
    }
@Get(":id")
getUserById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.getUserById(id);
}
    @Post()
    createUser(@Body() createUserDTO: CreateUserDTO) {
        this.userService.createUser(createUserDTO);
        return 'User created successfully!';
    }
    
}
