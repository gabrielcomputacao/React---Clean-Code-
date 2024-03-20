// syntatic sugars sao conceitos bem especificos da linguagem

const numberInString = "12373";

// nao fazer

const numberSugar = +numberInString;

// fazer
const number = Number(numberInString);

// nao fazer
const isNumberNotNullSugar = !!number;

// fazer
const isNumberNotNull = Boolean(number);
