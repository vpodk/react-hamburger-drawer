# Navigation drawer

[![Build Status](https://github.com/vpodk/react-hamburger-drawer/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/vpodk/react-hamburger-drawer/actions/workflows/npm-publish.yml) [![License](https://img.shields.io/:license-apache-blue.svg?logo=apache)](https://www.apache.org/licenses/LICENSE-2.0.html) [![NPM version](https://img.shields.io/npm/v/react-hamburger-drawer.svg?logo=npm)](https://npmjs.org/package/react-hamburger-drawer) [![NPM downloads](https://img.shields.io/npm/dm/react-hamburger-drawer.svg?style=flat)](https://npmjs.org/package/react-hamburger-drawer)

Simple lightweight react hamburger navigation drawer (based on [navigation-drawer](https://github.com/vpodk/navigation-drawer)).

### Key points

- Hidden `<input type="checkbox">` as a toggle;
- Fullscreen `<label>` element for veil;
- Google Material spec for sizes, animations, and colors.

### Accessibility

- Support keyboard navigation (Tab, Esc and Enter);
- Prevents page scrolling when the navigation drawer is open.

### Usage example:

```bash
npm install react-hamburger-drawer
# Or
yarn add react-hamburger-drawer
```

```js
import HamburgerDrawer from "react-hamburger-drawer";
```

```html
<div className="App">
  <header>
    <HamburgerDrawer>
      <!-- Your navigation drawer content here: -->
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/privacy-policy">Privacy Policy</a></li>
      </ul>
    </HamburgerDrawer>
    <h1>Your Application Header</h1>
    ...
  </header>
  ...
</div>
```

## Component props

- `useFocusBounder` - An optional property to enable or disable [FocusBounder](https://github.com/wayfair-incubator/react-focus-bounder) component. Default `false`.

## Next.js v13+ and other SSRs

> All components inside the app directory are React Server Components by default.
> To use `useRef` or `useEffect` hooks, the component must be marked as client component: `"use client"`.

Create a "drawer.js" file with the following content:

```js
"use client";
import HamburgerDrawer from "react-hamburger-drawer";
export default HamburgerDrawer;
```

And import the `HamburgerDrawer` component from the "drawer.js" module:

```js
import HamburgerDrawer from "./drawer";
```

Links:

- https://nextjs.org/docs/messages/react-client-hook-in-server-component
- https://nextjs.org/docs/app/building-your-application/rendering
- https://react.dev/reference/react/use-client

## Screenshots

<table width="100%" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td width="70%">
      <img src="https://user-images.githubusercontent.com/11623226/133954550-d8bc05e6-e1c1-4e66-bfbf-d28dc0a0f23a.gif"/>
    </td>
    <td width="30%">
      <img src="https://user-images.githubusercontent.com/11623226/133954776-70d1a7b1-b2e9-4b54-80c8-0f3bb2f94ec6.gif"/>
    </td>
  </tr>
</table>
