'use strict'

const mixin = require('xprezzo-mixin');

/* eslint no-proto: 0 */
module.exports = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? setProtoOf : mixin)
module.exports.mixin = mixin;

let setProtoOf = (obj, proto) => {
    obj.__proto__ = proto
    return obj
}
