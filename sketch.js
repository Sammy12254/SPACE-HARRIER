//creating the game objects and making as global variables
var bg;
var enemyGroup, playerBulletGroup, planetGroup, asteroidsGrp, enemyBulletGrp, enemyGroup1, compBulletGrp;

var player, computerplayer;

var PLAY_BUTTON;
var INSTRUCTION_WORD;
var INSTRUCTION;
var DEMO_LEFTARROWKEY;
var demo_rightARRWOKEY;
var home_button;

var score = 0;

var GAMESTATE = 0;
var HOME = 0;
var PLAY = 2;
var RESTART = 3;
var play_INSTRUCTION = 4;
var END = 1;

var logo;

var left_edge;
var right_edge;
var home_play_button;

var player_leftedge;
var player_rightedge;

var gameover;
var resetButton;
var end_home_button;

var spaceshipimg1;
var spaceshipimg2;
var spaceshipimg3;
var spaceshipimg4;

var playerspaceshipimg;
var rightbuttonimg,leftbuttonimg; 

var asteroidsimg,rock_img;

var blastimg; 
var backgroundimg;

var fireupimg; 
var firedownimg;

var home_backgroundimg;
var logoimg;

var INSTRUCTION_BACKGROUND;

var buttonimg; 
var INSTRUCTION_IMG; 

var planetimg;

var gameoversound; 
var playershootingmp3;
var playerdiedmp3;
var lifegonemp3; 
var mouseclicked;

var gamoverbackimg; 
var resetimg; 
var gameoverimg; 
var blackbuttonimg; 

var backgroundmusic;

//creating the function preload
function preload() {
  
    //loading the spaceship images
    spaceshipimg1 = loadImage('spaceship1.png');
    spaceshipimg2 = loadImage('spaceship2.png');
    spaceshipimg3 = loadImage('spaceship3.png');
    spaceshipimg4 = loadImage('spaceship4.png');

    //loading the playerSpaceship image
    playerspaceshipimg = loadImage('player.jpg');

    //loading the rightbutton and leftbutton images
    rightbuttonimg = loadImage('buttonright.jpg');
    leftbuttonimg = loadImage('buttonleft.jpg');

    //loading the asteroids and rock images
    asteroidsimg = loadImage('asteroid.png');
    rock_img = loadImage('spacerock.png')
    
    //loading the blast image
    blastimg = loadImage('blast.png');

    //loading the background image
    backgroundimg = loadImage('spacebackground.png');

    //loading the fireup and  firedown images
    fireupimg = loadImage('spacefiredown.png');
    firedownimg = loadImage('spacefireup.png');

    //loading the home background image
    home_backgroundimg = loadImage('bg4.jpg');

    //loading the logo image
    logoimg = loadImage('bg.png');

    //loading the INSTRUCTION_BACKGROUND image
    INSTRUCTION_BACKGROUND = loadImage('bg.jpg');

    //livesimg = loadImage('lives.png');

    //loading the button and NSTRUCTION images
    buttonimg = loadImage('Picture1.png');
    INSTRUCTION_IMG = loadImage('unnamed.png');

    //loading the planet image
    planetimg = loadImage('Picture2.png');

    //loading the gameover, playershooting, playerdied, lifegone, mouseclicked sounds
    gameoversound = loadSound('gameover.mp3');
    playershootingmp3 = loadSound('playershooting.mp3');
    playerdiedmp3 = loadSound('playerdied.mp3');
    lifegonemp3 = loadSound('livegone.mp3');
    mouseclicked = loadSound('Mouse-Click.mp3');

    //loading the gamoverback, reset, gameover,  blackbutton images
    gamoverbackimg = loadImage('gamoverbackground.png');
    resetimg = loadImage('restart.png');
    gameoverimg = loadImage('gamover.png');
    blackbuttonimg = loadImage('blackbutton.png');

    //loading the background music 
    backgroundmusic = loadSound('music.mp3');
}

//creating the function setup
function setup(){

  //creating the Canvas 
  createCanvas(windowWidth,windowHeight);

  //making the backgroundmusic loop
  backgroundmusic.loop();

  //creating the background
  bg = createSprite(width/2,height/2,20,20);
  bg.visible = false;
  bg.addImage(backgroundimg);
  bg.scale = 2;
  bg.velocityY = 20;

  //creating the new groups
  enemyGroup = new Group();
  playerBulletGroup = new Group();
  planetGroup = new Group();
  asteroidsGrp = new Group();
  enemyBulletGrp = new Group();
  enemyGroup1 = new Group();
  compBulletGrp = new Group();

  //creating the player
  player = createSprite(width-100,height-100,50,50);
  player.addImage(playerspaceshipimg);
  player.scale = 0.2;
  player_Lifes = 10;
  player_Friend_Life = 10;

  //creating the computerPlayer 
  computerplayer = createSprite(width-1400,height-100,50,50);
  computerplayer.addImage(playerspaceshipimg);
  computerplayer.scale = 0.2;

  //creating the play button 
  PLAY_BUTTON = createSprite(width/1.7,height-300,130,70);
  PLAY_BUTTON.addImage(buttonimg);
  PLAY_BUTTON.scale = 0.7;

  //creating the INSTRUCTION
  INSTRUCTION = createSprite(width/2.3,height-300,50,50);
  INSTRUCTION.addImage(buttonimg);
  INSTRUCTION.scale = 0.7;

  //creating the INSTRUCTION_WORD
  INSTRUCTION_WORD = createSprite(width/2,height-height/1.3,20,20);
  INSTRUCTION_WORD.addImage(INSTRUCTION_IMG);
  INSTRUCTION_WORD.visible = false;

  //creating the DEMO_LEFTARROWKEY
  DEMO_LEFTARROWKEY = createSprite(width/8.4,height-height/1.7)
  DEMO_LEFTARROWKEY.addImage(leftbuttonimg);
  DEMO_LEFTARROWKEY.scale = 0.2;
  DEMO_LEFTARROWKEY.visible = false;

  //creating the demo_rightARRWOKEY
  demo_rightARRWOKEY = createSprite(width/6,height-height/1.7);
  demo_rightARRWOKEY.addImage(rightbuttonimg);
  demo_rightARRWOKEY.scale =0.2;
  demo_rightARRWOKEY.visible = false;

  //creating the home_button
  home_button = createSprite(width/7,height/6.5);
  home_button.addImage(buttonimg);
  home_button.scale = 0.7;

  //creating the score
  score = 0;

  //making the computerPlayer and player visible
  computerplayer.visible = false;
  player.visible = false;

  GAMESTATE = 0;
  HOME = 0;
  PLAY = 2;
  RESTART = 3;
  play_INSTRUCTION = 4;
  END = 1;

  //creatimg the logo
  logo = createSprite(width/2,height-500,20,20);
  logo.addImage(logoimg);
  logo.scale = 0.8;
  logo.visible = false;

  //creating the left_edge and right_edge
  left_edge = createSprite(width/30,height/2,5,windowWidth);
  right_edge = createSprite(width/1.050,height/2,5,windowWidth);
  left_edge.visible = false;
  right_edge.visible = false;

  //creating the home_play button
  home_play_button = createSprite(width/1.1,height/12,20,20);
  home_play_button.addImage(buttonimg);
  home_play_button.scale = 0.7;
  home_play_button.visible = false;

  //creating the player_leftedge and player_rightedge
  player_leftedge = createSprite(0,height/2,5,windowWidth);
  player_rightedge = createSprite(width/1.0,height/2,5,windowWidth);
  player_leftedge.visible = false;
  player_rightedge.visible = false;

  //creating the gameover 
  gameover = createSprite(width/2,height/4,20,20);
  gameover.addImage(gameoverimg);
  gameover.visible = false;
  gameover.scale = 0.7;

  //creating the reset button 
  resetButton = createSprite(width/2,height/1.5,20,20);
  resetButton.addImage(resetimg);
  resetButton.scale = 0.7;
  resetButton.visible = false;

  //creating the end_home_button 
  end_home_button = createSprite(width/10,height/20,20,20);
  end_home_button.visible = false;
  end_home_button.addImage(blackbuttonimg);
  end_home_button.scale = 0.4
}

//creating the function draw
function draw() {
   createEdgeSprites();

   //creating the gamestate as end 
   if(GAMESTATE === END){
  
     background(gamoverbackimg);

     enemyBulletGrp.destroyEach();
     enemyGroup.destroyEach();
     enemyGroup1.destroyEach();
     compBulletGrp.destroyEach();
     asteroidsGrp.destroyEach();
     planetGroup.destroyEach();
     playerBulletGroup.destroyEach();

     gameover.visible = true;
     player.visible = false;
     computerplayer.visible = false;
     bg.visible = false;
     home_play_button.visible = false;
     resetButton.visible = true;
     end_home_button.visible = true;

     if(mousePressedOver(resetButton)) {
       mouseclicked.play();
       end_home_button.visible = false;
       reset();
       GAMESTATE = PLAY;
     }

     if(mousePressedOver(end_home_button)) {
       mouseclicked.play()
       reset()
       GAMESTATE = HOME;
     }
   }

   //creating the play_INSTRUCTION
  if(GAMESTATE === play_INSTRUCTION){
    background(INSTRUCTION_BACKGROUND);

    logo.visible = false;
    PLAY_BUTTON.visible = false;
    INSTRUCTION.visible = false;
    INSTRUCTION_WORD.visible = true;

    INSTRUCTION_WORD.scale = 1.3;

    textSize(25)
    textStyle(BOLDITALIC);
    fill("red")
    text("THANK U FOR USING SPACE HARRIER.",width/18,height-height/1.5);
    text("TO PLAY THIS GAME U NEED A PC OR LAPTOP",width/18,height-height/1.65);
    text("TO MOVE YOUR SPACESHIP, USE YOUR ARROW KEYS.",width/18,height-height/1.85);
    text("YOUR MAIN MOTO IS TO DESTROY ALL THE SPACESHIP",width/18,height-height/2.05);
    text("BUT REMEMBER BE SAFE FROM ASTERIODS. AND DONT FORGET THAT ENEMY",width/18,height-height/2.3);
    text("SPACESHIP CAN ALSO SHOOT YOU. YOU CAN ALSO SHOOT BY PRESSING SPACE...",width/18,height-height/2.6);
    text("-THANK YOU",width/18,height-height/3.5);
    text("- ALL THE BEST",width/18,height-height/4.3);

    if(mouseIsOver(home_button)) {
      home_button.scale = 0.8
    } else{
      home_button.scale = 0.7
    }
  
      home_button.visible = true;
                                         
     if(mousePressedOver(home_button)) {
       mouseclicked.play();
       GAMESTATE = HOME;
       home_button.visible = false;
     }

    } else if(GAMESTATE === HOME) {
        background(home_backgroundimg);

    gameover.visible = false;
    end_home_button.visible = false;
    resetButton.visible = false;
        
   if(mousePressedOver(INSTRUCTION)) {
    mouseclicked.play();
    GAMESTATE = 4;
   }
  
        demo_rightARRWOKEY.visible = false;
        DEMO_LEFTARROWKEY.visible = false;
        INSTRUCTION_WORD.visible = false;
        home_button.visible = false;

        PLAY_BUTTON.visible = true;
        INSTRUCTION.visible = true;
        logo.visible = true;

    if(mousePressedOver(PLAY_BUTTON)) {
      mouseclicked.play();
      GAMESTATE = PLAY;
      PLAY_BUTTON.visible = false;
    }
  
    if(mouseIsOver(INSTRUCTION)) {    
      INSTRUCTION.scale = 0.8
    } else{
      INSTRUCTION.scale = 0.7
    }

    if(mouseIsOver(PLAY_BUTTON)) {
         PLAY_BUTTON.scale = 0.8
    } else{
         PLAY_BUTTON.scale = 0.7;
    }

    } else if(GAMESTATE === PLAY) {
      background(backgroundimg); 

    spawnSpaceShip();
    spawnBullet();
    //spawnPlanets();
    spawnAsteroids();
    spawnSpaceShip1();

    computerplayer.velocityX = 8;

    if(computerplayer.isTouching(right_edge))  {
          computerplayer.x = computerplayer.x-700
          computerplayer.velocityX = -8
    } 

    if(player.isTouching(player_leftedge)) {
      player.x = player.x + 30;
    }

    if(player.isTouching(player_rightedge)) {
      player.x = player.x - 30;
    }

    if(player_Lifes === 0) {
      gameoversound.play()
      GAMESTATE = END;
    }

    INSTRUCTION.visible = false;
    logo.visible = false;

    bg.visible = true;
    player.visible = true;

    if(player_Friend_Life >= 1) {
       computerplayer.visible = true;
        spawnCompBULLET();
      
    } else {
      computerplayer.visible = false;
    }

    home_play_button.visible = true;
    
    if(bg.y > 1600) {
      bg.y = -10;
    }

  if(keyDown(RIGHT_ARROW)) {
     player.x = player.x + 25;
  }

  if(keyDown(LEFT_ARROW)) {
    player.x = player.x - 25
  }

  if(keyDown("space") && frameCount % 5 === 0) {
    playershootingmp3.play();
    spawnPlayerBullet()
  }

  if(playerBulletGroup.isTouching(enemyGroup)) {
     enemyGroup.destroyEach();
     var rand = Math.round(random(1,4));
     switch(rand) {
       case 1: score = score+50;
               break;
       case 2: score = score+100;
               break;
       case 3: score = score+150;
               break;
       case 4: score = score+200
               break;
               default: break;
     }
  }

 if(enemyBulletGrp.isTouching(playerBulletGroup)) {
     enemyBulletGrp.destroyEach();
     playerBulletGroup.destroyEach();
     var rand1 = Math.round(random(1,4));
     switch(rand1) {
       case 1: score = score+5;
               break;
       case 2: score = score+10;
               break;
       case 3: score = score+15;
               break;
       case 4: score = score+20;
               break;
               default: break;
     }
 }

 if(playerBulletGroup.isTouching(enemyGroup1)) {
  enemyGroup1.destroyEach();
  var rand2 = Math.round(random(1,4));
  switch(rand2) {
    case 1: score = score+50;
            break;
    case 2: score = score+100;
            break;
    case 3: score = score+150;
            break;
    case 4: score = score+200
            break;
            default: break;
  }
}

if (compBulletGrp.isTouching(enemyGroup1)) {
  enemyGroup1.destroyEach()
}

if(compBulletGrp.isTouching(enemyGroup)) {
  enemyGroup.destroyEach()
}

if(compBulletGrp.isTouching(enemyBulletGrp)) {
  enemyBulletGrp.destroyEach();
}

if(enemyBulletGrp.isTouching(player)){
  lifegonemp3.play()
  enemyBulletGrp.destroyEach();
  player_Lifes = player_Lifes - 1;
}

if(asteroidsGrp.isTouching(player)) {
  lifegonemp3.play()
  asteroidsGrp.destroyEach()
  player_Lifes = player_Lifes - 1;
}

if(enemyGroup.isTouching(player)) {
  lifegonemp3.play()
  enemyGroup.destroyEach()
  player_Lifes = player_Lifes - 1;
}

if(enemyGroup1.isTouching(player)) {
  lifegonemp3.play()
  enemyGroup1.destroyEach()
  player_Lifes = player_Lifes - 1;
}

if(enemyBulletGrp.isTouching(computerplayer) && player_Friend_Life >= 1) {
  enemyBulletGrp.destroyEach()
  player_Friend_Life = player_Friend_Life-1;
}

if(asteroidsGrp.isTouching(computerplayer) && player_Friend_Life >= 1) {
  asteroidsGrp.destroyEach()
  player_Friend_Life = player_Friend_Life-1;
}

if(enemyGroup.isTouching(computerplayer) && player_Friend_Life >= 1) {
  enemyGroup.destroyEach()
  player_Friend_Life = player_Friend_Life-1;
}

if(enemyGroup1.isTouching(computerplayer) && player_Friend_Life >= 1) {
  enemyGroup1.destroyEach()
  player_Friend_Life = player_Friend_Life-1;
}

if(mousePressedOver(home_play_button)) {
        mouseclicked.play();
        reset()
        bg.visible = false;
        player.visible = false;
        computerplayer.visible = false;
        home_play_button.visible = false;
         
        GAMESTATE = HOME;
          
        PLAYERLIFE = 10;
        player_Friend_Life = 10;

        enemyBulletGrp.destroyEach();
        enemyGroup.destroyEach();
        enemyGroup1.destroyEach();
        compBulletGrp.destroyEach();
        asteroidsGrp.destroyEach();
        planetGroup.destroyEach();
        playerBulletGroup.destroyEach();
} 
}

drawSprites();

      if(GAMESTATE === HOME) {
        fill(" dark blue");
        textSize(28);
        textFont('Georgia');
        text("PLAY",PLAY_BUTTON.x-27,PLAY_BUTTON.y+7);
        textSize(20)
        text("INSTRUCTIONS",INSTRUCTION.x-72,INSTRUCTION.y+4);
      }

      if(GAMESTATE === play_INSTRUCTION) {
        fill("white");
        textFont('Georgia')
        textSize(28)
        text("HOME",home_button.x-43,home_button.y+8)
      }

      if(GAMESTATE === PLAY) {
        fill("white")
        textSize(30);
        textFont('Italic')
        text("YOUR LIFE: "+player_Lifes,100,40);

        if(player_Friend_Life >= 1) {
             fill("white")
             textSize(30);
             textFont('Italic')
             text("FRIENDS LIFE: "+player_Friend_Life,400,40);
             text("YOUR FRIEND",computerplayer.x-60,computerplayer.y-50)
        } else{
          fill("white")
          textSize(30);
          textFont('Italic');
          text("YOUR FRIEND DIED",400,40)
        }
        fill("white")
        textSize(30);
        textStyle(ITALIC);
        text("SCORE:"+score,800,40);
        text("BACK",home_play_button.x-37,home_play_button.y+8);
        text("YOU",player.x-30,player.y-50);
        textSize(20)
        
      }

      if(GAMESTATE === END) {
        fill("white")
        textSize(30);
        textFont('Italic');
        text("BACK",end_home_button.x-40,end_home_button.y+10);
        textStyle(40);
        text("YOU HAVE SCORED: "+score,width/1.350,end_home_button.y+20);
      }
}


 function spawnSpaceShip() {
    if(frameCount % 22 === 0) {
      var enemy = createSprite(width/2,height-height,10,40);
          enemy.x = Math.round(random(width/0.5,3.3))

      var rand = Math.round(random(1,4));
      switch(rand) {
        case 1: enemy.addImage(spaceshipimg1);
                enemy.scale = 0.3
                break;
        case 2: enemy.addImage(spaceshipimg2);
                enemy.scale = 0.150
                break;
        case 3: enemy.addImage(spaceshipimg3);
                enemy.scale = 0.5
                break;
        case 4: enemy.addImage(spaceshipimg4);
                enemy.scale = 0.450
                break;
        default: break;
      }
      enemy.velocityY = 20;
      enemy.lifetime = 350;
      enemyGroup.add(enemy);

    }
    }

    function spawnBullet() {
      if(frameCount % 20 === 0) {
        var bullet = createSprite(Math.round(random(width/0.5,3.3)),height-height-30,20,20);
        bullet.addImage(fireupimg);
        bullet.velocityY = 20;
        bullet.scale = 0.050
        bullet.lifetime = 50;
        enemyBulletGrp.add(bullet);
      }
    }

    function spawnPlanets() {
      if(frameCount % 350 === 0) {
        var planet = createSprite(width/6,-300,20,20);
        planet.addImage(planetimg);
        planet.velocityY = 15;
        planet.scale = 3;
        planet.depth = player.depth;
        player.depth = player.depth+1;
        player.depth = computerplayer.depth;
        planet.lifetime = 300;
        planetGroup.add(planet);
      }
    }

    function spawnPlayerBullet() {
      var playerbullet = createSprite(player.x,player.y,10,10);
      playerbullet.addImage(firedownimg);
      playerbullet.scale = 0.050;
      playerbullet.depth < player.depth;
      playerbullet.velocityY = -15;
      playerbullet.lifetime = 80;
      playerBulletGroup.add(playerbullet);
    }

    function spawnAsteroids() {
      if(frameCount % 70 === 0) {
         var asteroid = createSprite(Math.round(random(width/0.3,width/3.2)),-10,20,20);
         asteroid.addImage(asteroidsimg);
         asteroid.velocityY = 20;
         asteroid.lifetime = 110;
         asteroid.scale = 0.4;
         asteroidsGrp.add(asteroid)
      }
    }

    function spawnSpaceShip1() {
      if(frameCount % 220 === 0) {
        var enemy = createSprite(width/2,height-height,10,40);
            enemy.x = Math.round(random(width/0.5,3.3))
  
        var rand = Math.round(random(1,4));
        switch(rand) {
          case 1: enemy.addImage(spaceshipimg1);
                  enemy.scale = 0.3
                  break;
          case 2: enemy.addImage(spaceshipimg2);
                  enemy.scale = 0.150
                  break;
          case 3: enemy.addImage(spaceshipimg3);
                  enemy.scale = 0.5
                  break;
          case 4: enemy.addImage(spaceshipimg4);
                  enemy.scale = 0.450
                  break;
          default: break;
        }
        enemy.velocityY = 20;
        enemy.lifetime = 350;
        enemyGroup1.add(enemy);
  
      }
      }

      function spawnCompBULLET() {
        if(frameCount % 10 === 0) {
          playershootingmp3.play();
          var bullet = createSprite(computerplayer.x,computerplayer.y,20,20);
          bullet.addImage(firedownimg);
          bullet.scale = 0.050;
          bullet.velocityY = -15;
          bullet.lifetime = 80;
          compBulletGrp.add(bullet);
        }
      }

      function reset() {
        player_Friend_Life = 10;
        player_Lifes = 10;
        score = 0;

        player.x = width-100;
        player.y = height-100;

        computerplayer.x = width-1400;
        computerplayer.y = height-100;

        enemyBulletGrp.destroyEach();
        enemyGroup.destroyEach();
        enemyGroup1.destroyEach();
        compBulletGrp.destroyEach();
        asteroidsGrp.destroyEach();
        planetGroup.destroyEach();
        playerBulletGroup.destroyEach();
}