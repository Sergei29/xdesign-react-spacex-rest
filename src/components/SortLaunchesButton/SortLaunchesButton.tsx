import React from "react";
import SortIcon from "../../assets/icon/sort.png";
// style:
import { SortButtonContainer } from "./style";

type Props = {
  bDisabled: boolean;
  bDescending: boolean;
  funcHandleClick: () => void;
};

/**
 * @description sort launches button
 * @param {Boolean} {bDescending currently selected sort order
 * @param {Boolean} bDisabled is button disabled
 * @param {Function} funcHandleClick callback on click}
 * @returns {JSX} markup, button
 */
const SortLaunchesButton: React.FC<Props> = ({
  bDescending,
  bDisabled,
  funcHandleClick,
}) => (
  <SortButtonContainer onClick={funcHandleClick} disabled={bDisabled}>
    <span>Sort {bDescending ? "Ascending" : "Descending"}</span>
    <img src={SortIcon} alt="sort icon" />
  </SortButtonContainer>
);

export default SortLaunchesButton;
