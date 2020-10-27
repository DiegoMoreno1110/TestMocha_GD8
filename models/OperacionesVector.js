const Vector = require('../models/Vector');

class OperacionesVector{

    constructor(vectorA, vectorB ){
        this.vectorA =  vectorA;
        this.vectorB =  vectorB;
    }

    
    getSuma(){
        var sumaX = this.vectorA.getX() + this.vectorB.getX();
        var sumaY = this.vectorA.getY() + this.vectorB.getY();

        console.log({x: sumaX, y: sumaY});

        return {x: sumaX, y: sumaY};
    }

    getSub(){
        var restaX = this.vectorA.getX() - this.vectorB.getX();
        var restaY = this.vectorA.getY() - this.vectorB.getY();
        
        console.log({x: restaX, y: restaY});

        return {x: restaX, y: restaY};

    }

    getScalar(){
        var escalarX = this.vectorA.getX() * this.vectorB;
        var escalarY = this.vectorA.getY() * this.vectorB;

        console.log({x: escalarX, y: escalarY});

        return {x: escalarX, y: escalarY};
        
    }

    getDot(){
        var productoPunto = (this.vectorA.getX() * this.vectorB.getX()) + (this.vectorA.getY() * this.vectorB.getY());

        console.log("Producto punto: ", productoPunto )

        return productoPunto;

    }
}


module.exports = OperacionesVector;