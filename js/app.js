let prev = document.getElementById('prev');
let next = document.getElementById('next');
let imgs = document.getElementsByClassName('img');
let start = 0;
let srcs = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
];

function updateSlider() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].src = 'img/' + srcs[i + start];
  }
}

prev.addEventListener('click', function() {
  start--;
  next.disabled = false;
  if (start == 0) {
  prev.disabled = true;
  }
  updateSlider();
}) 

next.addEventListener('click', function() {
  start++;
  prev.disabled = false;
  if(start == 5) {
    next.disabled = true;
  }
  updateSlider();
})