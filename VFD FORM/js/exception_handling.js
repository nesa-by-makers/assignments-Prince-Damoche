console.log("Before exception");

try {
    console.log(name);
}
catch(error){
    console.log("An error occured: " + error);
}
finally {
    console.log("The end");
}