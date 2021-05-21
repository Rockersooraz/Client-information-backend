import {
  IsDate,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Length,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ClientDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'id' })
  readonly id: string;

  @IsString()
  @Length(3, 40, { message: 'Name must be between 3-40 characters' })
  @ApiProperty({ type: String, description: 'name' })
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'gender' })
  readonly gender: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'phone' })
  readonly phone: number;

  @IsEmail()
  @IsString()
  @MinLength(5)
  @ApiProperty({ type: String, description: 'email' })
  readonly email: string;

  @IsString()
  @Length(5, 40, { message: 'Address must be between 3-40 characters' })
  @ApiProperty({ type: String, description: 'address' })
  readonly address: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'nationality' })
  readonly nationality: string;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'dateOfBirth' })
  readonly dateOfBirth: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'educationBackground' })
  readonly educationBackground: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'preferredModeOfContact' })
  readonly preferredModeOfContact: string;
}
