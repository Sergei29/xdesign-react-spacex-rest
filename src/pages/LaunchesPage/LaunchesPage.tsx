import React from "react";
// components:
import LaunchesList from "../../components/LaunchesList";
import SpacexImage from "../../components/SpacexImage";
// style:
import { LaunchesPageContainer } from "./style";

/**
 * @description page component
 * @returns {JSX} component markup, page launches list
 */
const LaunchesPage: React.FC = () => {
  return (
    <LaunchesPageContainer>
      <SpacexImage />
      <LaunchesList />
    </LaunchesPageContainer>
  );
};

export default LaunchesPage;
