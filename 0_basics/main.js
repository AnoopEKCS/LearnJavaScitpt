const source = document.getElementById("source");
const textContentOutput = document.getElementById("textContentOutput");
const innerTextOutput = document.getElementById("innerTextOutput");
const editableContent = document.getElementById("editableContent");
//for btn
const refreshButton = document.getElementById("refreshButton");

function updateOutputs() {
    textContentOutput.value = editableContent.textContent; //.textContent not support css
    innerTextOutput.value = source.innerText; //.innerText support css

   //source.textContent = 'Source Content can be change here directly';
   editableContent.textContent = source.textContent;
}

updateOutputs();
refreshButton.addEventListener('click', updateOutputs);
