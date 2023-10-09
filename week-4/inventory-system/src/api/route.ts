import path from 'path';
import { promises as fs } from 'fs';

export default async function loadData(): Promise<string> {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'data');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/inventory.json', 'utf8');
  //Return the content of the data file in json format
  return await fileContents;  
}