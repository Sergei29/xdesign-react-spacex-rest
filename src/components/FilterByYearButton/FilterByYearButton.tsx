import React from "react";
// style:
import { SelectByYearContainer } from "./style";

type Props = {
  arrYears: number[];
  funcHandleSelect: (intYear: number | null) => void;
  nIntSelectedYear: null | number;
};

/**
 * @description filter by year button
 * @param {Array} {arrYears list of years
 * @param {null|Number} nIntSelectedYear selected year
 * @param {Function} funcHandleSelect callback on selecting a new value }
 * @returns {JSX} markup, select input
 */
const FilterByYearButton: React.FC<Props> = ({
  arrYears,
  nIntSelectedYear,
  funcHandleSelect,
}) => {
  /**
   * @description select change handler
   * @param {Object} objEvent change event object
   * @returns {indefined} sets state
   */
  const funcHandleChange = (
    objEvent: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const intValue = parseInt(objEvent.target.value);
    const nIntValue = intValue > 0 ? intValue : null;
    funcHandleSelect(nIntValue);
  };

  return (
    <SelectByYearContainer
      id="years"
      onChange={funcHandleChange}
      value={nIntSelectedYear ? nIntSelectedYear : "Filter by year"}
    >
      <option value={0}>Filter by year</option>
      {arrYears.map((intYear) => (
        <option key={intYear} value={intYear}>
          {intYear}
        </option>
      ))}
    </SelectByYearContainer>
  );
};

export default FilterByYearButton;
