/**import Transaction from '../models/Transaction';
import csvParse from 'csv';
import fs from "fs";

class ImportTransactionsService {
  async execute(filePath: string): Promise<Transaction[]> {
    const contactsReadStream = fs.createReadStream(filePath);

    const parsers = csvParse({

    })
  }
}

export default ImportTransactionsService;*/
