import React from "react";
// style:
import { FooterContainer } from "./style";

type Props = {
  children: React.ReactNode;
};

/**
 * @description container component
 * @param {Node} children footer content
 * @returns {JSX} component markup, page footer
 */
const Footer: React.FC<Props> = ({ children }) => (
  <FooterContainer>{children}</FooterContainer>
);

export default Footer;
