// define the array
var myTrackList = [];
 
// assign values to array
myTrackList = ["Tayyeb","Ashfaque","Riyaz","Amit","Amarjeet","Anthony"];
 
// get the container
var container = document.getElementById("tracklist");
 
// define the function 
function createMyList(){
  
  // calculate the length of array
  var listLength = myTrackList.length;
  
  
  if(listLength>0){
    
    // Create the Unordered list if there are elements present in the array  
    var myList = document.createElement("ul");
    
    // add a class name to list
    myList.className="list";
    
    // iterate through the array 
    for(var i=0;i<listLength;i++){
      
      // create list item for every element 
      var listItem = document.createElement("li");
      
      // create a text node to store value
      var listValue = document.createTextNode(myTrackList[i]);
      
      // append the value in the list item
      listItem.appendChild(listValue); 
      
      // append the list item in the list
      myList.appendChild(listItem);
    }
    
    // append the list in the container
    container.appendChild(myList);
    
  }else{
    
    // Create a text node with the message
    var message = document.createTextNode("No Tracks");
    
    // Append the message to the container
    container.appendChild(message);    
  }
 
}


window.onload = createMyList;