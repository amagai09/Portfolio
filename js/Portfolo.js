'use strict';
const cover1= document.getElementById('cover1');
const cover2= document.getElementById('cover2');
const cover3= document.getElementById('cover3');
const cover4= document.getElementById('cover4');

cover1.addEventListener('mouseover',()=>{
    cover1.className='selecting';
})
cover1.addEventListener('mouseleave',()=>{
    cover1.className="";
})

cover2.addEventListener('mouseover',()=>{
    cover2.className='selecting';
})
cover2.addEventListener('mouseleave',()=>{
    cover2.className="";
})

cover3.addEventListener('mouseover',()=>{
    cover3.className='selecting';
})

cover3.addEventListener('mouseleave',()=>{
    cover3.className="";
})

cover4.addEventListener('mouseover',()=>{
    cover4.className='selecting';
})
cover4.addEventListener('mouseleave',()=>{
    cover4.className="";
})