export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}

// 게시물의 공개/비공개 여부
// 공개(PUBLIC)/비공개(PRIVATE) 외의 다른 상태값이 들어오면 안되므로 enumeration을 사용
export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
