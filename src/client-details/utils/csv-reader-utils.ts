import * as csv from 'csvtojson';
import { CsvWriterUtils } from './csv-writer-utils';
import * as fs from 'fs';
import { ClientDto } from '../../dto/client.dto';

export class CsvReaderUtils {
  private static readonly source = 'src/assets/file.csv';
  private static readonly destination = 'src/assets/output.json';

  static readCsvFile(): any {
    const getHeader = new CsvWriterUtils();
    csv({
      headers: getHeader.header.map((header) => header.id),
    })
      .fromFile(this.source)
      .then((jsonObj) => {
        console.log(jsonObj);
        fs.writeFileSync(this.destination, JSON.stringify(jsonObj), 'utf-8');
      });
  }
  static getJsonStoredData(): ClientDto[] {
    this.readCsvFile();
    const rawData = fs.readFileSync(this.destination);
    return JSON.parse(rawData.toString());
  }
  static findClientId(clientId: string): boolean {
    const clientInfo = this.getJsonStoredData();
    if (clientInfo.find((client) => client.id === clientId)) {
      return true;
    }
    return false;
  }
}
