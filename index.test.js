import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import HamburgerDrawer from './index';

describe('HamburgerDrawer Test Suite', () => {
  it('HamburgerDrawer Test Case', () => {
    render(
      <HamburgerDrawer>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
        </ul>
      </HamburgerDrawer>,
    );

    const classList = document.documentElement.classList;
    expect(classList.contains('HamburgerDrawer-open')).toBe(false);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(classList.contains('HamburgerDrawer-open')).toBe(true);
  });
});