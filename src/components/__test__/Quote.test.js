import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quote from '../Quote';

it('Check any changes to the component', () => {
  const tree = renderer.create(
    <Quote />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('A div with className container should be rendered', () => {
  render(
    <Quote />,
  );
  const div = screen.getByTestId('quote');
  expect(div).toHaveClass('container');
});