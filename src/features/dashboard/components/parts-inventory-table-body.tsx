import { TableData, Column } from '../types/table.types';

interface PartsInventoryTableBodyProps {
  tableData: TableData[];
  columns: Column[];
}

export default function PartsInventoryTableBody({
  tableData,
  columns,
}: PartsInventoryTableBodyProps) {
  return (
    <tbody>
      {tableData.map((data) => {
        return (
          <tr key={data.id}>
            {columns.map(({ accessor }) => {
              let tData = data[accessor] ? data[accessor] : '---';
              if (Array.isArray(tData)) {
                tData = tData.join(', ');
              } else if (typeof tData === 'number') {
                tData = tData.toLocaleString();
              }
              return <td key={accessor}>{tData}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
}
