import { getStringSeqId } from "@/utils";
import { Nullable, TTodoEntityType } from "@/utils/types";

let id = 0;

export interface ITodoEntity {
  [k: string]: any;
  id: string;
  name: string;
  type: TTodoEntityType;
  createdAt: Nullable<Date>;
  updatedAt: Nullable<Date>;
  deletedAt: Nullable<Date>;
}

export class TodoEntity {
  id: ITodoEntity["id"];
  name: ITodoEntity["name"];
  type: ITodoEntity["type"];
  createdAt: ITodoEntity["createdAt"];
  updatedAt: ITodoEntity["updatedAt"];
  deletedAt: ITodoEntity["deletedAt"];

  constructor(data: ITodoEntity) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.type;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.deletedAt = data.deletedAt;
    data.id || this.create();
  }

  isTypeTodo(): boolean {
    return this.type === "todo";
  }
  isTypeDoing(): boolean {
    return this.type === "doing";
  }
  isTypeDone(): boolean {
    return this.type === "done";
  }
  create(): void {
    if (this.id) return;
    this.id = getStringSeqId((id += 1));
    this.createdAt = new Date();
  }
  update(): void {
    this.updatedAt = new Date();
  }
  delete(): void {
    this.deletedAt = new Date();
  }
  toJSON(): ITodoEntity {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }
  isSame(entity: TodoEntity): boolean {
    const origin = this.toJSON();
    const target = entity.toJSON();
    const hasDiff = !!Object.entries(origin).find(([k, v]) => target[k] !== v);
    return !hasDiff;
  }
}
