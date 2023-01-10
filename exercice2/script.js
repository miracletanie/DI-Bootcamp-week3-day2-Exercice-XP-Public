
const divHeader = document.createElement('div')
divHeader.id='header'


divHeader.style.textAlign='center'


document.body.appendChild(divHeader)


const title = document.createElement('h1')
    title.innerHTML = 'Animation avec un paragraphe'
    divHeader.appendChild(title)


    
const divContainer = document.createElement('div')
divContainer.className='container'


document.body.appendChild(divContainer)


const paragra = document.createElement('p')
    paragra.setAttribute('draggable','true')
    paragra.id='box'
    paragra.innerHTML='Je suis un paragraphe et tu peux me faire deplacer'

    divContainer.appendChild(paragra)

            const divContainerCss = document.querySelector('.container')
            divContainerCss.style.overflow = 'hidden'
            divContainerCss.style.textAlign = 'center'
            const paragraBox = document.querySelector('#box')
            paragraBox.style.padding = '20px'
            paragraBox.style.fontSize = '20px'
            paragraBox.style.display = 'inline-block'
            paragraBox.style.backgroundColor = 'red'
            paragraBox.style.color = 'white'

            
function handleStart(e) {
    
    
    e.target.style.fontSize = '50px';
}



function handleEnd(e) {
    
    
    e.target.style.fontSize = '20px';

    let _x = e.clientX;
    let _y = e.clientY;

    e.target.style.left = _x + "px";
    e.target.style.top = _y + "px";
    
    e.target.style.position = "absolute";
}

let element = document.getElementById("box");


element.addEventListener("dragstart", handleStart);


element.addEventListener("dragend", handleEnd);

