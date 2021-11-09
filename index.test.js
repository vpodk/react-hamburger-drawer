import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import HamburgerDrawer from './src/index';

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

    const checkbox = screen.getByRole('checkbox');
    const classList = document.documentElement.classList;
    expect(classList.contains('HamburgerDrawer-open')).toBe(false);
    fireEvent.click(checkbox);
    expect(classList.contains('HamburgerDrawer-open')).toBe(true);
  
    expect(checkbox.checked).toBe(true);
    fireEvent.keyUp(document, {key: 'Escape', code: 27});
    expect(checkbox.checked).toBe(false);
  
    fireEvent.keyUp(checkbox, {key: 'Enter', code: 13});
    expect(checkbox.checked).toBe(true);
    fireEvent.keyUp(checkbox, {key: 'Enter', code: 13});
    expect(checkbox.checked).toBe(false);
  });
});