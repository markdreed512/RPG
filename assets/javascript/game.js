
   
        var player = {
            name: '',
            healthPoints: 0,
            baseAttackStrength: 0,
            attackPoints: 0,
            attack: function(){
                opponent.healthPoints -= this.attackPoints;
                this.attackPoints += this.baseAttackStrength;
                displayHealth();
                  
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
                
            },
        }
        function selectPlayer(name, baseAttack, health){
            player.name = name;
            player.attackPoints = baseAttack;
            player.baseAttackStrength = baseAttack;
            player.healthPoints = health;
            displayHealth();


        };
        function selectOpponent(name, counter, health){
            player.name = name;
            opponent.counterAttackPoints = counter;
            opponent.healthPoints = health;
            displayHealth();
        };

        function displayHealth(){
            $('#player-health').html("Your Health: " + player.healthPoints);
            $('#opponent-health').html("Opponent Health: " + opponent.healthPoints)
        }
        function handleOpponentLoss(){
            defeatedFoes++ 
            if (defeatedFoes === 3){
                handlePlayerWin()
            }
            else{
                clickCount = 1;
                alert('you defeated your opponent, choose another')
                currentOpponent.css("visibility", "hidden");
            }

        }
        function handlePlayerLoss(){
            alert('you lose')

        }
        function handlePlayerWin(){
            currentOpponent.css("visibility", "hidden");
            alert('YOU WIN!!!')
        }
        var clickCount = 0;
        var currentOpponent = ''
        var defeatedFoes = 0
    


    
    $( document ).ready(function() {
        
        //choose characters for round 1
        $('.choose-row-pic').on('click', function(event){
            //when first character chosen:
            if  (clickCount === 0){ 
                console.log('first click')
             clickCount++;
                $('#'+ event.target.id).css("display", "none");
                // replace below with send to player area
                //$('#'+ event.target.id + "2").css("visibility", "visible");
                
                if (event.target.id === "r2d2pic"){  
                    selectPlayer("R2D2", 15, 110);  
                    $('#player-pic').attr("src", "assets/images/r2d2.png")                      
                }
                else if (event.target.id === "c3popic"){
                    selectPlayer("C3PO",12, 120);  
                    $('#player-pic').attr("src", "assets/images/c3p0.png") 
                }
                else if (event.target.id === "bb8pic"){
                    selectPlayer("BB-8", 18, 100); 
                    $('#player-pic').attr("src", "assets/images/bb8.png") 
                }
                else{
                    selectPlayer("GNK Power Droid", 10, 130); 
                    $('#player-pic').attr("src", "assets/images/gonk.png")  
                }
           
            }
             //when the secnd character is chosen
            else if  (clickCount === 1){  
                
                console.log('second click')
                $('#'+ event.target.id).css("display", "none");
                currentOpponent = $('#'+ event.target.id + "2")
                
                if (event.target.id === "r2d2pic"){                   
                    selectOpponent("R2D2", 20, 110)//name, counter, health   
                    $('#opponent-pic').attr("src", "assets/images/r2d2.png")  
                }
                else if (event.target.id === "c3popic"){
                    selectOpponent("C3PO", 16, 120);
                    $('#opponent-pic').attr("src", "assets/images/c3p0.png")  
                }
                else if (event.target.id === "bb8pic"){
                    selectOpponent("BB-8", 22, 100);
                    $('#opponent-pic').attr("src", "assets/images/bb8.png")  
                }
                else{
                    selectOpponent("GNK Power Droid", 14, 130);
                    $('#opponent-pic').attr("src", "assets/images/gonk.png")  
                }
                clickCount++
                console.log('clickCount: ' + clickCount)
            }
        })

        //when attack button clicked
        $('#attack-btn').on('click', function(event){
            player.attack(); 
            if (opponent.healthPoints <= 0){
                handleOpponentLoss()
            }
            else if (player.healthPoints <= 0){
                handlePlayerLoss()
            }
            else{
                opponent.counterAttack();
            }
            
            
        })
            
        
       
        
    });

    
    






