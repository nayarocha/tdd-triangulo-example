'use strict';

var assert = require('assert');
var trian = require('./triangulo.js')

describe('Trian', function(){
	it('forma triangulo',function(){
		assert.equal(true,trian.formaTriangulo(3,4,5))
		assert.equal(true,trian.formaTriangulo(5,10,9))
	});

	it('forma triangulo - mutant 1',function(){
		assert.equal(true,trian.mutant1formaTriangulo(3,4,5))
		assert.equal(true,trian.mutant1formaTriangulo(5,10,9))
	});

	it('forma triangulo - mutant 2',function(){
		assert.equal(true,trian.mutant2formaTriangulo(3,4,5))
		assert.equal(true,trian.mutant2formaTriangulo(5,10,9))
	});
	//-----------------------------------------------------------
	it('é escaleno',function(){
		assert.equal(true,trian.escaleno(3,4,5))
	});

	it('é escaleno - mutant 1',function(){
		assert.equal(true,trian.mutant1escaleno(3,4,5))
	});

	it('é escaleno - mutant 2',function(){
		assert.equal(true,trian.mutant2escaleno(3,4,5))
	});

	//---------------------------------------------------------------
	it('é isosceles',function(){
		assert.equal(true,trian.isosceles(3,3,5))
		assert.equal(true,trian.isosceles(3,5,3))
		assert.equal(true,trian.isosceles(3,5,3))
	});

	it('é isosceles - mutant 1',function(){
		assert.equal(true,trian.mutant1isosceles(3,3,5))
		assert.equal(true,trian.mutant1isosceles(3,5,3))
		assert.equal(true,trian.mutant1isosceles(3,5,3))
	});

	it('é isosceles - mutant 2',function(){
		assert.equal(true,trian.mutant2isosceles(3,3,5))
		assert.equal(true,trian.mutant2isosceles(3,5,3))
		assert.equal(true,trian.mutant2isosceles(3,5,3))
	});

	//-------------------------------------------------------------------

	it('é equilatero',function(){
		assert.equal(true,trian.equilatero(4,4,4))
		assert.equal(true,trian.equilatero(3,5,3))
		assert.equal(true,trian.equilatero(3,5,3))
	});

	it('é equilatero - mutant 1',function(){
		assert.equal(true,trian.mutant1equilatero(4,4,4))
		assert.equal(true,trian.mutant1equilatero(3,5,3))
		assert.equal(true,trian.mutant1equilatero(3,5,3))
	});

	it('é equilatero - mutant 2',function(){
		assert.equal(true,trian.mutant2equilatero(4,4,4))
		assert.equal(true,trian.mutant2equilatero(3,5,3))
		assert.equal(true,trian.mutant2equilatero(3,5,3))
	});
	
})