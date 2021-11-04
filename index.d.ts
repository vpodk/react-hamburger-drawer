import React from "react";

export interface HamburgerDrawerProps {
  children: React.ReactNode;
  useFocusBounder: boolean;
}

declare const HamburgerDrawer: React.FunctionComponent<HamburgerDrawerProps>;

export default HamburgerDrawer;
