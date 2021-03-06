import React from "react";
import moment from "moment";
// style:
import {
  LaunchItemContainer,
  LaunchIndex,
  LaunchDateAndRocketName,
  MissionName,
} from "./style";

type Props = {
  intIndex: number;
  strMissionName: string;
  strRocketName: string;
  strLaunchDateUtc: string;
};

/**
 * @description launch list item
 * @param {Number} {intIndex index in the list
 * @param {String} strMissionName mission name
 * @param {String} strRocketName rocker name
 * @param {String} strLaunchDateUtc launch date in UTC format}
 * @returns {JSX} markup, display launch item summary
 */
const LaunchItem: React.FC<Props> = ({
  intIndex,
  strMissionName,
  strRocketName,
  strLaunchDateUtc,
}) => {
  const strFormattedDate = moment(strLaunchDateUtc).format("Do MMMM YYYY");

  return (
    <LaunchItemContainer>
      <LaunchIndex>{`#${intIndex}`}</LaunchIndex>
      <MissionName>{strMissionName}</MissionName>
      <LaunchDateAndRocketName>
        <div>{strFormattedDate}</div>
        <div>{strRocketName}</div>
      </LaunchDateAndRocketName>
    </LaunchItemContainer>
  );
};

export default LaunchItem;
