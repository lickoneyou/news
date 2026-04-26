import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('auth')
export class Auth {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  email: string = '';

  @Exclude()
  @Column()
  password: string = '';

  @Exclude()
  @CreateDateColumn()
  createdAt?: Date;

  @Exclude()
  @UpdateDateColumn()
  updatedAt?: Date;
}
