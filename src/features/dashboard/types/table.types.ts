export interface TableData {
  id: number;
  partId: string;
  partName: string;
  quantity: number;
  serviceTypes: string[];
}

export interface Column {
  header: string;
  accessor: keyof TableData;
}
