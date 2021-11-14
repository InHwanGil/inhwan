// -------------------------------------------------
// 05. 유틸리티
// -------------------------------------------------
// - isUndefined()
// - isNull()
// - isNothing()
// - isString()
// - isNumber()
// - isNaN()
// - isBoolean()
// - isFunction()
// - isArray()
// - isObject()
// - isDate()
// - makeArray()
// -------------------------------------------------

const isNull = (data) => data === null;
const isNothing = (data) => isUndefinde(data) || isNull(data);
const isString = (data) => typeof data === 'string';
const isNumber = (data) => typeof data === "number" && !isNaN(data);
const isDate = (data) => data.constructor === Date;