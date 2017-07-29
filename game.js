
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

function update(){
  var healthDisplay = document.getElementById("health");
  healthDisplay.innerText=tree.health;
  var hitsDisplay = document.getElementById("hits");
  hitsDisplay.innerText=tree.hits;
  var nameDisplay = document.getElementById("name");
  nameDisplay.innerText=tree.name;
  tree.hits++;
}

function Item (name,modifier,description){
    this.name = name;
    this.modifier=modifier;
    this.description =description;


}
var items ={
    disease: new Item("disease",2,"Tree is sick!"),
    drought: new Item("drought",2, "Tree needs water!"),
    insects: new Item("insects",2, "Tree needs insecticide!")

}

function Target(name,health,hits){
    this.name =name;
    this.health =health;
    this.hits=hits;
    this.items = [];
}


var tree = new Target("tree", 100,0);

/*function draw(itemArr) {
    
    var buttonTemplate = '';

    for (var i = 0; i < tree.items.length; i++) {
        var item = tree.items[i];
        //check number of pets, to determine status
        
        buttonTemplate += `
       <button onclick="${item}()">${item}!</button>
        `
    }
    document.getElementById('mod-buttons').innerHTML = buttonTemplate;
}

draw(tree.items);*/

function disease(){
   tree.items.push(items.disease);
   document.getElementById("disease-button").setAttribute('disabled','disabled');
   document.getElementById("disease-button").style.color = "white";
  
}

function drought(){
    tree.items.push(items.drought);
    document.getElementById("drought-button").setAttribute('disabled','disabled');
    document.getElementById("drought-button").style.color = "white";
  
}

function insects(){
    tree.items.push(items.insects);
    document.getElementById("insects-button").setAttribute('disabled','disabled');
    document.getElementById("insects-button").style.color = "white";
  
}

function addMods(){
    var total=0;
    //limiting the modifiers evaluated to 3 
    for(i=0;i<tree.items.length;i++){
        total =total + tree.items[i].modifier;
    } 
    if (total != 0){
        return total;
    }else return 1;
}



function reset(){
    location.reload();
}
