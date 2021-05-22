import { ClientDto } from './client.dto'

export class PageableDto {
	readonly client: ClientDto[]
	readonly limit: number
	readonly page: number
	readonly totalRecords: number
}
