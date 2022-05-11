'use strict'
/* eslint-env mocha */
/* eslint no-proto: 0 */
const assert = require('assert')
const setPrototypeOf = require('..')

describe('setProtoOf(obj, proto)', function () {
    it('should merge objects', function () {
        let obj = { a: 1, b: 2 }
        let proto = { b: 3, c: 4 }
        let mergeObj = setPrototypeOf(obj, proto)

        if (Object.getPrototypeOf) {
            assert.strictEqual(Object.getPrototypeOf(obj), proto)
        } else if ({ __proto__: [] } instanceof Array) {
            assert.strictEqual(obj.__proto__, proto)
        } else {  
            assert.strictEqual(obj.a, 1)
            assert.strictEqual(obj.b, 2)
            assert.strictEqual(obj.c, 4)
        }
        assert.strictEqual(mergeObj, obj)
    })
})
