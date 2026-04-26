import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { AuthDto } from '../auth/dto/auth.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(dto: AuthDto) {
    const user = this.userRepository.create(dto);
    return await this.userRepository.save(user);
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });

    return user;
  }
}
