const assert = require('assert');
const Vector = require('../models/Vector');
const OperacionesVector = require('../models/OperacionesVector');



describe('Vector Calculator', () => {
    
    describe('Suma de vectores a y b', () => {
        it('La suma de vectores es correcta', () => {
            
            let vectorA = new Vector(3, 5);
            let vectorB = new Vector(1, 2);
            let operacionesVector = new OperacionesVector(vectorA, vectorB);

        
            assert.deepEqual({x: 4 , y: 7}, operacionesVector.getSuma() );
        })

    });   
    
    describe('Resta de vectores a y b', () => {
        it('La resta de vectores es correcta', () => {
            
            let vectorA = new Vector(3, 5);
            let vectorB = new Vector(1, 2);
            let operacionesVector = new OperacionesVector(vectorA, vectorB);

        
            assert.deepEqual({x: 2 , y: 3}, operacionesVector.getSub() );
        })

    });

    describe('Escalar de vectores a y b', () => {
        it('Escalar vector es correcta', () => {
            
            let vectorA = new Vector(3, 5);
            let escala = 2;
            let operacionesVector = new OperacionesVector(vectorA, escala);

        
            assert.deepEqual({x: 6, y: 10}, operacionesVector.getScalar() );
        })

    });

    describe('Producto punto de vectores a y b', () => {
        it('Producto punto de vectores es correcta', () => {
            
            let vectorA = new Vector(3, 5);
            let vectorB = new Vector(1, 2);
            let operacionesVector = new OperacionesVector(vectorA, vectorB);

        
            assert.deepEqual(13, operacionesVector.getDot() );
        })

    });


})