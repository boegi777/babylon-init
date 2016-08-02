/// <reference path="../lib/babylonjs/dist/babylon.2.4.d.ts" />
window.addEventListener('DOMContentLoaded', function () {
    new Game("gameCanvas");
}, false);

var Game = function (canvasId) {
    var canvas = document.getElementById(canvasId);
    this.engine = new BABYLON.Engine(canvas, true);

    // BABYLON Scene creation
    this.scene = this._initScene(this.engine);

    //Contains all 3D models
    this.assets = [];

    // The current level
    this.currentLevel = 0;

    //The player object
    this.player = null;

    //The level being played
    this.level = null;

    // Init the game 
    this._initGame();

    var _this = this;
    this.engine.runRenderLoop(function () {
        _this.scene.render();
    });
}

Game.prototype._initScene = function (engine) {
    //BABYLON Scene creation
    var scene = new BABYLON.Scene(engine);
    //The camera, necessary see the world
    var camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(2.5, 20, -12), scene);
    camera.rotation = new BABYLON.Vector3(Math.PI / 3.5, 0, 0);
    camera.attachControl(engine.getRenderingCanvas());

    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;

    return scene;
}

Game.prototype._initGame = function(){
    // The player object
    this.player = new Player(this);

    var levels = [
        [
            ['S', 0, 0, 0,-1, 0, 0, 0,'-', 1, 0],
            [ 0, 0, 0,-1, 0,-1,'-', 0,-1, 0,'F']
        ]
    ];

    // Level creation
    this.level = Level.FromInts(levels[this.currentLevel], this);

    //the player position is set to the start position of the level
    this.player.position = this.level.start.position.clone();

    this.player.position.y = 2;

    //Activate debug Layer
    this.scene.debugLayer.show();
}