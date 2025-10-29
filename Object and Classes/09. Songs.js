function solve(input) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    const numberOfSongs = input.shift();
    const typeSong = input.pop();
    const songs = [];

    for (let i = 0; i < numberOfSongs; i++) {
        const [type, name, time] = input[i].split('_');
        songs.push(new Song(type, name, time));
    }

    if (typeSong === 'all') {
        songs.forEach(s => console.log(s.name));
    } else {
        const filteredSongs = songs.filter(s => s.type === typeSong);
        filteredSongs.forEach(s => console.log(s.name));
    }
}