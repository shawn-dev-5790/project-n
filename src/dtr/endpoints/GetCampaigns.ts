interface ICampaignsGetRes {
  code: string;
  message: string;
  data: {
    page_size: number;
    page_no: number;
    last_page_no: number;
    on_count: number;
    total_count: number;
    campaigns: any[];
  };
}
