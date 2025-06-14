import DataTable from 'react-data-table-component';

export function MyDataTable({ data }) {
  const columns = Object.keys(data[0] || {}).map(key => ({
    name: key,
    selector: row => row[key],
    sortable: true,
  }));

  const paginationComponentOptions = {
	rowsPerPageText: 'results',
  rangeSeparatorText: 'of',
};


  return <DataTable columns={columns} data={data}
  pagination 
  paginationComponentOptions={paginationComponentOptions}
  />;
}
