import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar in the app component', () => {
  render(<App />);
  const navbar = screen.getByTestId("navbar");
  expect(navbar).toBeInTheDocument();
});
