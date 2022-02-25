const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//                                            (accumulator), (element)
const totalBatteries = batteryBatches.reduce((initialValue, currentValue) => {
    return initialValue + currentValue;
})
