'use client';

import { useState } from 'react';
import PartsInventoryTableBody from './parts-inventory-table-body';
import PartsInventoryTableHead from './parts-inventory-table-head';
import { TableData, Column } from '../types/table.types';
import { mockPartsInventoryData } from './mock-parts-inventory-data';

export default function PartsInventoryTable() {
  const [tableData, setTableData] = useState<TableData[]>(
    mockPartsInventoryData
  );
  const [selectedServiceType, setSelectedServiceType] = useState<string>('');

  const columns: Column[] = [
    {
      header: 'Part Number',
      accessor: 'partId',
    },
    {
      header: 'Part Name',
      accessor: 'partName',
    },
    {
      header: 'Quantity',
      accessor: 'quantity',
    },
    {
      header: 'Service Type(s)',
      accessor: 'serviceTypes',
    },
  ];

  const handleSorting = (
    accessor: keyof TableData,
    sortOrder: 'asc' | 'desc'
  ) => {
    const sortedData = [...tableData].sort((a, b) => {
      const aValue = a[accessor];
      const bValue = b[accessor];

      if (typeof aValue === 'string' || typeof bValue === 'string') {
        return (
          aValue.toString().localeCompare(bValue.toString(), 'en', {
            numeric: true,
          }) * (sortOrder === 'asc' ? 1 : -1)
        );
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      }

      if (sortOrder === 'asc') {
        return a[accessor] > b[accessor] ? 1 : -1;
      } else {
        return a[accessor] < b[accessor] ? 1 : -1;
      }
    });
    setTableData(sortedData);
  };

  const handleServiceTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedServiceType(event.target.value);
  };

  const filteredData = selectedServiceType
    ? tableData.filter((data) =>
        data.serviceTypes.includes(selectedServiceType)
      )
    : tableData;

  const uniqueServiceTypes = Array.from(
    new Set(tableData.flatMap((data) => data.serviceTypes))
  );

  return (
    <div>
      <label htmlFor='serviceType'>Filter by Service Type: </label>
      <select
        id='serviceType'
        value={selectedServiceType}
        onChange={handleServiceTypeChange}
      >
        <option value=''>All</option>
        {uniqueServiceTypes.map((serviceType) => (
          <option key={serviceType} value={serviceType}>
            {serviceType}
          </option>
        ))}
      </select>
      <table>
        <caption>Parts in stock, column headers are sortable</caption>
        <PartsInventoryTableHead
          columns={columns}
          handleSorting={handleSorting}
        />
        <PartsInventoryTableBody tableData={filteredData} columns={columns} />
      </table>
    </div>
  );
}
