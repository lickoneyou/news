import {
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
  IsOptional,
} from 'class-validator';

export class UserDto {
  @IsEmail({}, { message: 'Некорректный email' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'Пароль должен содержать минимум 6 символов' })
  @MaxLength(50, { message: 'Пароль не должен превышать 50 символов' })
  password: string;

  @IsOptional()
  @IsString()
  @MaxLength(100, { message: 'Имя не должно превышать 100 символов' })
  name?: string;

  @IsOptional()
  @IsString()
  avatar?: string;
}
