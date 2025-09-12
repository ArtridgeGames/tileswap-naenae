import { Howl, Howler } from 'howler';

const menuMusic = new Howl({
    src : ['/audio/music/menu.mp3']
});

export function playMenu(){
    menuMusic.play();
}

