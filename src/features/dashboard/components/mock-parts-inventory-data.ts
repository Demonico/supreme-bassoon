import { TableData } from '../types/table.types';

export const mockPartsInventoryData: TableData[] = [
  {
    id: 1,
    partId: '12345',
    partName: 'Part 1',
    quantity: 10,
    serviceTypes: ['A1'],
  },
  {
    id: 2,
    partId: '23456',
    partName: 'Part 2',
    quantity: 20,
    serviceTypes: ['A2'],
  },
  {
    id: 3,
    partId: '34567',
    partName: 'Part 3',
    quantity: 30,
    serviceTypes: ['A3', 'A4'],
  },
  {
    id: 4,
    partId: '45678',
    partName: 'Part 4',
    quantity: 40,
    serviceTypes: ['A4'],
  },
  {
    id: 5,
    partId: '56789',
    partName: 'Part 5',
    quantity: 50,
    serviceTypes: ['A1', 'A3', 'A5'],
  },
];
