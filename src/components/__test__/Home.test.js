import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../Home';

it('Check for any changes to the component', () => {
  const tree = renderer.create(
    <Home />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('A heading element should be rendered', () => {
  render(
    <Home />,
  );
  const h1 = screen.getByRole('heading');
  expect(h1).toBeInTheDocument();
});
