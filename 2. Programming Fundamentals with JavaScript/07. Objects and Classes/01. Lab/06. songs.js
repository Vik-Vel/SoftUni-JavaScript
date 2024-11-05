
 function songs(input){
    class Song {
        constructor(type, name, minutes){
            this.type = type;
            this.name = name;
            this.minutes = minutes;
        }
    }
    
     let songsCount = Number(input[0]);
     let typeList = input[input.length-1];
     let songsArr = [];
    
     for (let i = 1; i <= songsCount; i++) {
        let splitted = input[i].split('_');
        let type = splitted[0];
        let name = splitted[1];        
        let minutes = splitted[2];

        let song = new Song(type, name, minutes);
        songsArr.push(song);
     }

     songsArr.forEach(song => {
        if(typeList  === 'all' || song.type === typeList){
            console.log(song.name);
        }
     });
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    )

    songs([2,
        'like_Replay_3:15',
        'ban_Photoshop_3:48',
        'all']
        )