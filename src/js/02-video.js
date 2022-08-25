// создаю переменную для videoplayer-current-time, устанавливаю Вимэо через npm, не забываю про скрипт, уточняю про добавление времени воспроизведения


import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const time = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('timeupdate', throttle(onPlay, 1000));
   
function onPlay ({ seconds }) {
    localStorage.setItem(time, seconds)
}
setCurrentTime()
function setCurrentTime(){
    if(!localStorage.getItem(time)){
        return
    }
    player.setCurrentTime(localStorage.getItem(time))
}