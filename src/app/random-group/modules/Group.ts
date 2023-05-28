import { IMember } from "./Member";

export interface IGroup {
  members: IMember[];
  size: number;
  group_no: number;
}

export default class Group implements IGroup {
  members: IMember[];
  size: number;
  group_no: number;

  constructor(data: IGroup) {
    this.members = data.members;
    this.size = data.size;
    this.group_no = data.group_no;
  }

  get chapters(): IMember["chapter"][] {
    return this.members.map((member) => member.chapter);
  }
  get groupNos(): IMember["group_no"][] {
    return this.members
      .map((member) => member.group_no)
      .filter((group_no) => group_no > 0);
  }

  canAdd(): boolean {
    return this.members.length < this.size;
  }

  add(member: IMember) {
    this.members.push(member);
    return this;
  }
  sort() {
    const by: keyof IMember = "captain_count";
    this.members.sort((a, b) => a[by] - b[by]);
    return this;
  }
}
