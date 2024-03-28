function show_magicians(magicions) {
    for (var _i = 0, magicions_1 = magicions; _i < magicions_1.length; _i++) {
        var magicion_1 = magicions_1[_i];
        console.log(magicion_1.charAt(0).toUpperCase() + magicion_1.slice(1));
    }
}
var magicion = ["usman", "haseeb", "wajahat"];
show_magicians(magicion);
function make_great(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians[i] = magicians[i] + ' the great';
    }
    return greatMagicians;
}
var magicians3 = ["usman", "haseeb", "wajahat"];
var greatMagicians2 = make_great(magicians3);
make_great(magicians3);
show_magicians(greatMagicians2);
