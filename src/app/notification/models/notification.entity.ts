export class Notification{
  id?: number;
  title?: string;
  description?: string;
  type?: string;

  constructor(){
    this.id = 0;
    this.title = '';
    this.description = '';
    this.type = '';
  }
}
