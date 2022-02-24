function soma(numero1, numero2){
        const total = numero1 + numero2
        console.log(total);
        return total;
    };
    function podeTirarCarteira(iade) {
        if(idade < 18) {
            return 'Pessoa menor de idade. Infelizmente não é possivel tirar a CNH!'
        }else {
            return 'Opa, pode tirar a CNH!'
        }
    }


console.log(podeTirarCarteira)