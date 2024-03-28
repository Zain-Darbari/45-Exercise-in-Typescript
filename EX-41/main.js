function show_magicians(magicions) {
    for (var _i = 0, magicions_1 = magicions; _i < magicions_1.length; _i++) {
        var magicion_1 = magicions_1[_i];
        console.log(magicion_1.charAt(0).toUpperCase() + magicion_1.slice(1));
    }
}
var magicion = ["Asif", "Ali", "Ayan"];
show_magicians(magicion);
