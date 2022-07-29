// step 1: create onload handler

window.onload =()=>{
    main();
};

function main(){

    const root = document.getElementById('root');
    const btn = document.getElementById('btn');

    btn.addEventListener('click', function(){
        const bgColor = rgbColor();
        root.style.backgroundColor = bgColor;
    });
}

// setep 2 random color genarate function
function rgbColor(){
    const rad = Math.round(Math.random()*255);
    const green = Math.round(Math.random()*255);
    const blue = Math.round(Math.random()*255);
    return `rgb(${rad} ${green} ${blue})`;
}
// step 3 collection all neccessary referance











    

   

