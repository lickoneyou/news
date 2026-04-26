import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  email: string = '';

  @Exclude()
  @Column()
  password: string = '';

  @Column({ nullable: true })
  name: string = '';

  @Column({ nullable: true })
  avatar: string = '';

  @Exclude()
  @CreateDateColumn()
  createdAt?: Date;

  @Exclude()
  @UpdateDateColumn()
  updatedAt?: Date;
}
