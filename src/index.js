import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.css'
import './main.css';
import data from '../adatok.json'
console.log('loaded')


let inputField = document.getElementById('inputField');
let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');
let result3 = document.getElementById('result3');
inputField.addEventListener('input', ()=>{
    let inputFieldValue = inputField.value;
    if(inputFieldValue.length >= 3){
        search(inputFieldValue);
    }
    console.log('inputField value changed');
    

});

function search(value){
    let results = [];
    value = value.toString().toLowerCase();
    for(let i = 0; i<data.length; i++){
        if(data[i].nev.toLowerCase().includes(value)){
            //console.log(data[i].nev)
            results.push(data[i].nev);
        }
    }
    console.log(results);
    showResults(results);
}

function showResults(results){
    
    result1.value = '';
    result2.value = '';
    result3.value = '';

    for(let i = 0; i < results.length; i++){
        
    }

}


document.addEventListener('DOMContentLoaded', ()=>{

console.log(data[1].meret)

});