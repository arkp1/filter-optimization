import { useMemo } from 'react';

export function useFilteredData(data, selectedFilters) {
  return useMemo(() => {
    return data.filter(row =>
      Object.entries(selectedFilters).every(([mod, values]) =>
        values.length === 0 || values.includes(row[mod])
      )
    );
  }, [data, selectedFilters]);
}
