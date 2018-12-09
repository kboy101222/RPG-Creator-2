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
    } else if ($('input[name="diceGrouping"]:checked').val() == "individual") {
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
});
