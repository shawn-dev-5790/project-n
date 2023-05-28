import Group from "./Group";
import Member from "./Member";
import { chunkByMinMax, getRandomIndex } from "./utils";

export interface IGroupFactory {
  random_seed: number;
  origins: Member[];
  group_size: [number, number];
}

export default class GroupsFactory {
  origins: IGroupFactory["origins"] = [];
  group_size: IGroupFactory["group_size"] = [3, 4];
  random_seed: IGroupFactory["random_seed"] = 0;
  _members: Member[] = [];
  _groups: Group[] = [];
  _has_error: boolean = false;

  constructor(data: IGroupFactory) {
    this.origins = data.origins.map((member) => new Member({ ...member }));
    this.group_size = data.group_size;
    this.random_seed = data.random_seed;
    this.init();
  }

  init() {
    this._members = this.origins;
    this._groups = chunkByMinMax(this._members.length, this.group_size).map(
      (size, idx) => new Group({ members: [], size, group_no: idx + 1 })
    );
    return this;
  }
  create() {
    try {
      while (this._members.length > 0) {
        this.matching();
      }
    } catch (error) {
      this.retry();
    }
  }
  matching() {
    this._groups.map((group) => {
      if (!group.canAdd()) return group;
      const filtered = this._members.filter((member) =>
        this.matchingCondition(group, member)
      );

      if (!filtered.length) throw new Error();
      const randomIdx = getRandomIndex(filtered, this.random_seed);
      const selectedMember = filtered[randomIdx];

      if (!selectedMember) return group;
      group.add(selectedMember).sort();
      this._members = this._members.filter(
        (member) => member.id !== selectedMember.id
      );

      return group;
    });
  }
  matchingCondition(group: Group, member: Member): boolean {
    return [
      !group.chapters.includes(member.chapter),
      !group.groupNos.includes(member.group_no),
    ].every((v) => v);
  }
  retry() {
    this._has_error = true;
    console.log("조합 실패, 3초 후 다시 시도합니다.");
    setTimeout(() => window.location.reload(), 3000);
  }
}
