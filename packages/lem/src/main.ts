import showdown from 'showdown';
import path from 'path';
import * as fs from 'fs';

export class Lem {
  mdConverter: showdown.Converter;
  store: {
    pages: any[],
    lists: any[]
  }
  config: any;

  constructor() {
    this.mdConverter = new showdown.Converter({metadata: true});
    this.mdConverter.setFlavor('github');
    this.store = {
      pages: [],
      lists: [],
    }
    this.config = null;
    // JSON.parse(fs.readFileSync(path.normalize(configFileUrl), { encoding: 'utf-8'}) || '{}')
  }

  openJsonFile(fileUrl: string) {
    return JSON.parse(fs.readFileSync(path.normalize(fileUrl), { encoding: 'utf-8'}) || '{}')
  }

  openConfig(configFileUrl: string) {
    this.config = this.openJsonFile(configFileUrl);
    console.log(this.config);
  }
}
