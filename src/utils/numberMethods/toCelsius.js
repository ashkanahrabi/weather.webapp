export const toCelsius = value => typeof value == "number" ? Math.floor(value - 273.5) + '\u00b0' : '-';