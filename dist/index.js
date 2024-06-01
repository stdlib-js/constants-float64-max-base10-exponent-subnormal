/** @license Apache-2.0 */

'use strict';

/**
* The maximum base 10 exponent for a subnormal double-precision floating-point number.
*
* @module @stdlib/constants-float64-max-base10-exponent-subnormal
* @type {integer32}
*
* @example
* var FLOAT64_MAX_BASE10_EXPONENT_SUBNORMAL = require( '@stdlib/constants-float64-max-base10-exponent-subnormal' );
* // returns -308
*/


// MAIN //

/**
* The maximum base 10 exponent for a subnormal double-precision floating-point number.
*
* ```text
* 2^-1023 = 1.1125369292536007e-308 => -308
* ```
*
* @constant
* @type {integer32}
* @default -308
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT64_MAX_BASE10_EXPONENT_SUBNORMAL = -308|0; // asm type annotation


// EXPORTS //

module.exports = FLOAT64_MAX_BASE10_EXPONENT_SUBNORMAL;
