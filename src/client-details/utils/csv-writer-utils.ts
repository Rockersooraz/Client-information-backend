import { ClientDto } from '../../dto/client.dto';
import { createObjectCsvWriter } from 'csv-writer';

export class CsvWriterUtils {
  private readonly path = 'src/assets/file.csv';
  readonly header = [
    { id: 'id', title: 'ID' },
    { id: 'name', title: 'NAME' },
    { id: 'gender', title: 'GENDER' },
    { id: 'phone', title: 'PHONE' },
    { id: 'email', title: 'EMAIL' },
    { id: 'address', title: 'ADDRESS' },
    { id: 'nationality', title: 'NATIONALITY' },
    { id: 'dateOfBirth', title: 'DATE-OF-BIRTH' },
    { id: 'educationBackground', title: 'EDUCATION-BACKGROUND' },
    { id: 'preferredModeOfContact', title: 'PREFERRED-MODE-OF-CONTACT' },
  ];

  writeToCsvFormat(userDetails: ClientDto[]): void {
    const csvWriter = createObjectCsvWriter({
      path: this.path,
      header: this.header,
    });

    if (userDetails) {
      csvWriter.writeRecords(userDetails).then(() => {
        console.log('Completed writing to csv');
      });
    }
  }
}
