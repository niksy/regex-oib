/* jshint mocha:true */

var assert = require('assert');
var re = require('../');

function test ( val ) {
	return re().test(val);
}

function match ( val ) {
	return re().exec(val);
}

it('should have 11 digits', function () {
	assert.ok(test('12345678901'));
	assert.ok(!test('123456789011'));
});

it('should validate number with "HR" as preceding value', function () {
	assert.ok(test('HR12345678901'));
	assert.ok(!test('H12345678901'));
	assert.ok(!test('HR123456789011'));
});

it('should have proper match groups', function () {
	assert.equal(match('HR12345678901')[0], 'HR12345678901');
	assert.equal(match('HR12345678901')[1], '12345678901');
	assert.equal(match('HR12345678901')[2], '1');
	assert.equal(match('12345678901')[0], '12345678901');
	assert.equal(match('12345678901')[1], '12345678901');
	assert.equal(match('12345678901')[2], '1');
});

it('should return null if match is not found', function () {
	assert.equal(match('HR123456789011'), null);
	assert.equal(match('123456789011'), null);
});
