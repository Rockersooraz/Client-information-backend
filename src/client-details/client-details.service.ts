import { BadRequestException, Injectable } from '@nestjs/common'
import { ClientDto } from '../dto/client.dto'
import { CsvWriterUtils } from './utils/csv-writer-utils'
import { CsvReaderUtils } from './utils/csv-reader-utils'
import { PageableDto } from '../dto/pageable.dto'
@Injectable()
export class ClientDetailsService {

	findAll(query: number): PageableDto {
		const client = CsvReaderUtils.getJsonStoredData();
		return {
			client: client.slice(0, query + 1),
			limit: query,
			page: Math.ceil(client.length / query)
		}
	}

	findByClientId(clientId: string): ClientDto {
		if (CsvReaderUtils.findClientId(clientId) === false) {
			throw new BadRequestException(
				"Can't find client with Provided clientId",
				clientId
			)
		}
		const client = CsvReaderUtils.getJsonStoredData()
		return client.find((client) => client.id === clientId)
	}

	create(clientInfo: ClientDto): ClientDto {
		if (CsvReaderUtils.findClientId(clientInfo.id) === true) {
			throw new BadRequestException('Client Already existed', clientInfo.id)
		}
		const data = CsvReaderUtils.getJsonStoredData()
		const writeIntoFile = new CsvWriterUtils()
		writeIntoFile.writeToCsvFormat([...data, clientInfo])
		return clientInfo
	}

	update(userInfo: ClientDto, clientId: string): ClientDto {
		if (CsvReaderUtils.findClientId(clientId) === false) {
			throw new BadRequestException("Can't update client", clientId)
		}
		const client = CsvReaderUtils.getJsonStoredData()
		const clientIndex = client.findIndex((user) => user.id === clientId)
		client[clientIndex] = userInfo
		const writeIntoFile = new CsvWriterUtils()
		writeIntoFile.writeToCsvFormat([...client])
		CsvReaderUtils.readCsvFile()
		return userInfo
	}

	delete(clientId: string): string {
		if (CsvReaderUtils.findClientId(clientId) === false) {
			throw new BadRequestException(
				`Client having client-id ${clientId} doesn't exist`
			)
		}
		const client = CsvReaderUtils.getJsonStoredData().filter(
			(data) => data.id !== clientId
		)
		const writeIntoFile = new CsvWriterUtils()
		writeIntoFile.writeToCsvFormat([...client])
		CsvReaderUtils.readCsvFile()
		return clientId
	}
}
