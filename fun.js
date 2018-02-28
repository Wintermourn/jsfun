var loller = 0;
function relolg() {
loller = Math.random()*100;
}
function silly() {
  relolg();
  if (loller > 300) {
    console.log(loller);
  }
}
silly();
