'use strict';
/* eslint-disable indent */

function renderImage(src) {
  $('.js-display-imgSrc').html(
    `<img src=${src} />`
  );
}
    //
function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    // originally
    // .then(response => response.json())
    // .then(responseJson => console.log(responseJson));

    .then(response => {
      return response.json();
    })

    .then(responseJson => {
     renderImage(responseJson.message);
     console.log(responseJson)
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