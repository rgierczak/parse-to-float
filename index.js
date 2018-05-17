'use strict';

/**
 * Helper which checks if the value exists.
 * We do not use external package, because of helper's simplicity.
 *
 * @param {boolean} value - Check condition.
 * @param {string} message - Additional message.
 */
function assert(value, message) {
    if (!value) {
        throw new Error(message || 'Assertion error');
    }
}

/**
 * Helper allows to parse the parameter value to float, with provided precision.
 * As the toFixed function returns the string type, it is necessary to convert
 * from string to number.
 *
 * @param {number|string} expression - Expression to convert.
 * @param {number} [precision=2] - List of digits after dot.
 * @returns {number}
 */
function parseToFloat(expression, precision) {
    assert(typeof expression === 'number', 'expression is not a number');

    precision = precision || 2;
    assert(typeof precision === 'number', 'precision is not a number');

    return Number(parseFloat(expression).toFixed(precision));
}

// Export CommonJS
if (typeof module !== 'undefined' && module.exports) {
    module.exports = parseToFloat;
}

// Export AMD
else if (typeof define !== 'undefined' && define.amd) {
    define('parse-to-float', function () {
        return parseToFloat;
    });
}

// Export global
else if (typeof window !== 'undefined') {
    window.parseToFloat = parseToFloat;
}
