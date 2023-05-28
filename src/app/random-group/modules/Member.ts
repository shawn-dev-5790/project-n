export interface IMember {
  id: number;
  name: string;
  chapter: string;
  captain_count: number;
  group_no: number;
}

export default class Member implements IMember {
  id: number;
  name: string;
  chapter: string;
  captain_count: number;
  group_no: number;

  constructor(data: IMember) {
    this.id = data.id;
    this.name = data.name;
    this.chapter = data.chapter;
    this.captain_count = data.captain_count;
    this.group_no = data.group_no;
  }
}
