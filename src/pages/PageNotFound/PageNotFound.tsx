import React from "react";
// style :
import { PageNotFoundContainer } from "./style";

/**
 * @description 404 not found component
 * @returns {JSX} component markup, view for page not found
 */
const PageNotFound: React.FC = () => (
  <PageNotFoundContainer>
    <h1>Page not found.</h1>
  </PageNotFoundContainer>
);

export default PageNotFound;
