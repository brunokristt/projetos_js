//selecionar os elementos com base em seus Ids
const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement =document.querySelector("#message");

//Funções
function convert(){
    //Obter os valores de entrada e saída
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    console.log(inputElement.value)

    if(fromValue === toValue){
        outputElement.value = inputElement.value;
        messageElement.textContent = "";
        return;
    } 

    //Converte a entrada 
    let inputValue;
    let message;
    let inputType;
    let outputType;

    switch (fromValue) {
        //Unidades de distância
        case "m":
            inputValue = inputElement.value;
            inputType = 1;
            break;
        case "km":
            inputValue = inputElement.value * 1000;
            inputType = 1;
            break;
        case "cm":
            inputValue = inputElement.value / 100;
            inputType = 1;
            break;
        case "mm":
            inputValue = inputElement.value / 100;
            inputType = 1;
            break;

        //Unidades de massa    
        case "g":
            inputValue = inputElement.value;
            inputType = 2;
            break;
        case "kg":
            inputValue = inputElement.value * 1000;
            inputType = 2;
            break;
        case "mg":
            inputValue = inputElement.value / 1000;
            inputType = 2;
            break;
    }

    

    //Converter metros para unidade de saída
    let result;
    
    switch (toValue) {
        case "m":
            result = inputValue;
            outputType = 1;
            break;
        case "km":
            result = inputValue / 1000;
            outputType = 1;
            break;
        case "cm":
            result = inputValue * 100;
            outputType = 1;
            break;
        case "mm":
            result = inputValue * 1000;
            outputType = 1;
            break;
        case  "g":
            result = inputValue;
            outputType = 2;
            break;
        case "kg":
            result = inputValue / 1000;
            outputType = 2;
            break;
        case "mg":
            result = inputValue * 1000
            outputType = 2;
            break;
    }

    //pegar a opção de medida selecionada
    const fromLabel = fromElement.options[fromElement.selectedIndex].text;
    const toLabel = toElement.options[toElement.selectedIndex].text;

    if (inputType !== outputType) {
        outputElement.value = "";
        message = `Não é possível converter ${fromLabel} em ${toLabel}.`;        
    } else {
        //Exibir resultado do input
        outputElement.value = result;

        //Criar texto de mensagem
        message = `Resultado da conversão: ${inputElement.value} ${fromLabel} equivalem a  ${result} ${toLabel}. `
    }    

    //Exibir resultado da mensagem
    messageElement.textContent = message;
    return;

    // console.log(fromValue, toValue);
    // console.log(inputValue, result);
    // console.log(fromLabel);

} 

convertButton.addEventListener("click", convert);
