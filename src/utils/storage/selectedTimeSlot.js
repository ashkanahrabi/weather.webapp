import React, {useState, createContext, useContext} from "react";

const SelectedTimeSlotContext = createContext([]);

export const useSelectedTimeContext = () => useContext(SelectedTimeSlotContext);

const SelectedTimeSlot = ({children}) => {
    const [selectedTimeSlot, setSelectedTimeSlot] = useState();
    return (
        <SelectedTimeSlotContext.Provider value={[selectedTimeSlot, setSelectedTimeSlot]}>{children}</SelectedTimeSlotContext.Provider>
    )
}
export default SelectedTimeSlot;