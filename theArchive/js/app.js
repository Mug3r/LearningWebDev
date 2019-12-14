var music = document.getElementById('music');
var duration;
var playhead = document.getElementById('playhead');
var timeline = document.getElementById('timeline');
var tracklist = document.getElementById('tracklist');

const timelineWidth = timeline.clientWidth;

timeline.addEventListener("click", function(event){
    moveplayhead(event);
    console.log(clickPercent(event));
    music.currentTime = duration * clickPercent(event);
});
music.addEventListener("timeupdate", timeUpdate, false);

function clickPercent(event){
    return((event.clientX - getPosition(timeline))/timelineWidth);
}

function moveplayhead(event){
    var newMargLeft = event.clientX - getPosition(timeline);

    if(newMargLeft != 0 && newMargLeft <= timelineWidth){
        playhead.style.marginLeft = newMargLeft + "px";
    }
    if(newMargLeft = 0){
        playhead.style.marginLeft = "0px";
    }
    if(newMargLeft >= timelineWidth){
        playhead.style.marginLeft = timelineWidth +"px";
    }
}

function getPosition(el){
    return el.getBoundingClientRect().left;
}


function timeUpdate() {
    var playPercent = 100 * (music.currentTime / duration);
    playhead.style.marginLeft = playPercent + "%";    
}

function playAudio() {
    if(music.paused){
        music.play();
        pButton.className ="";
        pButton.className = "pause";
        
        
    }
    else{
        music.pause();
        pButton.className="";
        pButton.className= "play";
        
    }
}

music.addEventListener("canplaythrough", function () {
    duration = music.duration;
    
}, false);

function addTrack(title){
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(title));
    tracklist.appendChild(entry);
}