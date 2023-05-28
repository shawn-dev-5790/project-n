import { Nullable } from "@/utils";

let campaignId = 0;

export type ChannelType =
  | "alimtalk"
  | "banner"
  | "email"
  | "friendtalk"
  | "lms";

export type CampaignType = "auto" | "auto_custom" | "custom";

export interface ICampaignEntity {
  [k: string]: any;
  id: string;
  siteId: string;
  authorId: string;
  channelType: ChannelType;
  type: CampaignType;
  name: string;
  tags: [];
  createdAt: string;
  updatedAt: string;
  editedAt: string;
  deletedAt: string;
  isOn: boolean;
  allowEdit: boolean;
  allowRemove: boolean;
  allowCreateCreative: boolean;
  trySendMsg: boolean;
  expectedUserCnt: Nullable<number>;
  channelUnitCost: number;
  preBodyText: Nullable<string>;
  priority: Nullable<number>;
  expireHour: Nullable<number>;
  campaignPresetId: Nullable<string>;
  audienceId: Nullable<string>;
  sendingType: Nullable<string>;
  sendingStartDate: Nullable<string>;
  sendingEndDate: Nullable<string>;
  sendingDaysOfWeek: number[];
  sendingTime: Nullable<string>;
  isDuplicated: number;
  subpage: string;
  stat: any;
}

export class Campaign {
  id: string;
  siteId: string;
  authorId: string;
  channelType: ChannelType;
  type: CampaignType;
  name: string;
  tags;
  createdAt: string;
  updatedAt: string;
  editedAt: string;
  deletedAt: string;
  isOn: boolean;
  allowEdit: boolean;
  allowRemove: boolean;
  allowCreateCreative: boolean;
  trySendMsg: boolean;
  expectedUserCnt: Nullable<number>;
//   channelUnitCost: number;
//   preBodyText: Nullable<string>;
//   priority: Nullable<number>;
//   expireHour: Nullable<number>;
//   campaignPresetId: Nullable<string>;
//   audienceId: Nullable<string>;
//   sendingType: Nullable<string>;
//   sendingStartDate: Nullable<string>;
//   sendingEndDate: Nullable<string>;
//   sendingDaysOfWeek: number[];
//   sendingTime: Nullable<string>;
//   isDuplicated: number;
//   subpage: string;
  stat: any;

  constructor(data: ICampaignEntity) {
    this.id = data.id;
    this.siteId = data.siteId;
    this.authorId = data.authorId;
    this.channelType = data.channelType;
    this.type = data.type;
    this.name = data.name;
    this.tags = data.tags;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.editedAt = data.editedAt;
    this.deletedAt = data.deletedAt;
    this.isOn = data.isOn;
    this.allowEdit = data.allowEdit;
    this.allowRemove = data.allowRemove;
    this.allowCreateCreative = data.allowCreateCreative;
    this.trySendMsg = data.trySendMsg;
    this.expectedUserCnt = data.expectedUserCnt;
  }
}
