import { Fragment } from 'react';

function SelectInput({ id, label, values, currentValue, setCurrentValue }) {
  const selectOptions = values.map((value) => (
    <option value={value[0]} key={value}>
      {value[0]}
    </option>
  ));
  return (
    <Fragment>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        defaultValue={currentValue}
        onClick={(e) => setCurrentValue(e.target.value)}
      >
        {selectOptions}
      </select>
      <br />
    </Fragment>
  );
}

export default SelectInput;
