import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../navbar';

const MockTodoFooter = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);

it('Check for any changes to the component', () => {
  const tree = renderer.create(
    <MockTodoFooter />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Three links should be rendered', () => {
  render(
    <MockTodoFooter />,
  );
  const listItems = screen.getAllByTestId('li');

  expect(listItems.length).toBe(3);
});
