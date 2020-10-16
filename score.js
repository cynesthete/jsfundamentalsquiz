var clear = document.getElementById("clear");
var returnBtn = document.getElementById("return");

function clearHighScore(){
    window.localStorage.removeItem("highScores");
    window.location.reload();
}

function printScore(){
    var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
    highScores.sort(function(a, b){
        return b.score - a.score;
    });
    for (var i=0; i<highScores.length; i++){
        var li = document.createElement("li");
        li.textContent = highScores[i].player + "-" + highScores[i].score;
        var scores = document.getElementById("Scores1");
        scores.append(li);
    }
}

printScore();



clear.addEventListener("click", function(){
    clearHighScore();
});

returnBtn.addEventListener("click", function(){
    window.location.href="index.html";
});