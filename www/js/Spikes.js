/// <reference path="../lib/babylonjs/dist/babylon.2.4.d.ts" />
var Spikes = function(game, number){
    GameObject.call(this, "spike", game);

    this.number = number;
    this.sharpPart = BABYLON.Mesh.CreateCylinder("cylinder", 
        0.5, 0.5, 0.5, 6, 1, this.getScene());

    this.sharpPart.parent = this;
}

Spikes.prototype = Object.create(GameObject.prototype);
Spikes.prototype.constructor = Spikes;

Spikes.prototype.updateMaterial = function(mat){
    this.sharpPart.material = mat;
}

Spikes.prototype.delete = function(){
    this.dispose();
}