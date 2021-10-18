import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import About from '../pages/about';

describe('About Page', () => {
  it('renders aboutpage unchanged', () => {
    const tree = renderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a heading', () => {
    render(<About />);

    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent('About Page');

    // const heading = screen.getByRole('heading', {
    //   name: 'About Page',
    // });
    // expect(heading).toBeInTheDocument();
  });
});
