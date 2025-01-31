import { Injectable } from '@nestjs/common';
import { CreateUserDTO, UserRole } from './dtos/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository:Repository<User>
    ) { }
    
    public async getAllUsers() {
        return await this.userRepository.find();
    }
    public async getUserById(id: number) {
        return await this.userRepository.findBy({  id });
    }
    
    public async createUser(userDto: CreateUserDTO) {

        // validate if user already exists with given email
        const user = await this.userRepository.findOne({
            where: { email: userDto.email }
        })
        if (user) {
            return "User already exists with this email";
        }
        // hash password
         userDto.password = await bcrypt.hash(userDto.password, 10);
        // create user with given details
        let newUser = this.userRepository.create(userDto);
      newUser=  await this.userRepository.save(newUser);
        return newUser;

    }
}
