function gramophone(band, album, songFromAlbum){
    let durationInSeconds = (album.length * band. length) * songFromAlbum.length / 2;

    let rotations = Math.ceil(durationInSeconds / 2.5);

    console.log(`The plate was rotated ${rotations} times.`)
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');
