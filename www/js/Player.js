/// <reference path="../lib/babylonjs/dist/babylon.2.4.d.ts" />
var Player = function(game){
    GameObject.call(this, "player", game);

    // The physics body 
    this.body = null;

    //The player can move in two directions
    this.directions = [0, 0];
    // .. rotation in two directions
    this.rotation = [0, 0];

    // Let's give this player a spherical shape
    var vertexData = BABYLON.VertexData.CreateSphere(16, 0.75, BABYLON.Mesh.DEFAULTSIDE);
    vertexData.applyToMesh(this);

    //The player position is above the ground
    this.position.y = Player.START_HEIGHT;

    // Save this for later
    var _this = this
    this.getScene().registerBeforeRender(function(){
        if(_this.position.y < -10){
            _this.game.reset();
        }
    });
};

Player.prototype = Object.create(GameObject.prototype);
Player.prototype.constructor = Player;