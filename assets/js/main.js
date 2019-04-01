// SET INITIAL PAGE TEXT
(function PageTextIIFE(PageText) {
    const text =  `Lets explore <br/>
                   the possibilities of <br/>
                   the web together`;
    let textItem = document.querySelectorAll("#PageText")[0];
    textItem.innerHTML = text;

    document.addEventListener('click', function (event) {
        if (!event.target.matches('.links')) return;
            event.preventDefault();
    
            var attributeName = event.target.attributes.name.value;
            changePage(attributeName,Page,event.target);            
        return false;

    }, false);    
}());

let Page = 'home'
let textObj = {
    home:    `Lets explore <br/>
              the possibilities of <br/>
              the web together`,
    about:   `<span style="color:gold;">What do we do:</span> <br/>
              We build Software Solutions <br/>
              <span style="color:gold;">Our platform:</span><br/>Everything that runs JavaScript<br/>
              <span style="color:gold;">Our Mission:</span><br/>To add an extra layer of awesome to the web`,
    contact: `<span style="color:gold;">Mail:</span>donniethedev@gmail.com<br/>
              <span style="color:gold;">Cell:</span>0747371185<br/>
              <a style="color:gold;text-decoration:none" href="https://www.linkedin.com/in/donovan-van-der-linde-54259012b/" >Linked-In</a><br/>
              <a style="color:gold;text-decoration:none" href="https://www.linkedin.com/in/donovan-van-der-linde-54259012b/" >Facebook</a>`
}
     
// Page Checker:    
function changePageVar(pageName){
    Page = pageName
}

function changePageText(name){
    let textItem = document.querySelectorAll("#PageText")[0];        
    
    fadeOut(textItem);
    
    setTimeout(function(){
        textItem.innerHTML = name;
        fadeIn(textItem);
    },400)    
}

// This function will call all the functions related to the page change
function changePage(name, PageState,element){  
    let isActive = document.querySelectorAll(".active")[0];
   
    if(isActive.attributes.name.value === name){
        return false;
    }else{
        isActive.classList.remove('active');
        element.classList.add('active');
        changePageText(textObj[name])
        PageState === name ? "false" : changePageVar(name);
    }    
};

function fadeOut(el){
    el.style.opacity = 1;

    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
        return false;
        } else {
        requestAnimationFrame(fade);
        }
    })();
};
  
function fadeIn() {
var el = document.getElementById("PageText");
var op = parseFloat(el.style.opacity);

var timer = setInterval(function () {
    console.log('here');
    if(op >= 1.0)
        clearInterval(timer);

    op += 0.1;
    el.style.opacity = op;
}, 50);
}
