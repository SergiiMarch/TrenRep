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
import throttle from 'lodash.throttle';

// Отримуємо iframe елемент
const iframe = document.getElementById('vimeo-player');
// Ініціалізуємо Vimeo плеєр
const player = new Player(iframe);

// Ключ для збереження часу відтворення у localStorage
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

// Функція для збереження часу відтворення у localStorage
const saveCurrentTime = throttle(data => {
  localStorage.setItem(LOCAL_STORAGE_KEY, data.seconds);
}, 1000);

// Підписуємося на подію timeupdate для збереження часу відтворення
player.on('timeupdate', saveCurrentTime);

// Встановлюємо поточний час відтворення зі збереженого значення у localStorage
const savedTime = localStorage.getItem(LOCAL_STORAGE_KEY);
if (savedTime !== null) {
  player.setCurrentTime(parseFloat(savedTime)).catch(error => {
    console.error('Failed to set the current time:', error);
  });
}
