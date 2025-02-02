import { Injectable } from "@nestjs/common";
import { CreateUserDTO, UserRole } from "./dtos/create-user.dto";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import * as bcrypt from "bcrypt";
import { Profile } from "src/profile/profile.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>
  ) {}

  public async getAllUsers() {
    return await this.userRepository.find();
  }
  public async getUserById(id: number) {
    return await this.userRepository.findBy({ id });
  }

    public async createUser(userDto: CreateUserDTO) {
      // validate if user already exists with given email
      const user = await this.userRepository.findOne({
        where: { email: userDto.email }
      });
      if (user) {
        return "User already exists with this email";
      }
      // let create user profilee with default value if not provided
      userDto.profile = userDto.profile ?? {};
     
      // hash password
      userDto.password = await bcrypt.hash(userDto.password, 10);
      // create user with given details
      let newUser = this.userRepository.create(userDto);
      newUser = await this.userRepository.save(newUser);
      return newUser;
    }
}
