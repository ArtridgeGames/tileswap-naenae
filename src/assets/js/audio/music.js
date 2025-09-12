import { Howl, Howler } from 'howler';

class MusicManager {

  constructor() {
  }

  static TRACKS = {
    MENU: new Howl({
      src: ['/audio/music/menu.mp3'],
    }),
    PUZZLES: new Howl({
      src: ['/audio/music/puzzles.mp3'],
    }),
    CHALLENGES: new Howl({
      src: ['/audio/music/challenges.mp3'],
    })
  }

  static VIEWS = {
    '/': this.TRACKS.MENU,
    '/home': this.TRACKS.MENU,
    '/freeplayGame': this.TRACKS.MENU,
    '/puzzleGame': this.TRACKS.PUZZLES,
    '/challengeGame': this.TRACKS.CHALLENGES
  }

  track(path) {
    if (!(path in MusicManager.VIEWS)) return;
    return MusicManager.VIEWS[path]
  }

  navigate(from, to) {
    const previousTrack = this.track(from.path);
    const nextTrack = this.track(to.path);
    
    if (previousTrack === nextTrack) {
      if (to.path === '/') {
        nextTrack.play();
      }
      return;
    }

    if (nextTrack !== undefined) {
      if (previousTrack !== undefined) {
        previousTrack.fade(1, 0, 1000);
        setTimeout(() => {
          previousTrack.stop();
          
          nextTrack.volume(1);
          nextTrack.play();
  
        }, 1000);
      } else {
        nextTrack.volume(1);
        nextTrack.play();
      }
    } else {
      previousTrack.stop();
    }


  }
}


export function setupMusic(router) {
  const manager = new MusicManager();
  
  router.beforeEach((to, from) => {
    manager.navigate(from, to);
  });
}
