function retrieve() {
    addFile();
}

var fileId = 0; // used by the addFile() function to keep track of IDs
var evenOddColor =0;//alternate background color for rows

function addFile() {
    fileId++;
    if (evenOddColor==0) { var color = '';evenOddColor = 1;}
    else {var color = 'style="background-color: #f2f2f2;"';evenOddColor = 0;}
    var tile = '<tr '+color+'>'
      +'<td><b>kkr</b>'//data.dest
      +'</td>'+
      '<td>7:30'//data.time
      +'</td>'+
      '<td>9/10'//data.fractionFull
      +'</td>'+
      '<td><a href="'+joinPage(fileId)+'"><i class="material-icons">person_add</i></a></td>'
    '</tr>';
  div = document.getElementById( 'join' );
    div.insertAdjacentHTML( 'beforeend', tile );
}

function joinPage(fileId) {
  // body...
}