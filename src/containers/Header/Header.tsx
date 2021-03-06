import React from "react";
// style:
import { HeaderContainer } from "./style";

type Props = {
  children: React.ReactNode;
};

/**
 * @description container component
 * @param {Node} children header content
 * @returns {JSX} component markup, page header
 */
const Header: React.FC<Props> = ({ children }) => (
  <HeaderContainer>{children}</HeaderContainer>
);

export default Header;
