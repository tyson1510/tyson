'use strict';
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const inputContainer = document.querySelector('.email');
const btn = document.querySelector('.btn');
const info = document.getElementById('info');
const emailInput = document.getElementById('input');

let btnView = document.querySelectorAll('.btn-view');


btn.addEventListener('click',function(){
  const emailValue = emailInput.value; //trả về string cho regex
  if( regex.test(emailValue)){
    inputContainer.classList.add('hide');
    info.classList.remove('hide');
  

}else{
  alert('Email không hợp lệ!')
}
    
  })



  

// btnView.addEventListener('click', function () {

//     // đi lên tìm box
//     let box = this.closest('.thong-tin-box');

//     // tìm detail trong box đó
//     let detail = box.querySelector('.thong-tin-exp-detail');

//     // bật tắt hide
//     detail.classList.remove('hide');

// });




for( let i = 0; i < btnView.length; i++) {



  btnView[i].addEventListener('click', function () {

    // Bước 1: đi lên tìm box
    let box = this.closest('.thong-tin-box');

    // Bước 2: tìm detail trong box
    let detail = box.querySelector('.detail');

    // Bước 3: bật/tắt hide
    detail.classList.toggle('hide');
    

    if(detail.classList.contains('hide')) {
      btnView[i].textContent = " ▾ View more"
    }else {
      btnView[i].textContent = " ▴ View less"
    }

  });

};