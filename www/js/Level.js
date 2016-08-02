/// <reference path="../lib/babylonjs/dist/babylon.2.4.d.ts" />
var Level = function(game){
    this.scene = game.scene;
    this.game = game;

    //The starting position in this level
    this.start = null;

    //Each keys of the current level
    this.keys = [];

    //Each spikes of the current level
    this.spikes = []

    //The level blocks
    this.blocks = [];
}

/**
 * Delete the current level
 */
Level.prototype.dispose = function(){
    this.blocks.forEach(function(){
        b.dispose();
    });

    this.keys.forEach(function(k){
        k.delete();
    });
}

Level.FromInts = function(matrix, game){
    var level = new Level(game);


    for(var z=0; z<matrix.length; z++){
        for(var x=0; x<matrix[z].length; x++){

            var type = matrix[z][x];
            var block = null;
            if(type == Block.TYPES.NOTHING){
                //Do nothing
            } else {
                //Creates a blocks
                block = new Block(x, z, game);
                level.blocks.push(block);
                if(type == Block.TYPES.NORMAL){
                    //Useless to do more
                } else if (type == Block.TYPES.START){
                    level.start = block;
                } else if (type == Block.TYPES.FINISH) {
                    var a = new Apple(game);
                    a.position = block.position.clone();
                    a.position.y = 1;
                    level.finish = block;
                } else {
                    //this block si a spike or a key
                    if(type > 0){
                        // It's a spike
                        var s = new Spikes(game, Math.abs(type));
                        s.position = new BABYLON.Vector3(x, 0.5, -z);
                        level.spikes.push(s);
                    } else {
                        // It's a key
                        var k = new Key(game, Math.abs(type));
                        k.position = new BABYLON.Vector3(x, 0.75, -z);
                        level.keys.push(k);
                    }
                }
            }
        }
    }

    //For all keys link it to its spike
    for (var k=0; k<level.keys.length; k++){
        var currentKey = level.keys[k];
        for(var s=0; s<level.spikes.length; s++){
            var currentSpike = level.spikes[s];

            if(currentSpike.number == currentKey.number){
                currentKey.link(currentSpike);
            }
        }
    }

    return level;
}