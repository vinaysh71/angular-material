import { Note } from "./note";

export class User {
  id: number;
  name: string;
  birthDate: Date;
  avatar: String;
  bio: String;
  notes: Note[] = [];
}
