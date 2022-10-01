import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../calculator';

it('Check for any changes to the component', () => {
  const tree = renderer.create(
    <Calculator />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Should return 8  for (2+2) * 2', () => {
  render(
    <Calculator />,
  );
  const display = screen.getByTestId('display');
  const two = screen.getByText('2');
  const plus = screen.getByTestId('+');
  const multiply = screen.getByText('x');
  const equal = screen.getByText('=');
  fireEvent.click(two);
  fireEvent.click(plus);
  fireEvent.click(two);
  fireEvent.click(multiply);
  fireEvent.click(two);
  fireEvent.click(equal);
  expect(display).toHaveTextContent('8');
});
