import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserRole } from "./dtos/create-user.dto";

@Entity()
export class User{ 
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        type: "varchar",
        length: 100,
        nullable: false
    })
    name: string;
    @Column({
        unique: true,
        nullable: false,
        length: 100
    })
    email: string;
    @Column()
    password: string;
    @Column(
        {
            type: "varchar",
            nullable: true,
            length: 20
        }
    )
    phone: string;
    @Column({ default: UserRole.CUSTOMER })
    role: UserRole;
    @CreateDateColumn() // Auto-set on creation
  createdAt: Date;

  @UpdateDateColumn() // Auto-update on modification
  updatedAt: Date;
}