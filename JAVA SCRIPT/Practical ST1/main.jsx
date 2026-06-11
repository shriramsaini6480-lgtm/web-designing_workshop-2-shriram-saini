function startCountdown() {
    let num = document.getElementById("number").value;
    let output = document.getElementById("output");

    let i = num;

    let interval = setInterval(function() {
        if (i <= 0) {
          output.innerHTML = "Done!";
          clearInterval(interval);
        } 
        else {
          output.innerHTML = i;
          i--;
        }
    }, 1000);
}
