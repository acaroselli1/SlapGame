
function easyChop(){
    var smallAxe = document.getElementById("axe");
    smallAxe.setAttribute("src","smallaxe.png");
    smallAxe.style.right = 14 + "vw";
    tree.health=(tree.health - (1 * addMods()));
  //  alert(health);
    setTimeout(update, 1000);
   // update();
 
}

function mediumChop(){
    var mediumAxe =document.getElementById("axe");
    mediumAxe.setAttribute("src","mediumaxe.png");
    mediumAxe.style.right= 13.15 + "vw";
    tree.health=(tree.health-(5* addMods()));
  //  alert(health);
    setTimeout(update, 1000);
  // update();
 
}

function megaChop(){
    var megaAxe = document.getElementById("axe");
    megaAxe.setAttribute("src","megaaxe.png");
    megaAxe.style.right= 12 + "vw";
    tree.health=(tree.health-(10 * addMods()));
  //  alert(health);
    setTimeout(update, 1000);
  // update();
 
    
}

function update(){
  var healthDisplay = document.getElementById("health");
  healthDisplay.innerText=tree.health;
  var hitsDisplay = document.getElementById("hits");
  hitsDisplay.innerText=tree.hits;
  var nameDisplay = document.getElementById("name");
  nameDisplay.innerText=tree.name;
  tree.hits++;
  if (tree.health <= 0){
      document.getElementById("tree").classList.add("rotateOutDownRight");
      document.getElementById("tree-fall").play();
      var gameOverDisplay = document.getElementById("game-over");
      gameOverDisplay.innerText="Game Over!";
      gameOverDisplay.classList.add("flash");
      document.getElementById("easy").setAttribute('disabled','disabled');
      document.getElementById("medium").setAttribute('disabled','disabled');
      document.getElementById("mega").setAttribute('disabled','disabled');
      healthDisplay.innerText=0;
      hitsDisplay.innerText=0;
      tree.hits = 0;
  }
}

function Item (name,modifier,description){
    this.name = name;
    this.modifier=modifier;
    this.description =description;


}
var items ={
    disease: new Item("disease",2,"TREE IS SICK!"),
    drought: new Item("drought",2, "TREE NEEDS WATER!"),
    insects: new Item("insects",2, "TREE NEEDS INSECTICIDE!")

}

function Target(name,health,hits){
    this.name =name;
    this.health =health;
    this.hits=hits;
    this.items = [];
}


var tree = new Target("tree", 100,0);

// // To initialize on screen.
 update();

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
   var gameOverDisplay = document.getElementById("game-over");
   gameOverDisplay.innerText+="..." + items.disease.description;
   document.getElementById("disease-button").setAttribute('disabled','disabled');
   document.getElementById("disease-button").style.color = "white";
  
}

function drought(){
    tree.items.push(items.drought);
    var gameOverDisplay = document.getElementById("game-over");
    gameOverDisplay.innerText +="..." + items.drought.description;
    document.getElementById("drought-button").setAttribute('disabled','disabled');
    document.getElementById("drought-button").style.color = "white";
  
}

function insects(){
    tree.items.push(items.insects);
    var gameOverDisplay = document.getElementById("game-over");
    gameOverDisplay.innerText+="..." + items.insects.description;
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

function playEasyChop(){
    
    document.getElementById("easy-chop").play();
}

function playMediumChop(){
    
    document.getElementById("medium-chop").play();
}

function playMegaChop(){
    
    document.getElementById("mega-chop").play();
}



jQuery(document).ready(function($){
	
    

var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

var animation = "animated flip";

var animation2= "shake";

//var animation3="hinge";

  //   if (tree.health <= 0){

      //  $("#tree").addClass(animation3);

    
   //  }
	$(".chop").on("click", function(){
      

       
     
		$("#axe").addClass(animation).one(animationEnd, function(){
                   
                     $("#axe").removeClass(animation);

 $("#tree").addClass(animation2).one(animationEnd, function(){
                   
                     $("#tree").removeClass(animation2);

      //               if (tree.health <= 0){

     //    $("#tree").addClass("rotateOutDownRight");}

       });



        });
    });
            
});