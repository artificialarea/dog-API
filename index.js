'use strict';
/* eslint-disable indent */

function renderImage(src) {
  $('.js-display-imgSrc').html(
    `<img src=${src} />`
  );
}
    //
function getDogImage() {
  // by default, fetch() makes GET requests 
  // so unneccessary to do this...
  // const options = {method: 'GET'}; 
  // fetch('https://dog.ceo/api/breeds/image/random', options)
  // just...
  
  fetch('https://dog.ceo/api/breeds/image/random')
    
  // original repl.it demo
    // .then(response => response.json())
    // .then(responseJson => console.log(responseJson));

    .then(response => {
      return response.json();
    })

    .then(data => {  // data aka responseJson = response.json
     renderImage(data.message);
     console.log(data);
    })
    
    .catch(error => {
      console.log(error);
    });
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});