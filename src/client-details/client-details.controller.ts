import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	Query
} from '@nestjs/common'
import { ClientDto } from '../dto/client.dto'
import { ClientDetailsService } from './client-details.service'
import { ApiBody, ApiCreatedResponse } from '@nestjs/swagger'
import { PageableDto } from '../dto/pageable.dto'

@Controller('client-details')
export class ClientDetailsController {
	constructor(private readonly detailsService: ClientDetailsService) {}

	@Get()
	@ApiCreatedResponse({ description: 'Get All Registered Client' })
	findAll(@Query('limit') limit = '10'): PageableDto {
		return this.detailsService.findAll(+limit)
	}

	@Get(':id')
	@ApiCreatedResponse({ description: 'Get Specific Registered Client' })
	findById(@Param('id') clientId): ClientDto {
		return this.detailsService.findByClientId(clientId)
	}

	@Post()
	@ApiCreatedResponse({ description: 'Client Registered' })
	@ApiBody({ type: ClientDto })
	create(@Body() clientInfo: ClientDto): ClientDto {
		return this.detailsService.create(clientInfo)
	}

	@Delete(':id')
	@ApiCreatedResponse({ description: 'Delete Specific Client' })
	delete(@Param('id') id): string {
		return this.detailsService.delete(id)
	}

	@Put(':id')
	@ApiCreatedResponse({ description: 'Update Specific Client' })
	@ApiBody({ type: ClientDto })
	update(
		@Body() updatedClientInfo: ClientDto,
		@Param('id') clientId
	): ClientDto {
		return this.detailsService.update(updatedClientInfo, clientId)
	}
}
