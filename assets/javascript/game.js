
   
        var player = {
            name: '',
            healthPoints: 0,
            baseAttackStrength: 0,
            attackPoints: 0,
            attack: function(){
                opponent.healthPoints -= this.attackPoints;
                this.attackPoints += this.baseAttackStrength;
                displayStats();
                $('#choose-instructions').html('You attacked ' + opponent.name + " for " + player.attackPoints + " damage.");
                $('#choose-instructions').removeClass('text-danger').addClass('text-success');
            },
        };

        var opponent = {
            name: '',
            deadPicSrc: '',
            healthPoints: 0,
            CounterAttackPoints: 0,
            counterAttack: function(){
                player.healthPoints -= this.CounterAttackPoints;
                displayStats();
                $('#counterattack-info').html(opponent.name + " counter attacked for " + opponent.CounterAttackPoints + " damage.")  
                },
        }
        function selectPlayer(name, baseAttack, health){
            player.name = name;
            player.attackPoints = baseAttack;
            player.baseAttackStrength = baseAttack;
            player.healthPoints = health;
            displayStats();
            $('#choose-instructions').html('Choose your Opponent');
            $('#choose-instructions').removeClass('text-success').addClass('text-danger');
        };
        function selectOpponent(name, counter, health){
            opponent.name = name;
            opponent.CounterAttackPoints = counter;
            opponent.healthPoints = health;
            opponent.deadPicSrc = "assets/images/dead_"+ name + ".png"
            displayStats();
            $('#attack-btn').prop("disabled", false)
            $('#choose-instructions').html('FIGHT!!');
        };

        function displayStats(){
            $('#player-health').html("Your Health: " + player.healthPoints);
            $('#opponent-health').html("Opponent Health: " + opponent.healthPoints)
            $('#player-name').html(player.name);
            $('#opponent-name').html(opponent.name);
        }
        function handleOpponentLoss(){
            defeatedFoes++ 
            if (defeatedFoes === 3){
                handlePlayerWin()
            }
            else{
                clickCount = 1;
                //disable attack button
                $('#attack-btn').prop("disabled", true)
                $('#counterattack-info').html('');
                $('#choose-instructions').html("You defeated " + opponent.name + "!! Choose another opponent");
                $('#opponent-pic').attr("src", "assets/images/dead_" + opponent.name + ".png")
            }

        }
        function handlePlayerLoss(){
           
            currentOpponent.css("visibility", "hidden");
            $('#choose-instructions').html("YOU LOSE. ")
            $('#counterattack-info').html('');
            $('#attack-btn').css('display', 'none')
            $('#opponent-area').css('display', 'none')
            $('#vs').css('display', 'none')

        }
        function handlePlayerWin(){
            currentOpponent.css("visibility", "hidden");
            $('#choose-instructions').html("YOU HAVE DEFEATED ALL FOES. " + player.name +  " IS HEREBY DECLARED KING OF ALL DROIDS!!!")
            $('#counterattack-info').html('');
            $('#attack-btn').css('display', 'none')
            $('#opponent-area').css('display', 'none')
            $('#vs').css('display', 'none')


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
                    selectPlayer("R2D2", 14, 110);  
                    $('#player-pic').attr("src", "assets/images/r2d2.png")                      
                }
                else if (event.target.id === "c3popic"){
                    selectPlayer("C3PO",13, 115);  
                    $('#player-pic').attr("src", "assets/images/C3PO.png") 
                }
                else if (event.target.id === "bb8pic"){
                    selectPlayer("BB-8", 17, 100); 
                    $('#player-pic').attr("src", "assets/images/BB-8.png") 
                }
                else{
                    selectPlayer("GNK Power Droid", 9, 130); 
                    $('#player-pic').attr("src", "assets/images/GNK Power Droid.png")  
                }
           
            }
             //when the secnd character is chosen
            else if  (clickCount === 1){  
                
                console.log('second click')
                $('#'+ event.target.id).css("display", "none");
                currentOpponent = $('#'+ event.target.id + "2")
                
                if (event.target.id === "r2d2pic"){                   
                    selectOpponent("R2D2", 23, 110)  
                    $('#opponent-pic').attr("src", "assets/images/R2D2.png")  
                }
                else if (event.target.id === "c3popic"){
                    selectOpponent("C3PO", 19, 120);
                    $('#opponent-pic').attr("src", "assets/images/C3PO.png")  
                }
                else if (event.target.id === "bb8pic"){
                    selectOpponent("BB-8", 25, 100);
                    $('#opponent-pic').attr("src", "assets/images/BB-8.png")  
                }
                else{
                    selectOpponent("GNK Power Droid", 17, 130);
                    $('#opponent-pic').attr("src", "assets/images/GNK Power Droid.png")  
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
                if (player.healthPoints <= 0){
                    handlePlayerLoss()
                }
            }
            
            
        })
            
        
       
        
    });

    
    






