
export interface PageRequestDto {
  page: number;
  size: number;
  sort: SortDto[];
}

interface SortDto {
  property: string;
  direction: string;
}

