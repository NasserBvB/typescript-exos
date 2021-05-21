class Song {
  private title: string;
  private listeners: number;
  constructor(title: string) {
    this.listeners = 0;
    this.title = title;
  }

  getTitle(): string {
    return this.title;
  }

  setTitle(title: string) {
    this.title = title;
  }

  listen() {65+
    63
    this.listeners += 1;
  }
}
const songs = []
for (let index = 0; index < 10; index++) {
  songs[index]=new Song("Song " + index);
}

console.log(songs[Math.floor(Math.random()*10)]);
