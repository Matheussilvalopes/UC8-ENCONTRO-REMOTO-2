let ListaAlunos= ["Maria","João", "André","Marcos", "Rafael"]

for (let contador = 0; contador<ListaAlunos.length; contador++){
   
    //contador % 2==0 é PAR
    //contador % 2==1 é IMPAR
    
    if (contador==0) {
    //Usa-se a crase para inserir variáveis dentro do texto
        console.log(`O aluno ${ListaAlunos[contador]} é o número ${contador} e é ZERO!`)
    }else if (contador % 2 == 0) {
        console.log(`O aluno ${ListaAlunos[contador]} é o número ${contador} e é PAR!`)
    }else if (contador % 2 == 1 ){
    //Usa-se as aspas com sinal de mais para inserir variáveis no texto
        console.log("O aluno "+ ListaAlunos[contador] + " é o número "+ contador +" e é IMPAR!")
    }
}

//Código para fazer uma contagem regressiva

//for (let contador = 4; contador>0; contador--){

    //if (contador==0) {
        //console.log(`O aluno ${ListaAlunos[contador]} é o número ${contador} e é ZERO!`)
    //}else if (contador % 2 == 0) {
        //console.log(`O aluno ${ListaAlunos[contador]} é o número ${contador} e é PAR!`)
    //}else if (contador % 2 == 1 ){
        //console.log("O aluno "+ ListaAlunos[contador] + " é o número "+ contador +" e é IMPAR!")
   // }
//}
