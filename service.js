function GameService() {

    var dataStore = this;

    function Target(name, health) {
        this.name = name;
        this.health = health;
        this.items = [];
        this.hits = 0;
    };

    
     var target =  new Target("Tree", 100);
                   
     
   
    /*  new instance of Target is created:

         target = { name: "Tree";
                    health: 100;
                    items = [];
                    hits = 0;
         }

    */
    

    function Item(name, modifier, description) {
        this.name = name;
        this.modifier = modifier;
        this.description = description;
    };




    var items = {
        disease: new Item("disease", 2, "TREE IS SICK!"),
        drought: new Item("drought", 2, "TREE NEEDS WATER!"),
        insects: new Item("insects", 2, "TREE NEEDS INSECTICIDE!")

    }

    dataStore.addMods = function addMods() {
        var total = 0;

        for (i = 0; i < target.items.length; i++) {
            total = total + target.items[i].modifier;
        }
        if (total != 0) {
            return total;
        } else return 1;
    }



    /*dataStore.item = function giveItem(type) {
        var items = Object.keys(items);
        if (items.indexOf(type) = -1) {
            target.items.push(items[type]);
        }
    }*/

    /*dataStore.attack = function makeAttack(type) {
        if (target.attacks[type]) {
            target.health -= target.attacks[types] * this.addMods();
            target.hits += 1;
        }
    }*/


    dataStore.getTarget = function getTarget() {
        var targetCopy = JSON.parse(JSON.stringify(target));
        return targetCopy;
    
    }


    dataStore.easyChop = function easyChop() {
        target.health = (target.health - (1 * this.addMods()));
        target.hits++;
       // target.hits++;
        //  alert(health);
        // update();
    }

    dataStore.mediumChop = function mediumChop() {
        target.health = (target.health - (5 * this.addMods()));
        target.hits++;
      
  
      
      
        // target.hits++;
        //  alert(health);
           
          
        // update();

    }

    dataStore.megaChop = function megaChop() {
        target.health = (target.health - (10 * this.addMods()));
        target.hits++;
        //target.hits++;
        //  alert(health);
       
        // update();


    }
    dataStore.tornado = function tornado() {
        target.health = 0;
        target.hits++;
    }




    dataStore.disease = function disease() {
        target.items.push(items.disease);
    }

    dataStore.drought= function drought() {
        target.items.push(items.drought);
    }

    dataStore.insects = function insects() {
        target.items.push(items.insects);
    }





}










