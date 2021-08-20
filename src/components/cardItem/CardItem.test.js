import { render, screen, fireEvent } from "@testing-library/react";
import CardItem from './CardItem';
import * as SelectedTimeSlot from '../../utils/storage/selectedTimeSlot';
import React from "react";

const mockItem = {
    dt: 1629315650,
    main: {
        temp: 270
    },
    weather: [
        {
            icon: '01d'
        }
    ]
};
test('Renders <CardItem />', () => {
    render(<CardItem data={mockItem}/>);
    expect(screen.getByTestId('card-item')).toBeInTheDocument();
});

test('toCelsius method works properly', () => {
    render(<CardItem data={mockItem}/>);
    expect(screen.getByTestId('celsius-temp').innerHTML).toEqual('-4\u00b0');
});

test('time format is correct', () => {
    render(<CardItem data={mockItem}/>);
    expect(screen.getByTestId('time')).toHaveTextContent(':');
});

test('mock context and onClick event updates context', () => {
    let selectedTime= {};
    const setSelectedTime = function (value){
        selectedTime = value;
    }
    const contextValues = [
        selectedTime,
        setSelectedTime
    ];
    jest.spyOn(React, 'useState').mockImplementation(() => React.useState(selectedTime));
    jest.spyOn(SelectedTimeSlot, 'useSelectedTimeContext').mockImplementation(() => contextValues);
    render(<CardItem data={mockItem}/>);
    fireEvent.click(screen.getByTestId('card-item'));
    expect(selectedTime.toString()).toEqual(mockItem.toString());
});