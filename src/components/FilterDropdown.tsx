import { Multiselect } from 'multiselect-react-dropdown';

export function FilterDropdown({ label, options, selectedValues, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <Multiselect
        options={options}
        selectedValues={selectedValues}
        onSelect={onChange}
        onRemove={onChange}
        displayValue="name"
        showCheckbox
        placeholder={`Select ${label}`}
        avoidHighlightFirstOption
      />
    </div>
  );
}
