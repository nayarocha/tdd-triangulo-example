var assert = require ('assert');
function formaTriangulo(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    	if (this.a < (this.b + this.c)) {
            if (this.b < (this.a + this.c)) {
                if (this.c < (this.a + this.b)) {
                    return true;
                }
            }
        }
        return false;    
};

function mutant1formaTriangulo(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    	if (this.a > (this.b - this.c)) {
            if (this.b > (this.a - this.c)) {
                if (this.c < (this.a + this.b)) {
                    return true;
                }
            }
        }
        return false;    
};

function mutant2formaTriangulo(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    	if (this.a > (this.b + this.c)) {
            if (this.b > (this.a + this.c)) {
                if (this.c > (this.a + this.b)) {
                    return true;
                }
            }
        }
        return false;    
};


function escaleno(a,b,c){
	this.a = a;
    this.b = b;
    this.c = c;

    if((this.a != this.b) && (this.a != this.c) && (this.b != this.c)){
    	return true;
    }else{
    	return false;
    }
};


function mutant1escaleno(a,b,c){
	this.a = a;
    this.b = b;
    this.c = c;
    //modificando sinal de != por == na 1 verificação
    if((this.a == this.b) && (this.a != this.c) && (this.b != this.c)){
    	return true;
    }else{
    	return false;
    }
};

//mutante sobrevivente
function mutant2escaleno(a,b,c){
	this.a = a;
    this.b = b;
    this.c = c;
    //modificando sinal de && por || 
    if((this.a != this.b) && (this.a != this.c) || (this.b != this.c)){
    	return true;
    }else{
    	return false;
    }
};

function isosceles(a,b,c){
	this.a = a;
    this.b = b;
    this.c = c;

    if((this.a == this.b) || (this.b == this.c) || (this.a == this.c)){
    	return true;
    }else{
    	return false;
    }
};


function mutant1isosceles(a,b,c){
	this.a = a;
    this.b = b;
    this.c = c;

    if((this.a != this.b) || (this.b == this.c) || (this.a == this.c)){
    	return true;
    }else{
    	return false;
    }
};

function mutant2isosceles(a,b,c){
	this.a = a;
    this.b = b;
    this.c = c;

    if((this.a == this.b) && (this.b == this.c) || (this.a == this.c)){
    	return true;
    }else{
    	return false;
    }
};



function equilatero(a,b,c){
	this.a = a;
    this.b = b;
    this.c = c;

    if( (this.a == this.b) && (this.b == this.c) && (this.a == this.c) ){
    	return true;
    }else{
    	return false;
    }
};

function mutant1equilatero(a,b,c){
	this.a = a;
    this.b = b;
    this.c = c;

    if( (this.a != this.b) && (this.b == this.c) && (this.a == this.c) ){
    	return true;
    }else{
    	return false;
    }
};


function mutant2equilatero(a,b,c){
	this.a = a;
    this.b = b;
    this.c = c;

    if( (this.a == this.b) || (this.b == this.c) && (this.a == this.c) ){
    	return true;
    }else{
    	return false;
    }
};

module.exports.formaTriangulo = formaTriangulo;
module.exports.escaleno = escaleno;
module.exports.isosceles = isosceles;
module.exports.equilatero = equilatero;
module.exports.mutant1formaTriangulo = mutant1formaTriangulo;
module.exports.mutant2formaTriangulo = mutant2formaTriangulo;
module.exports.mutant1escaleno = mutant1escaleno;
module.exports.mutant2escaleno = mutant2escaleno;
module.exports.mutant1isosceles = mutant1isosceles;
module.exports.mutant2isosceles = mutant2isosceles;
module.exports.mutant1equilatero = mutant1equilatero;
module.exports.mutant2equilatero = mutant2equilatero;