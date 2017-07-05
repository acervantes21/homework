var startUpIdea;
function runStartUp(){
  var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
  var startupY = ['Slack', 'Trello', 'Tesla', 'Tinder', 'Asana'];

  var random1 = Math.floor((Math.random() * startupX.length));
  var random2 = Math.floor((Math.random() * startupY.length));

  // user clicks start up button
  startUpIdea = ('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

  // generate new madlib inside XforY in h1
  document.getElementById('xForY').innerHTML = startUpIdea;

  return startUpIdea;
}

// Add functionality to make the "Favorite Startup" button work
var saveFavorite = [];
function favoriteStartUp(){
  // save that madlib saying to an array
  saveFavorite.push(startUpIdea);
}

// Add functionality to make the "Print favorites" button work
function printFavorites(){
  var list = document.createElement('ul');
  // display all of the favorited startups in the array underneath the h2 with an ID of `favorites`
  for(i=0; i < saveFavorite.length; i++){
    printList = '<li>' + saveFavorite[i] + '</li>';
    document.getElementById('favorites').innerHTML += printList;
  }
}