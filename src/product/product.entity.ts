import { User } from "src/users/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 100,
    })
    name: string;

    @Column({
        type: 'text',
    })
    description: string;

    @Column({
        type: 'decimal', 
        precision: 10, 
        scale: 2,  // Ensures we store prices with 2 decimal points
    })
    price: number;

    @Column({
        type: 'int',
    })
    stock: number;

    @Column({
        type: 'varchar',
        length: 255,  // To accommodate URLs
        nullable: true,  // Optional if an image is not provided
    })
    image: string;

    @Column({
        type: 'varchar',
        length: 50,  // Assuming a category is short and fits in 50 chars
    })
    category: string;
    
@ManyToOne(() => User, user => user.products)  
    vendor: User;  

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
