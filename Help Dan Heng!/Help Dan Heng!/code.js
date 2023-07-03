var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","d7233f8d-f000-42c3-8c86-2fa786aadbe4","1e31dbe8-2b28-4731-bbd2-3a8075811e37","2eeb71ee-c28f-45cd-821d-15b262a03f61","ed3e4a2c-65ed-4148-a093-a3c1d6e323e5","9681bafa-5eff-4e34-8a92-8b22c40179fd","eb7cee72-82c6-4dc9-b18b-6305f5956568"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"fK3aQDwD7zjnaFOl8O4kqII5vBLv81gy","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"HhSB3z6DdW4jQeF9sdiNQ_Bdwqq96Cj0","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"yOvcxuOfDjlRyDmPJufdrgL_dNzcB_eY","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"d7233f8d-f000-42c3-8c86-2fa786aadbe4":{"name":"clouds","sourceUrl":null,"frameSize":{"x":564,"y":1001},"frameCount":1,"looping":true,"frameDelay":12,"version":"IlL9K2wWgZcpqZyoTxDJuKni3Flnr0_i","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":564,"y":1001},"rootRelativePath":"assets/d7233f8d-f000-42c3-8c86-2fa786aadbe4.png"},"1e31dbe8-2b28-4731-bbd2-3a8075811e37":{"name":"Bao 1","sourceUrl":"assets/v3/animations/eqzEAwhnZ89MPqQQm0O1g5DFiePkI0P0V-7PHYLeqmU/1e31dbe8-2b28-4731-bbd2-3a8075811e37.png","frameSize":{"x":564,"y":477},"frameCount":1,"looping":true,"frameDelay":4,"version":"e8d_blkq9edxoGB5gR6xr53e4jgRJViV","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":564,"y":477},"rootRelativePath":"assets/v3/animations/eqzEAwhnZ89MPqQQm0O1g5DFiePkI0P0V-7PHYLeqmU/1e31dbe8-2b28-4731-bbd2-3a8075811e37.png"},"2eeb71ee-c28f-45cd-821d-15b262a03f61":{"name":"Bao 2","sourceUrl":"assets/v3/animations/eqzEAwhnZ89MPqQQm0O1g5DFiePkI0P0V-7PHYLeqmU/2eeb71ee-c28f-45cd-821d-15b262a03f61.png","frameSize":{"x":564,"y":477},"frameCount":1,"looping":true,"frameDelay":4,"version":"J9cuMiux8o900Ld8jqHzNnImoK8EAKmH","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":564,"y":477},"rootRelativePath":"assets/v3/animations/eqzEAwhnZ89MPqQQm0O1g5DFiePkI0P0V-7PHYLeqmU/2eeb71ee-c28f-45cd-821d-15b262a03f61.png"},"ed3e4a2c-65ed-4148-a093-a3c1d6e323e5":{"name":"Heroe","sourceUrl":"assets/v3/animations/eqzEAwhnZ89MPqQQm0O1g5DFiePkI0P0V-7PHYLeqmU/ed3e4a2c-65ed-4148-a093-a3c1d6e323e5.png","frameSize":{"x":564,"y":477},"frameCount":1,"looping":true,"frameDelay":4,"version":"kmu8lYLQObc9nRG4_iOqCV3xxYgLezss","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":564,"y":477},"rootRelativePath":"assets/v3/animations/eqzEAwhnZ89MPqQQm0O1g5DFiePkI0P0V-7PHYLeqmU/ed3e4a2c-65ed-4148-a093-a3c1d6e323e5.png"},"9681bafa-5eff-4e34-8a92-8b22c40179fd":{"name":"Malo","sourceUrl":"assets/v3/animations/eqzEAwhnZ89MPqQQm0O1g5DFiePkI0P0V-7PHYLeqmU/9681bafa-5eff-4e34-8a92-8b22c40179fd.png","frameSize":{"x":564,"y":477},"frameCount":1,"looping":true,"frameDelay":4,"version":"ydFCpbJtFD3WrFRr_E6oxPCDgsvCtGJH","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":564,"y":477},"rootRelativePath":"assets/v3/animations/eqzEAwhnZ89MPqQQm0O1g5DFiePkI0P0V-7PHYLeqmU/9681bafa-5eff-4e34-8a92-8b22c40179fd.png"},"eb7cee72-82c6-4dc9-b18b-6305f5956568":{"name":"cloud_1","sourceUrl":"assets/api/v1/animation-library/gamelab/SFSiRCSKpY8XgbZ8r02qMYlqqmsdNbrh/category_icons/cloud.png","frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":2,"version":"SFSiRCSKpY8XgbZ8r02qMYlqqmsdNbrh","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/api/v1/animation-library/gamelab/SFSiRCSKpY8XgbZ8r02qMYlqqmsdNbrh/category_icons/cloud.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var hero = createSprite(200,345,200,345);
hero.shapeColor="red";

var enemy1 = createSprite(200,250,10,10);
enemy1.shapeColor="red";

var enemy2 = createSprite(200,150,10,10);
enemy2.shapeColor="red";

var enemy3 = createSprite(200,50,10,10);
enemy3.shapeColor="red";

var net = createSprite(200,5,200,20);
net.shapeColor="white";



var goal =0;
var death = 0;

hero.setAnimation("Heroe");
hero.scale=".17";
enemy1.setAnimation("Bao 2");
enemy1.scale=".1";
enemy2.setAnimation("Bao 1");
enemy2.scale=".1";
enemy3.setAnimation("Bao 2");
enemy3.scale=".1";

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);

function draw() {
  
  background("#1B7161");

createEdgeSprites();

  textSize(20);
  fill("black");
  text("Goals: "+goal,300,350);

if (enemy1.bounceOff(leftEdge)){
  enemy1.setAnimation("Bao 1");
}
if (enemy1.bounceOff(rightEdge)){
  enemy1.setAnimation("Bao 2");
}
if (enemy2.bounceOff(rightEdge)){
  enemy2.setAnimation("Bao 2");
}
if (enemy2.bounceOff(leftEdge)){
  enemy2.setAnimation("Bao 1");
}
if (enemy3.bounceOff(leftEdge)){
  enemy3.setAnimation("Bao 1");
}
if (enemy3.bounceOff(rightEdge)){
  enemy3.setAnimation("Bao 2");
}

if(keyDown(UP_ARROW)){
  hero.y=hero.y-5;
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+5;
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-5;
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+5;
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3");
  hero.x=200;
  hero.y=350;
  death = death+1;
}

if(hero.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  hero.x=200;
  hero.y=345;
  goal=goal+1;
}

  textSize(20);
  fill("black");
  text("Deaths: "+death,40,350);
  
drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
