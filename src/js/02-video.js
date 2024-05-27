// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// player.on(
//   'timeupdate',
//   throttle(function (data) {
//     localStorage.setItem('videoplayer-current-time', data.seconds);
//   }, 1000)
// );

// const getTimeVideo = localStorage.getItem('videoplayer-current-time');

// if (getTimeVideo || 0) {
//   player.setCurrentTime(getTimeVideo);
// }
import Player from '@vimeo/player';

const iframe = document.getElementById('iframe');
console.dir(playerEl);
const playerEl = new Player('iframe', {
  id: 333444555,
  width: 1640,
});

playerEl.on('play', function (e) {
  e.preventDefault();
  console.log('playedthe video!');
});
