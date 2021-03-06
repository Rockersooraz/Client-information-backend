import {
	IsDateString,
	IsEmail,
	IsNotEmpty,
	IsString,
	Length,
	MinLength
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class ClientDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty({ type: String, description: 'id' })
	readonly id: string

	@IsString()
	@IsNotEmpty()
	@Length(3, 25, { message: 'Name must be between 3-25 characters' })
	@ApiProperty({ type: String, description: 'name' })
	readonly name: string

	@IsString()
	@IsNotEmpty()
	@ApiProperty({ type: String, description: 'gender' })
	readonly gender: string

	@IsNotEmpty()
	@Length(10, 15, { message: 'Phone must be between 10-15 characters' })
	@ApiProperty({ type: String, description: 'phone' })
	readonly phone: number

	@IsEmail()
	@IsString()
	@MinLength(5)
	@ApiProperty({ type: String, description: 'email' })
	readonly email: string

	@IsString()
	@Length(5, 35, { message: 'Address must be between 5-35 characters' })
	@IsNotEmpty()
	@ApiProperty({ type: String, description: 'address' })
	readonly address: string

	@IsString()
	@IsNotEmpty()
	@ApiProperty({ type: String, description: 'nationality' })
	readonly nationality: string

	@IsDateString()
	@IsNotEmpty()
	@ApiProperty({ type: String, description: 'dateOfBirth' })
	readonly dateOfBirth: string

	@IsString()
	@IsNotEmpty()
	@ApiProperty({ type: String, description: 'educationBackground' })
	readonly educationBackground: string

	@IsString()
	@IsNotEmpty()
	@ApiProperty({ type: String, description: 'preferredModeOfContact' })
	readonly preferredModeOfContact: string
}
