import React from "react";
import { LaunchesPageContainer } from "./style";

/**
 * @description page component
 * @returns {JSX} component markup, page launches list
 */
const LaunchesPage: React.FC = () => {
  return (
    <LaunchesPageContainer>
      <div>hero image</div>
      <div>
        <div>
          {" "}
          <span>filter by year</span>
          <span>sort asc/desc</span>{" "}
        </div>
        <div>list of launches</div>
      </div>
    </LaunchesPageContainer>
  );
};

export default LaunchesPage;
