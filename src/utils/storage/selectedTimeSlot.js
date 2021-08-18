import React, {useState, createContext} from "react";

export const SelectedTimeSlotContext = createContext(null);

const SelectedTimeSlot = ({children}) => {
    const [selectedTimeSlot, setSelectedTimeSlot] = useState();
    return (
        <SelectedTimeSlotContext.Provider value={[selectedTimeSlot, setSelectedTimeSlot]}>{children}</SelectedTimeSlotContext.Provider>
    )
}
export default SelectedTimeSlot;