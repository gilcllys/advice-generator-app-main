const URL_api = 'https://api.adviceslip.com/advice'

let frase = document.getElementsByTagName('h1')[0]
let codigo = document.getElementsByTagName('p')[0]
let container = document.getElementById('phrases')
let btn = document.getElementById('btn')

function ConsumeApi(URL){
    fetch(URL)
        .then(res => {
            return res.json()
        })
        .then(dado =>{
            let id = String(dado.slip.id)
            let advice = String(dado.slip.advice)
            CreateEmelent(id,advice)   
        })
        
        
    }
    
function CreateEmelent(id,advice){
        // creating a tag h2
        const code = document.createElement('h2')
        //adding the text to the tag h2
        code.innerHTML= "ADVICE"+ ""+ "#" +String(id)

        // creating a tag h1
        const quote = document.createElement('p')
        //adding the text to the tag h1
        quote.innerHTML= "\"" + String(advice) + "\""

        //appending the elements that were created
        container.appendChild(code)
        container.appendChild(quote)
}
ConsumeApi(URL_api)
//add a event to reload all the page
btn.addEventListener('click',()=> document.location.reload(true))



