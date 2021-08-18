import { render, screen } from "@testing-library/react";
import Home from './Home';

test('Renders <Home /> and checks Loading element', async () => {
    render(<Home />);
    await expect(screen.getByTestId('loading-element')).toBeInTheDocument();
});
