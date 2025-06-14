import data from './data/numbers.json';
import { FilterDropdown } from './components/FilterDropdown.js';
import { MyDataTable } from './components/Table.jsx';
import { useFilteredData } from './hooks/useFilteredData.js';
import { useState } from 'react';

const mods = ['mod3', 'mod4', 'mod5'];

export default function App() {
  const [filters, setFilters] = useState({
    mod3: [],
    mod4: [],
    mod5: [],
  });

  const filteredData = useFilteredData(data, filters);

  // update options based on filtered dataset for each mod
  const getOptions = (modKey) => {
    const temp = filteredData.map(d => d[modKey]);
    return Array.from(new Set(temp)).map(x => ({ name: x }));
  };

  return (
    <>
    <div className='flex flex-col justify-center items-center'>
      {mods.map(mod => (
        <FilterDropdown
          key={mod}
          label={mod}
          options={getOptions(mod)}
          selectedValues={filters[mod].map(x => ({ name: x }))}
          onChange={(selected) =>
            setFilters(prev => ({
              ...prev,
              [mod]: selected.map((opt) => opt.name)
            }))
          }
        />
      ))}
      <MyDataTable data={filteredData} />
    </div>
    </>
  );
}
