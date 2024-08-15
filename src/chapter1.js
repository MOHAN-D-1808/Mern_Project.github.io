import { createElement } from 'react';

import './chapter.css';
import Quiz from './quiz.js'
import { Link } from 'react-router-dom';
let bo1=true
let bo2=true
let bo3=true
let c1=0;
function Chapt1()
{
    document.getElementById("main").innerHTML=`<img src="https://i.pinimg.com/736x/e0/bb/1f/e0bb1f806ebf155e29bab3c77bbee257.jpg">`;
    
}
function Chapt2()
{
    document.getElementById("main").innerHTML=`<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioyaeW731ZJdp5WOeK2KzCJRTYu7Me5O3F3jVoBBYlmrDEiotJVBeJF8sK-Sm6w5pHu46-MrAEjpC8UOr2yNEW1wmgB_6NTZLABq9kHheBUKBEMu2Llroadf2gZT8qM6eU9F1aA4jviW6YElC2st5h7wV0PwXOJjYWpWHyrEyjjoNYgzfYyNww1y77/s892/English%20Words%20-%2050.png">`;
    
}
function Story1()
{
    document.getElementById("main").innerHTML=`<img src="https://i.pinimg.com/236x/30/7c/ba/307cba931e62b44a065b4ccf0b60d715.jpg">`;
    
}
function Story2()
{
    document.getElementById("main").innerHTML=`<img src="https://i.pinimg.com/736x/32/5f/99/325f991083b5220b5d4158af5e235474.jpg">`;
    
}

let arr=['அ','ஆ','இ','ஈ','உ','ஊ','எ','ஏ','ஐ','ஒ','ஓ','ஔ']
let arr1=['a','aa','i','ii','u','uu','e','ee','ai','o','oo','au'];
let co=0;

function Get()
{
    let valt=document.getElementById("in");
    if(c1<11)
    {
    if(valt.value===arr1[c1])
    {
    co++;
    }
    c1++;
    App1();
    }
    else{
        console.log(document.getElementById("main"))
        document.getElementById("main").innerHTML=`<h1>Your score is ${co}</h1>`
        document.getElementById("main").style.color="white"
        document.getElementById("main").style.textAlign="center"
    }
}
function App1()
{
    document.getElementById("main").innerHTML="";
    let para=document.createElement("p");
    let p1=document.createElement("p")
    p1.innerHTML= `<div>
    <h2 style="color:white">${arr[c1]}</h2>
    <input
    type="text" id="in"
    placeholder="Enter pronunciation"
    />
    </div>`
    let but=document.createElement("button")
    para.appendChild(p1);
    para.appendChild(but);
    but.innerText="submit"
    if(c1<13)
    {
    but.onclick=Get;
    document.getElementById("main").appendChild(para)
    }
}
function Quiz1()
{

}
function chap1(){
    if(bo1)
    {
        let alp = document.createElement("p");
        let alpButton = document.createElement("button");
        alpButton.innerText = "Alphabets";
        alpButton.onclick = Chapt1;
        alp.appendChild(alpButton);
        document.getElementById("chap2").appendChild(alp);
    let no=document.createElement("p")
    no.innerHTML=`<a href="https://www.tamilvu.org/coresite/download/ABC_Tamil.pdf" target="_blank"><button>  >notes</button></a>`
    no.style.color="white"
    no.style.listStyleType="none"
    document.getElementById("chap2").appendChild(no);
    let vo=document.createElement("p")
     vo.innerHTML=`<a href="https://www.youtube.com/watch?v=U1HG8fiozdw" target="_blank"><button>vedios</button></a>`
    document.getElementById("chap2").appendChild(vo);
    let q=document.createElement("p")
    let alp1Button = document.createElement("button");
    alp1Button.innerText = "quiz";
    alp1Button.onclick = App1;
    q.appendChild(alp1Button);
    document.getElementById("chap2").appendChild(q);
    bo1=false
}
else{
    document.getElementById("chap2").innerHTML="";
    bo1=true;
}
}
function chap2()
{
    if(bo2)
        {
            let alp = document.createElement("p");
            let alpButton = document.createElement("button");
            alpButton.innerText = "Words";
            alpButton.onclick = Chapt2;
            alp.appendChild(alpButton);
            document.getElementById("chap4").appendChild(alp);
        let no=document.createElement("p")
        no.innerHTML=`<a href="https://www.tamilvu.org/coresite/download/ABC_Tamil.pdf" target="_blank"><button>  >notes</button></a>`
        no.style.color="white"
        no.style.listStyleType="none"
        document.getElementById("chap4").appendChild(no);
        let vo=document.createElement("p")
         vo.innerHTML=`<a href="https://www.youtube.com/watch?v=U1HG8fiozdw" target="_blank"><button>vedios</button></a>`
        document.getElementById("chap4").appendChild(vo);
        let q=document.createElement("p")
        let alp1Button = document.createElement("button");
        alp1Button.innerText = "quiz";
        alp1Button.onclick = App1;
        q.appendChild(alp1Button);
        document.getElementById("chap4").appendChild(q);
        bo2=false
    }
    else{
        document.getElementById("chap4").innerHTML="";
        bo2=true;
    }
}
function chap3()
{
    if(bo3)
        {
            let alp = document.createElement("p");
            let alpButton = document.createElement("button");
            alpButton.innerText = "Story 1";
            alpButton.onclick = Story1;
            let alp1 = document.createElement("p");
            let alp1Button = document.createElement("button");
            alp1Button.innerText = "Story 1";
            alp1Button.onclick = Story1;
            alp1.appendChild(alp1Button);
            let alp2 = document.createElement("p");
            let alp2Button = document.createElement("button");
            alp2Button.innerText = "Story 2";
            alp2Button.onclick = Story2;
            alp2.appendChild(alp2Button);
            document.getElementById("chap6").appendChild(alp1);
            document.getElementById("chap6").appendChild(alp2);
        let no=document.createElement("p")
        no.innerHTML=`<a href="https://www.tamilvu.org/coresite/download/ABC_Tamil.pdf" target="_blank"><button>  >notes</button></a>`
        no.style.color="white"
        no.style.listStyleType="none"
        document.getElementById("chap6").appendChild(no);
        let vo=document.createElement("p")
        vo.innerHTML=`<a href="https://www.youtube.com/watch?v=U1HG8fiozdw" target="_blank"><button>vedios</button></a>`
        document.getElementById("chap6").appendChild(vo);
        let q=document.createElement("p")
        let alp21 = document.createElement("button");
        alp21.innerText = "quiz";
        alp21.onclick = App1;
        q.appendChild(alp21);
        document.getElementById("chap6").appendChild(q);
        bo3=false
    }
    else{
        document.getElementById("chap6").innerHTML="";
        bo3=true;
    }
}
function Chapter1()
{ 
    return(
        <div id="mrt">
            <div id="navi">
        <div id='imt'>
        <img id='naviimg' src='https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/primary-language-image-2_ver_1.png' height={100}></img>
        <marquee><h1 id="lan">Languages
      </h1>
      </marquee>
      </div>
        <div id="cour">
        <Link to="/"><h2>Home</h2></Link>
        <Link to="/course"><h2>Courses</h2></Link>
      </div>
      </div>
        <div id="tot">
        <div id="cht">
        <div id="chap1">
            <div id="chap1s">
        <button onClick={chap1}>CHAPTER1</button>
        <div id="chap2"></div></div>
        </div>
        <div id="chap3">
            <div id="chap3s">
        <button onClick={chap2}>CHAPTER2</button>
        <div id="chap4"></div></div>
        </div>
        <div id="chap5">
            <div id="chap4s">
        <button onClick={chap3}>CHAPTER3</button>
        <div id="chap6"></div></div>
        </div>

        </div>
        <div id="main"  ></div>
        </div>
        </div>
    )

}

export default Chapter1;