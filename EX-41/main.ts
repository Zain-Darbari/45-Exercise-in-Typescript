function show_magicians(magicions : string []){
    for(const magicion of magicions){
        console.log(magicion.charAt(0).toUpperCase() +magicion.slice(1));  
    }
}

const magicion:string[] = ["Asif","Ali","Ayan"];
show_magicians(magicion)