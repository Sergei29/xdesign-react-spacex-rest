import React from "react";
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
    Sort {bDescending ? "Ascending" : "Descending"}
  </SortButtonContainer>
);

export default SortLaunchesButton;
