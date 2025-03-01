function randomColor(){
    const r=Math.floor(Math.random() * 256);
    const g=Math.floor(Math.random() * 256);
    const b=Math.floor(Math.random() * 256);
    const color='rgb('+ r +','+ g +','+ b +')';
    return color;
}
console.log( randomColor());
const themeBtn=document.getElementById('theme-btn');

themeBtn.addEventListener('click',function(){
    document.documentElement.style.backgroundColor=randomColor();
});
