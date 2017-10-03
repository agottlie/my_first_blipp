var blipp = require('blippar').blipp;
scene = blipp.addScene();

// Global variables
var mW = blipp.getMarker().getWidth();
var mH = blipp.getMarker().getHeight();
var sW = blipp.getScreenWidth() * 1.003;
var sH = blipp.getScreenHeight() * 1.003; 

// Scene creation
scene.onCreate = function() {

    var defaultLight    = scene.addLight('light');
    var defaultMaterial = scene.addMaterial('material');

    var Plane = scene.addSprite().setTexture('Flower.jpg').setScale(mW, mH, 1)
                                 .setLight(defaultLight).setMaterial(defaultMaterial);
    Plane.onTouchEnd = function() { this.setHidden(true) };
 
    createCorner(  0,  sW/2,  sH/2);
    createCorner( 90, -sW/2,  sH/2);
    createCorner(180, -sW/2, -sH/2);
    createCorner(270,  sW/2, -sH/2);
}

// User functions
function createCorner(rotZ, posX, posY) { 
    var sprite = scene.getScreen().addSprite()
                                  .setTexture(['Corner_C.jpg','Corner_A.png'])
                                  .setTranslation(posX, posY, 0)
                                  .setRotation(0, 0, rotZ)
                                  .setScale(sW/5)
                                  .setType('aura')               
                                  .setHAlign('right')
                                  .setVAlign('top')
                                  .setClickable(false);
    return sprite; 
}

scene.onShow = function() {
    console.log("Marker: " + blipp.getMarker().getWidth() + "*" + blipp.getMarker().getHeight() + " px");
    console.log("Screen: " + blipp.getScreenWidth() + "*" + blipp.getScreenHeight() + " px");
}