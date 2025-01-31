import { Injectable } from '@nestjs/common';
import { CreateUserDTO, UserRole } from './dtos/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository:Repository<User>
    ) { }
    
    public async getAllUsers() {
        return await this.userRepository.find();
    }
    
    public async createUser(userDto: CreateUserDTO) {
        // validate if user already exists with given email
        const user = await this.userRepository.findOne({
            where: { email: userDto.email }
        })
        if (user) {
            return "User already exists with this email";
        }
        // create user with given details
        let newUser = this.userRepository.create(userDto);
      newUser=  await this.userRepository.save(newUser);
        return newUser;

    }
}
