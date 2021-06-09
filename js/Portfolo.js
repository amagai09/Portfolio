//ナビゲーションメニューバーを操作時に、選択中の項目を暗転させる
'use strict';
const cover1= document.getElementById('cover1');
const cover2= document.getElementById('cover2');
const cover3= document.getElementById('cover3');
const cover4= document.getElementById('cover4');

cover1.addEventListener('mouseover',()=>{
    cover1.className='Selecting';
})
cover1.addEventListener('mouseleave',()=>{
    cover1.className="";
})

cover2.addEventListener('mouseover',()=>{
    cover2.className='Selecting';
})
cover2.addEventListener('mouseleave',()=>{
    cover2.className="";
})

cover3.addEventListener('mouseover',()=>{
    cover3.className='Selecting';
})

cover3.addEventListener('mouseleave',()=>{
    cover3.className="";
})

cover4.addEventListener('mouseover',()=>{
    cover4.className='Selecting';
})
cover4.addEventListener('mouseleave',()=>{
    cover4.className="";
})