/// <reference path="../lib/babylonjs/dist/babylon.2.4.d.ts" />
var GameObject = function(name, game){
    //Call the super class BABYLON.Mesh
    BABYLON.Mesh.call(this, name, game.scene);

    this.game = game;
    this.scene = game.scene;
};

// Our object is a BABYLON.Mesh
GameObject.prototype = Object.create(BABYLON.Mesh.prototype);
// And its construct is the Game Object function 
GameObject.prototype.constructor = GameObject;