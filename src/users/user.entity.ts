import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserRole } from "./dtos/create-user.dto";
import { Product } from "src/product/product.entity";

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
    @OneToMany(() => Product, product => product.vendor)  // The inverse side of the relationship
    products: Product[];
    @CreateDateColumn() // Auto-set on creation
  createdAt: Date;

  @UpdateDateColumn() // Auto-update on modification
  updatedAt: Date;
}