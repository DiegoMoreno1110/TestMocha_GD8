const assert = require('assert');
const Vector = require('../models/Vector');
const OperacionesVector = require('../models/OperacionesVector');
const BackAccount = require('../models/BackAccount');



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

describe('BankAccount', () => {
    
    describe('Current banck account', () => {
        it('Regresa el salgo correcto ', () => {
            
            let account = new BackAccount(300);
            assert.deepEqual( 300, account.getCurrent() );
        })

    });   
    
    describe('Append account', () => {
        it('Agrega cantidad correctamente ', () => {
            
            let account = new BackAccount(300);
            assert.deepEqual( {total: 600, historial: [{depositado: 300}, {depositado: 300}]}, account.appendAmount(300) );
        })

    }); 
    
    describe('Susbtract account', () => {
        it('Retira cantidad correctamente ', () => {
            
            let account = new BackAccount(300);
            assert.deepEqual({total: 200, historial: [{depositado: 300}, {retirado: 100}]}, account.substractAmount(100) );
        })

    });

    describe('Merge account', () => {
        it('Merge correctamente valores positivos ', () => {
            
            let accountA = new BackAccount(300);
            let accountB = new BackAccount(300);
            assert.deepEqual( {total: 600, historial: [{depositado: 300}, {depositado: 300}] }, accountA.mergeAccount(accountB));
        })

        it('Merge correctamente valores negativos ', () => {
            
            let accountA = new BackAccount(300);
            let accountB = new BackAccount(-100);
            assert.deepEqual( {total: 200, historial: [{depositado: 300}, {depositado: -100}] }, accountA.mergeAccount(accountB));
        })

    });

    describe('Historial account', () => {
        it('Historial correctamente ', () => {
            
            let account = new BackAccount(300);
            account.appendAmount(300);
            assert.deepEqual({historial: [{depositado: 300}, {depositado: 300}]}, account.getHistory());
        })

    });
});

