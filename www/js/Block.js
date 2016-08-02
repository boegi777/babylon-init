/// <reference path="../lib/babylonjs/dist/babylon.2.4.d.ts" />
var Block = function(x, z, game){
    GameObject.call(this, "block", game);

    var vertexData = BABYLON.VertexData.CreateBox(1, BABYLON.Mesh.DEFAULTSIDE);
    vertexData.applyToMesh(this);

    this.position.x = x;
    this.position.z = -z;
}

Block.prototype = Object.create(GameObject.prototype);

Block.prototype.constructor = Block;

Block.TYPES = {
    NOTHING : '-',
    NORMAL : 0,
    START: 'S',
    FINISH: 'F'
};