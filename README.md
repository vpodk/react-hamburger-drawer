# Navigation drawer
Simple lightweight react hamburger navigation drawer.

### Key points
- Hidden `<input type="checkbox">` as a toggle;
- Fullscreen `<label>` element for veil;
- Google Material spec for sizes, animations, and colors.

### Accessibility
Implemented with HTML and CSS only, but for A11y it uses few lines of JavaScript:
- Support keyboard navigation (Esc and Enter);
- Prevents page scrolling when the navigation drawer is open.

### Usage example:

```js
import {HamburgerDrawer} from 'react-hamburger-drawer';
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
![hamburger-drawer-screen-recording](https://user-images.githubusercontent.com/11623226/133954550-d8bc05e6-e1c1-4e66-bfbf-d28dc0a0f23a.gif)

