import { Injectable } from '@nestjs/common';
import { UserRole } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
     users: {id:number, name: string, phone: string, email: string, password: string,role:UserRole}[] = [
         { id: 1, name: "John", phone: "123456789", email: "john@gmail.com", password: "123456", role: UserRole.CUSTOMER },
         { id: 2, name: "Doe ", phone: "123456789", email: " Doe@gmail.com", password: "123456",role: UserRole.ADMIN },
         { id: 3, name: "Laura", phone: "123456789", email: " Lara@gmail.com", password: "123456",role: UserRole.VENDOR },
        
    ]
    getAllUsers(): any[] {
        return this.users;
    }
    getUserById(id: number) {
        return this.users.find(user=>user.id === id);
    }
    createUser(user: {id:number, name: string, phone: string, email: string, password: string,role: UserRole}) {
        this.users.push(user);
    }
}
