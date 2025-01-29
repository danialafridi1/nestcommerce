import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
     users: {id:number, name: string, gender: string, email: string, isMarried: boolean}[] = [
         { id: 1, name: "John", gender: "male", email: "john@gmail.com", isMarried: true },
         { id: 2, name: "Doe ", gender: "female", email: " Doe@gmail.com", isMarried: false },
         { id: 3, name: "Laura", gender: "male", email: " Lara@gmail.com", isMarried: true },
        
    ]
    getAllUsers(): any[] {
        return this.users;
    }
    getUserById(id: number) {
        return this.users.find(user=>user.id === id);
    }
    createUser(user: {id:number, name: string, gender: string, email: string, isMarried: boolean}) {
        this.users.push(user);
    }
}
