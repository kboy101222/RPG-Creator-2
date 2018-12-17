$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

$('#rollDice').click(function () {
    if ($('input[name="diceGrouping"]:checked').val() == "grouped") {
        var result = 0;
        var roll = 0;
        var numDice = $('input[name="numDice"]').val();
        var diceSides = $('select[name="diceSides"]').val();
        var rollBonus = $('input[name="diceBonus"]').val();
        console.log("Rolling", numDice + "d" + diceSides);

        for (var i = 0; i < numDice; i++) {
            roll = Math.round(Math.random() * (+diceSides - 1)) + 1;
            console.log(roll);
            result += roll;
        }
        console.log("Roll:", result)
        result += Number(rollBonus);
        console.log("Total:", result);
        $('#diceOutcome').html(result);
    } 
    else if ($('input[name="diceGrouping"]:checked').val() == "individual") {
        //       TODO Process and output bulk dice rolling
        var result = [];
        var roll = 0;
        var numDice = $('input[name="numDice"]').val();
        var diceSides = $('select[name="diceSides"]').val();
        var rollBonus = $('input[name="diceBonus"]').val();
        
        for (var i = 0; i < numDice; i++){
            roll = Math.round(Math.random() * (+diceSides - 1)) + 1;
            console.log("Roll:", roll);
            roll += Number(rollBonus);
            result.push(roll);
        }
        console.log("Results:", result);
        var resultHTML = "";
        
        for (var i = 0; i < numDice; i++){
            if (i != (numDice-1)){
                resultHTML += result[i].toString() + ", ";
            } else {
                resultHTML += result[i].toString();
            }
        }
        
        console.log(resultHTML);
        $('#diceOutcome').html(resultHTML);
    }
    else if ($('input[name="diceGrouping"]:checked').val() == "ability") {
        var result = [];
        var total = 0;
        var modifier = 0;
        var roll = 0;
        var lowest = 0;
        var lowestIndex = 0;
        for (var i = 0; i < 4; i++){
            roll = Math.ceil(Math.random() * 6);
            console.log("Roll:", roll);
            result.push(roll);
            total += roll;
            
            if (i != 0){
                console.log("Calculating lowest");
                if (roll < lowest){
                    lowestIndex = i;
                    lowest = roll;
                }
            }
            else {
                lowest = roll;
            }
        }
        
        console.log("Result:", result);
        console.log("Dropping a", lowest, "at position", lowestIndex);
        result.splice(lowestIndex, 1);
        total -= lowest;
        console.log("Total:", total);
        
        modifier = Math.floor((total / 2) - 5)
        
        if (total >= 10){
            $('#diceOutcome').html(total + " (+" + modifier + ")");
        } else {
            $('#diceOutcome').html(total + " (" + modifier + ")");
        }
    }
});

//$("#newInitItem").click(function() {
//    const initItemHTML = "
//        <div class=
//    "
//});