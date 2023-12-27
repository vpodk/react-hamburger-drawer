import React from "react";

declare module "react-hamburger-drawer" {
  export interface HamburgerDrawerProps {
    children: React.ReactNode;
    useFocusBounder: boolean;
  }

  const HamburgerDrawer: React.FunctionComponent<HamburgerDrawerProps>;
  export default HamburgerDrawer;
}
