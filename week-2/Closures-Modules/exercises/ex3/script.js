const SongsManager = function () {
  const _songs = {};

  const addSong = function (songName, identifier) {
    _songs[songName] = identifier;
  };

  const getSong = function (songName) {
    if (_songs[songName]) {
      console.log(`https://www.youtube.com/watch?v=${_songs[songName]}`);
    } else {
      console.log("Not found");
    }
  };

  return {
    getSong: getSong,
    addSong: addSong,
  };
};
const songsManager = SongsManager();
songsManager.addSong("sax", "3JZ4pnNtyxQ");
songsManager.addSong("how long", "CwfoyVa980U");
songsManager.addSong("ain't me", "D5drYkLiLI8");

songsManager.getSong("sax"); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
