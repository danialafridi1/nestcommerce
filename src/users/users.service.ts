import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
     users: {id:number, name: string, phone: string, email: string, password: string}[] = [
         { id: 1, name: "John", phone: "123456789", email: "john@gmail.com", password: "123456" },
         { id: 2, name: "Doe ", phone: "123456789", email: " Doe@gmail.com", password: "123456" },
         { id: 3, name: "Laura", phone: "123456789", email: " Lara@gmail.com", password: "123456" },
        
    ]
    getAllUsers(): any[] {
        return this.users;
    }
    getUserById(id: number) {
        return this.users.find(user=>user.id === id);
    }
    createUser(user: {id:number, name: string, phone: string, email: string, password: string}) {
        this.users.push(user);
    }
}
