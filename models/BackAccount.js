class BackAccount{

    total = 0;
    historial = [];

    constructor(amount){
        this.amount = amount;
        this.total =  amount;
        this.historial.push({depositado: amount});

    }

    getCurrent(){
    }

    appendAmount(cantidad){
    }

    substractAmount(cantidad){
    }

    mergeAccount(newAccount){
    }

    getHistory(){
    }
    
}




module.exports = BackAccount;