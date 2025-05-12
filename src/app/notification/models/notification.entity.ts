export class Notification{
  id?: number;
  title?: string;
  description?: string;
  type?: string;
  date?: Date;

  constructor(id?: number, title?: string , description?: string, type?: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.type = type;
    this.date = new Date();
  }
}
