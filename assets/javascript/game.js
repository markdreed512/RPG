
    var game = {
        player: '',
        opponent: '',

        r2d2:  {
            name: "R2D2",
            healthPoints: 110,
            attackPoints: 15,
            counterAttackPoints: 15,
        },
        c3p0: {
            name: "C3PO",
            healthPoints: 120,
            attackPoints: 12,
            counterAttackPoints: 12,
        },
        bb8: {
            name: "BB8",
            healthPoints: 100,
            attackPoints: 18,
            counterAttackPoints: 18,
        },
        gonk: {
            name: "GNK Power Droid",
            healthPoints: 130,
            attackPoints: 10,
            counterAttackPoints: 10,
        },
    }
    //end of game object

    
    $( document ).ready(function() {
        var firstClick = true;
        var playerAttackPower = 0;
        var playerHealth = 0;
        var opponentCounterPower = 0;
        var opponentHealth = 0;
        $('.choose-row-pic').on('click', function(event){
            //when first character clicked:
            if (firstClick === true){ 
                console.log('first click')
                firstClick = false;
                $('#'+ event.target.id).css("visibility", "hidden");
                $('#'+ event.target.id + "2").css("visibility", "visible");
                if (event.target.id === "r2d2pic"){                   
                    //set attack power and health
                    playerAttackPower = game.r2d2.attackPoints;
                    playerHealth = game.r2d2.healthPoints;
                    //display health
                    $('#player-health').html("Your Health: " + playerHealth)
                    console.log('attack: '+ playerAttackPower, "health: " + playerHealth)       
                }
                else if (event.target.id === "c3popic"){
                    console.log('do player = c3po stuff')
                    playerAttackPower = game.c3p0.attackPoints;
                    playerHealth = game.c3p0.healthPoints;
                    $('#player-health').html("Your Health: " + playerHealth)
                    console.log('attack: '+ playerAttackPower, "health: " + playerHealth)  
                }
                else if (event.target.id === "bb8pic"){
                    console.log('do player = bb8 stuff')
                    playerAttackPower = game.bb8.attackPoints;
                    playerHealth = game.bb8.healthPoints;
                    $('#player-health').html("Your Health: " + playerHealth)
                    console.log('attack: '+ playerAttackPower, "health: " + playerHealth)  
                }
                else{
                    console.log('do player = gonk stuff')
                    playerAttackPower = game.gonk.attackPoints;
                    playerHealth = game.gonk.healthPoints;
                    $('#player-health').html("Your Health: " + playerHealth)
                    console.log('attack: '+ playerAttackPower, "health: " + playerHealth)  
                }
           
            }
             //else, (if it's the second click)
            else {  
                console.log('second click')
                $('#'+ event.target.id).css("visibility", "hidden");
                $('#'+ event.target.id + "2").css("visibility", "visible");
                if (event.target.id === "r2d2pic"){                   
                    //set counter attack power and health
                    opponentCounterPower = game.r2d2.counterAttackPoints;
                    opponentHealth = game.r2d2.healthPoints;
                    //display health
                    $('#opponent-health').html("Opponent Health: " + opponentHealth)
                    console.log('opponent counter attack: '+ opponentCounterPower, "health: " + playerHealth)       
                }
                else if (event.target.id === "c3popic"){
                    console.log('do player = c3po stuff')
                    playerAttackPower = game.c3p0.counterAttackPoints;
                    playerHealth = game.c3p0.healthPoints;
                    $('#opponent-health').html("Opponent Health: " + opponentHealth)
                    console.log('opponent counter attack: '+ opponentCounterPower, "health: " + playerHealth) 
                }
                else if (event.target.id === "bb8pic"){c
                    console.log('do player = bb8 stuff')
                    playerAttackPower = game.bb8.counterAttackPoints;
                    playerHealth = game.bb8.healthPoints;
                    $('#opponent-health').html("Opponent Health: " + opponentHealth)
                    console.log('opponent counter attack: '+ opponentCounterPower, "health: " + playerHealth) 
                }
                else{
                    console.log('do player = gonk stuff')
                    playerAttackPower = game.gonk.counterAttackPoints;
                    playerHealth = game.gonk.healthPoints;
                    $('#opponent-health').html("Opponent Health: " + opponentHealth)
                    console.log('opponent counter attack: '+ opponentCounterPower, "health: " + playerHealth) 
                }
            }
        })
            
        
       
        
    });

    
    






