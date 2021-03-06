import React from "react";
// style:
import { MainContainer } from "./style";

type Props = {
  children: React.ReactNode;
};

/**
 * @description container component
 * @param {Node} children page main content
 * @returns {JSX} component markup, page main
 */
const Main: React.FC<Props> = ({ children }) => (
  <MainContainer>{children}</MainContainer>
);

export default Main;
