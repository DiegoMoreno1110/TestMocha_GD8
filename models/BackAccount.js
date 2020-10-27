class BackAccount{

    total = 0;
    historial = [];

    constructor(amount){
        this.amount = amount;
        this.total =  amount;
        this.historial.push({depositado: amount});

    }

    getCurrent(){
        console.log('Current amount: ', this.amount );
        return this.amount;

    }

    appendAmount(cantidad){
        this.total += cantidad;

        this.historial.push({depositado: cantidad});

        console.log({total: this.total, historial: this.historial});

        return {total: this.total, historial: this.historial};
    }

    substractAmount(cantidad){

        this.total -= cantidad;
        //var historial = this.historial;

        this.historial.push({retirado: cantidad});

        console.log({total: this.total, historial: this.historial});

        return {total: this.total, historial: this.historial};
    }

    mergeAccount(newAccount){
        if (newAccount.total > 0) {
            // se agrega
            this.total += newAccount.total;
            this.historial = this.historial.concat(newAccount.historial);
            console.log({total: this.total, historial: this.historial});
            return {total: this.total, historial: this.historial};
            
        } else if (newAccount.total <= 0) {
            // se le resta
            this.total -= (-newAccount.total);
            this.historial = this.historial.concat(newAccount.historial);
            console.log({total: this.total, historial: this.historial});
            return {total: this.total, historial: this.historial};

        }

    }

    getHistory(){
        console.log(this.historial);
        return {historial: this.historial};
        
    }
}




module.exports = BackAccount;