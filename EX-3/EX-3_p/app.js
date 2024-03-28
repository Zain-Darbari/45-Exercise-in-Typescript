var newName = "battle Ground";
console.log(newName.toLowerCase());
console.log(newName.toUpperCase());
console.log(newName.replace(/\b\w/g, function (abc) { return abc.toUpperCase(); }));
