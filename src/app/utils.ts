//pure functions
export const isCharacterLengthGreaterThan3 = (val:string) => val.length > 3 && val.length < 10;

export const mapInputPrefix = (val:string) => `input value: ${val}`;