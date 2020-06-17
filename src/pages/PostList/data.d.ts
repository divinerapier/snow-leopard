export interface PostListItem {
  key: number;
  disabled?: boolean;
  href: string;
  avatar: string;
  name: string;
  owner: string;
  desc: string;
  callNo: number;
  status: number;
  updatedAt: Date;
  createdAt: Date;
  progress: number;
}

export interface PostListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface PostListData {
  list: PostListItem[];
  pagination: Partial<PostListPagination>;
}

export interface PostListParams {
  sorter?: string;
  status?: string;
  name?: string;
  desc?: string;
  key?: number;
  pageSize?: number;
  currentPage?: number;
}
