
var lyricsArray = [];

// Add functionality to make the "Print favorites" button work
function displayLyrics(){
  var list = document.createElement('ul');
  // display all of the favorited startups in the array underneath the h2 with an ID of `favorites`
  for(i=0; i < lyricsArray.length; i++){
    printList = '<li>' + lyricsArray[i] + '</li>';
    document.getElementById('lyrics').innerHTML += printList;
  }
}

window.onload = function(){
  for(var bottles = 99; bottles >= 0; bottles--){
    if (bottles > 1) {
      lyricsArray.push(bottles + ' bottles of beer on the wall, ' + bottles + ' bottles of beer. Take one down and pass it around...');
    } else if (bottles === 1) {
      lyricsArray.push(bottles + ' bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.');
    } else {
      lyricsArray.push('No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.');
    }
  }
  displayLyrics();
}