import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeVideoElem = document.querySelector('.ifreme');

const player = new Player(iframeVideoElem);
// Подія timeupdate спрацьовує кожного разу, коли змінюється положення відтворення відео.
player.on('timeupdate', throttle(onTimeUpdate, 1000));
//  зберігає поточне положення відтворення  у localStorage
function onTimeUpdate(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
//  отримує поточне положення відтворення  у localStorage
const savedDataSeconds = localStorage.getItem('videoplayer-current-time');

//  встановлення положення відтворення відео на збережене значення, отримане з локального сховища.
player
  .setCurrentTime(savedDataSeconds)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
