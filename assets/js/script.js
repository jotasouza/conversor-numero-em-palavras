//DEFININDO O NUMERO LIMITE
let numberLimit = 1000

let numberText  = ''

//PEGANDO OS ELEMENTOS DO HTML
let input       = document.getElementById('numberInput')
let button      = document.getElementById('buttonConvert')
let p           = document.getElementById('paragraph')

//FUNCÇÃO QUE RECEBE OS NUMEROS, FAZ UMA VERIFICAÇÃO E CHAMA AS FUNÇÕES DE CONVERSÃO
function convertNumberToWords(numbers){
   let numberAbsolute = Math.abs(numbers)
    
   try {
       if(numbers > numberLimit){
           throw 'Número informado é muito grande. Deve ser menor ou igual a ' + numberLimit
       }
   } catch (error) {
       alert(error)
       input.value = ''
       return 'Error'
   }
   //verifica se o número informado é negativo
   if(numbers.toString().includes('-') && numberAbsolute != 0){
       numberText += 'número negativo não pode ser convertido no momento.'
       return numberText
   }

   /*verificações para chamada das funções
   if(numberAbsolute in unidades){
       numberText += unidades[numberAbsolute]
   }else if(numberAbsolute < 100){
       numberText += numbersTwoDigitConverterOrLess(numberAbsolute)
   }else{
       let numberArr = numberAbsolute.toString().split()
   }*/
   

  return numbersThreeDigitConverter(numberAbsolute)
    
}

//FUNÇÃO QUE CONVERTE NÚMEROS COM 3 DIGITOS
function numbersThreeDigitConverter(num){

    let currentNumberText = ''
    //verifica se o número de 3 digitos for apenas zeros seguidos
    //não retorna nada, porque não é um número
    if(num == 0){
        return ''
    }

    //verifica se o número informado é menor que 100 e envia para a função 
    //que trabalha com 2 digitos, posteriormente retornando o resultado
    if(num < 100){
        currentNumberText += numbersTwoDigitConverterOrLess(num)
        return currentNumberText
    }

   // currentNumberText += unidades[num.toString().charAt(0)]
    if(num > 100 && num < 200){
        currentNumberText += 'cento e '
    }

    if(num > 200 && num < 300){
       currentNumberText += 'duzentos e '
    }

    if(num > 300 && num < 400){
       currentNumberText += 'trezentos e '
    }

    if(num > 400 && num < 500){
        currentNumberText += 'quatrocentos e '
    }

    if(num > 500 && num < 600){
        currentNumberText += 'quinhentos e '
    }

    if(num > 600 && num < 700){
        currentNumberText += 'seiscentos e '
    }

    if(num > 700 && num < 800){
        currentNumberText += 'setecentos e '
    }

    if(num > 800 && num < 900){
        currentNumberText += 'oitocentos e '
    }

    if(num > 900 && num < 1000){
        currentNumberText += 'novecentos e '
    }

    if(num == numberLimit ){
        currentNumberText += 'mil'
       
    }

    
    //verifica se os dois ultimos digitos não são zeros, então converte eles
    if(num.toString().substr(1) !== '00'){
        currentNumberText += numbersTwoDigitConverterOrLess(parseInt(num.toString().substr(1)))
    }

    return currentNumberText

}

//FUNÇÃO QUE CONVERTE NÚMEROS COM 2 DIGITOS OU MENOS
function numbersTwoDigitConverterOrLess(num){

    let currentNumberText = ''
    
    if(num < 10){
        return unidades[num]
    }

    if(num in dezenas){
        currentNumberText += dezenas[num]
    }else{
        //trata primeiro qualquer prefixo de 20 a 99 - O 0 faz referencia ao primeiro digito
        //em seguida ele pega o que se relaciona com o primeiro digito no objeto prefixo
        //e adiciona a frente do texto atual
        currentNumberText += prefixos[num.toString().charAt(0)]

        //depois, se o ultimo digito não for 0 - ex: 40, 50, 60 - ele vai para o objeto unidade
        //e adiciona a palavra correspondente
        if(num.toString().charAt(1) !== '0'){
            currentNumberText += ' e ' + unidades[num.toString().charAt(1)]
        }
    }
    return currentNumberText
}

//CHAMA O EVENTO DO BOTÃO PARA FAZER A CONVERSÃO
button.addEventListener('click', convertEvent)

//FUNÇÃO QUE FAZ A CONVERSÃO
function convertEvent(e){
    e.preventDefault()
    numberText = convertNumberToWords(input.value)
    showNumberConverted(numberText)
}

//MOSTRA O RESULTADO NA TELA
function showNumberConverted(word){
   p.innerText = `Número convertido: ${word}`
}