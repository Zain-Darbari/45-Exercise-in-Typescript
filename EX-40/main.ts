function makeAlbum (artist : string , title : string): {artist : string , title : string}{
    const dictionaries ={
        artist: artist.charAt(0).toUpperCase()+ artist.slice(1),
        title: title.charAt(0).toUpperCase()+ title.slice(1)
    }
    return dictionaries;
}

let album = makeAlbum ("Ali","light")
console.log(album)

album = makeAlbum ("Arhum","Cyan")
console.log(album)

album = makeAlbum ("Umair","Red wave")
console.log(album)