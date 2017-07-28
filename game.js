//var health = 100;
//var name ="tree";
//var hits=0;


function easyChop(){

    tree.health=(tree.health - (1 * addMods()));
  //  alert(health);
    update();
 
}

function mediumChop(){

    tree.health=(tree.health-(5* addMods()));
  //  alert(health);
    update();
 
}

function megaChop(){
    tree.health=(tree.health-(10 * addMods()));
  //  alert(health);
    update();
    
}


function Item (name,modifier,description){
    this.name = name;
    this.modifier=modifier;
    this.description =description;


}
var items ={
    disease: new Item("disease",.5,"Tree is sick!"),
    drought: new Item("drought",.5, "Tree needs water!"),
    insects: new Item("insects",1, "Tree needs insecticide!")

}


//chop();


function Target(name,health,hits){
    this.name =name;
    this.health =health;
    this.hits=hits;
    this.items = [];
}


var tree = new Target("tree", 100,0);

function disease(){
   tree.items.push(items.disease);
}

function drought(){
    tree.items.push(items.drought);
}

function insects(){
    tree.items.push(items.insects);
}

function update(){
  var healthDisplay = document.getElementById("health");
  healthDisplay.innerText=tree.health;
  var hitsDisplay = document.getElementById("hits");
  hitsDisplay.innerText=tree.hits;
  var nameDisplay = document.getElementById("name");
  nameDisplay.innerText=tree.name;
  tree.hits++;
}



function addMods(){
    var total=0;
    for(i=0;i<tree.items.length;i++){
        total =total + tree.items[i].modifier;

    } 
    if (total != 0){
        return total;
    }else return 1;
}



