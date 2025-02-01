import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: "varchar",
    length: 100,
    nullable: true
  })
  name: string;
  @Column({
    type: "varchar",
    nullable: true,
    length: 20
  })
    phone: string;
    @Column({
        type: "varchar",
        nullable: true,
        length: 100
    })
    address: string;
    @Column({
        type: "varchar",
        nullable: true,
        length: 100
    })
    state: string;
    @Column({
        type: "varchar",
        nullable: true,
        length: 10
    })
    city: string;

    @Column({
        type: "varchar",
        nullable: true,
        length: 10
    })
    zip: string;

    @Column({
        type: "varchar",
        nullable: true,
        length: 100
    })
    country: string;
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
