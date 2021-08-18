import { render, screen } from "@testing-library/react";
import Header from './Header';

test('Renders <Header />', async () => {
    render(<Header />);
    await expect(screen.getByTestId('header-container')).toBeInTheDocument();
});
