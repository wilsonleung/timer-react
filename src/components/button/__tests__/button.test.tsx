import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { screen } from '@testing-library/react';
import Button from './../index';

describe('Button Component', () => {
  it('should render Hello text', () => {
    render(<Button text="hello" color={'primary'} />);
    expect(screen.getByText('hello')).toBeInTheDocument();
  });

  it('shoudl contains secondary classes', () => {
    render(<Button text="hello" color={'secondary'} />);
    const buttonElement = screen.getByText('hello');
    expect(buttonElement.classList.contains('btn')).toBe(true);
    expect(buttonElement.classList.contains('secondary')).toBe(true);
  });

  afterAll(cleanup);
});
