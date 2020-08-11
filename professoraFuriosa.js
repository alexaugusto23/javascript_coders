    function acontece(estudantes, minAluno) {
        var quantidade = 0; 
        for(var i = 0; i < estudantes.length; i++) {
            if(estudantes[i] <= 0) { 
                quantidade = quantidade + 1;
            }
        }
        return quantidade >= minAluno;
    }
    
    function aberturas(dias, minAluno) {
        var respostas = []; 
        for(var i = 0; i < dias.length; i++) {
            respostas[i] = acontece(dias[i], minAluno);
        }
        return respostas;
    }