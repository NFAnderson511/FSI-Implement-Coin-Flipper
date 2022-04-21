// TODO: Declare any global variables we need
let heads = 0
let tails = 0

document.addEventListener('DOMContentLoaded', function () {
    //updates the scoreboard
    function updateStats(){
        let flips = heads + tails
        document.getElementById("heads").textContent = heads
        document.getElementById("tails").textContent = tails
        if(flips > 0){
            document.getElementById("heads-percent").textContent = Math.round((heads/flips) * 100) + "%"
            document.getElementById("tails-percent").textContent = Math.round((tails/flips) * 100) + "%"
        }else{
            document.getElementById("heads-percent").textContent = "0%"
            document.getElementById("tails-percent").textContent = "0%"
        }
    }
    document.getElementById("flip").addEventListener("click", function() {
            //Penny is heads up if isHeads is greater than 0.5
            let isHeads = Math.random() > 0.5
            //keep track of the results of each flip
            if(isHeads){
                heads++
                document.getElementById("pennyFace").setAttribute("src", "assets/images/penny-heads.jpg")
                document.getElementById("pennyFace").setAttribute("alt", "Penny Heads Up")
                document.getElementsByClassName("message-container")[0].textContent = "Heads"
            }else{
                tails++
                document.getElementById("pennyFace").setAttribute("src", "assets/images/penny-tails.jpg")
                document.getElementById("pennyFace").setAttribute("alt", "Penny Tails Up")
                document.getElementsByClassName("message-container")[0].textContent = "Tails"
            }
            //update the scoreboard
            updateStats()
        })
    document.getElementById("clear").addEventListener("click", function(){
        //resets heads and tails values to zero
        heads = 0
        tails = 0
        //resets the penny
        document.getElementById("pennyFace").setAttribute("src", "assets/images/penny-heads.jpg")
        document.getElementById("pennyFace").setAttribute("alt", "Penny Heads Up")
        document.getElementsByClassName("message-container")[0].textContent = "Let's get rolling!"
        //update the scoreboard
        updateStats()
    })
    // Flip Button Click Handler
        // TODO: Determine flip outcome

        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})