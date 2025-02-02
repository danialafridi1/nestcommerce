import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserRole } from "./dtos/create-user.dto";
import { Product } from "src/product/product.entity";
import { Profile } from "src/profile/profile.entity";

@Entity()
export class User{ 
    @PrimaryGeneratedColumn()
    id: number;
   
    @Column({
        unique: true,
        nullable: false,
        length: 100
    })
    email: string;
    @Column()
    password: string;
  
    @Column({ default: UserRole.CUSTOMER })
    role: UserRole;
    @OneToMany(() => Product, product => product.vendor,)  // The inverse side of the relationship
    products?: Product[];

    @OneToOne(() => Profile, profile => profile, {
        cascade:['insert']
    })
        @JoinColumn()
    profile? :Profile
    @CreateDateColumn() // Auto-set on creation
  createdAt: Date;

  @UpdateDateColumn() // Auto-update on modification
  updatedAt: Date;
}