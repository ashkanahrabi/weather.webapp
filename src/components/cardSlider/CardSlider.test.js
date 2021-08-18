import { render, screen } from "@testing-library/react";
import CardSlider from './CardSlider';

test('Renders <CardSlider />', async () => {
    render(<CardSlider />);
    await expect(screen.getByTestId('card-slider-container')).toBeInTheDocument();
});
