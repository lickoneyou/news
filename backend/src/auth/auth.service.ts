import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async register(authDto: AuthDto) {
    const { email, password } = authDto;

    const isUserExist = await this.usersService.getUserByEmail(email);

    if (isUserExist) {
      throw new HttpException(
        'User with this email already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const salt: string = await bcrypt.genSalt(10);
    const hashedPassword: string = await bcrypt.hash(password, salt);

    const newUser: User = await this.usersService.create({
      email,
      password: hashedPassword,
    });

    return newUser;
  }
}
