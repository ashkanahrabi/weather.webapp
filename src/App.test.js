import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders <App /> and its child properly', () => {
  render(<App />);
  const homeContainerElement = screen.getByTestId('home-container');
  expect(homeContainerElement).toBeInTheDocument();
});
