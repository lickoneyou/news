import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class AuthDto {
  @ApiProperty({
    example: 'user@gmail.ru',
    description: 'Email',
  })
  @IsEmail(
    {},
    {
      message: 'Wrong email',
    },
  )
  readonly email: string = '';

  @ApiProperty({
    example: '123456',
    description: 'Password',
  })
  @IsString({
    message: 'Must be string',
  })
  @MinLength(6, {
    message: 'Min length must be more or equl 6',
  })
  @MaxLength(12, {
    message: 'Max length must be less 12',
  })
  readonly password: string = '';
}
