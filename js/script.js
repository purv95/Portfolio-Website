const text = document.querySelector(".fancy");
const strText = text.textContent;
const spiltText = strText.split("");
text.textContent = "";

for(let i = 0; i < spiltText.length; i++) {
    text.innerHTML += "<span>" + spiltText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 550);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === spiltText.length){
        complete();
        return;
    }
}
