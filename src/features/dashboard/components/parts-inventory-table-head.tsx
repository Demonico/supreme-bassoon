'use client';

import { useState } from 'react';
import { TableData, Column } from '../types/table.types';

interface PartsInventoryTableHeaderProps {
  columns: Column[];
  handleSorting: (accessor: keyof TableData, order: 'asc' | 'desc') => void;
}

export default function PartsInventoryTableHead({
  columns,
  handleSorting,
}: PartsInventoryTableHeaderProps) {
  const [sortField, setSortField] = useState<keyof TableData | ''>('');
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');

  const handleSortingChange = (accessor: keyof TableData) => {
    const sortOrder =
      accessor === sortField && order === 'asc' ? 'desc' : 'asc';
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead>
      <tr>
        {columns.map(({ header, accessor }) => {
          return (
            <th key={accessor} onClick={() => handleSortingChange(accessor)}>
              <div className='flex items-center gap-1'>
                {header}
                <div className='flex flex-col gap-1'>
                  <span
                    className={`${
                      sortField === accessor && order === 'asc'
                        ? 'text-blue-500'
                        : 'text-slate-300'
                    }`}
                  >
                    &#9650;
                  </span>
                  <span
                    className={`${
                      sortField === accessor && order === 'desc'
                        ? 'text-blue-500'
                        : 'text-slate-300'
                    }`}
                  >
                    &#9660;
                  </span>
                </div>
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
