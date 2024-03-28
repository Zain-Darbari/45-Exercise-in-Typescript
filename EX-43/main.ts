function show_magicians(magicions : string []){
    for(const magicion of magicions){
        console.log(magicion.charAt(0).toUpperCase() +magicion.slice(1));  
    }
}

const magicion:string[] = ["usman","haseeb","wajahat"];
show_magicians(magicion)

function make_great(magicians:string[]) {
    const greatMagicians: string[] = [];
    for(let i = 0; i < magicians.length; i++){
    greatMagicians[i] = magicians[i] + ' the great'
    }
    return greatMagicians;
}

const magicians3: string[] = ["usman","haseeb","wajahat"];
const greatMagicians2 : string[] = make_great(magicians3)
make_great(magicians3)
show_magicians(greatMagicians2)


