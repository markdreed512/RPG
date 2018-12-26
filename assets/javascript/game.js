
   
        var player = {
            name: '',
            healthPoints: 0,
            baseAttackStrength: 0,
            attackPoints: 0,
            attack: function(){
                opponent.health -= this.attackPoints;
                this.attackPoints += this.baseAttackStrength;
                //display health
                displayHealth();
                console.log('player health:'+ healthPoints)
                console.log('player attackPoints:'+ attackPoints)  
            },
        };

        var opponent = {
            name: '',
            healthPoints: 0,
            CounterAttackPoints: 0,
            counterAttack: function(){
                player.healthPoints -= this.counterAttackPoints;
                //display health
                displayHealth();
                console.log('opponent health:'+ healthPoints)
            },
        }
        var selectPlayer = function(name, baseAttack, health){
            player.name = name;
            player.attackPoints = baseAttack;
            player.baseAttackStrength = baseAttack;
            player.healthPoints = health;
            displayHealth();


        };
        var selectOpponent = function(name, counter, health){
            player.name = name;
            opponent.counterAttackPoints = counter;
            opponent.healthPoints = health;
            displayHealth();
        };

        function displayHealth(){
            $('#player-health').html("Your Health: " + player.healthPoints);
            $('#opponent-health').html("Opponent Health: " + opponent.healthPoints)
        }
    


    
    $( document ).ready(function() {
        var clickCount = 0;
        $('.choose-row-pic').on('click', function(event){
            //when first character clicked:
            if  (clickCount === 0){ 
                console.log('first click')
             clickCount++;
                $('#'+ event.target.id).css("visibility", "hidden");
                $('#'+ event.target.id + "2").css("visibility", "visible");
                if (event.target.id === "r2d2pic"){  
                    selectPlayer("R2D2", 15, 110);                       
                }
                else if (event.target.id === "c3popic"){
                    selectPlayer("C3PO", 12, 120);  
                }
                else if (event.target.id === "bb8pic"){
                    selectPlayer("BB-8", 18, 100); 
                }
                else{
                    selectPlayer("GNK Power Droid", 10, 130);  
                }
           
            }
             //else, (if it's the second click)
            else if  (clickCount === 1){  
                clickCount++
                console.log('second click')
                $('#'+ event.target.id).css("visibility", "hidden");
                $('#'+ event.target.id + "2").css("visibility", "visible");
                if (event.target.id === "r2d2pic"){                   
                    selectOpponent("R2D2", 15, 110)//name, counter, health     
                }
                else if (event.target.id === "c3popic"){
                    selectOpponent("C3PO", 12, 120);
                }
                else if (event.target.id === "bb8pic"){
                    selectOpponent("BB-8", 18, 100);
                }
                else{
                    selectOpponent("GNK Power Droid", 10, 130);
                }
            }
        })
            
        
       
        
    });

    
    






