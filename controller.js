function GameController() {
    var dataStore = new GameService();
   

    function update() {
        var target = dataStore.getTarget();
        var healthDisplay = document.getElementById("health");
        healthDisplay.innerText = target.health;
        var hitsDisplay = document.getElementById("hits");
        hitsDisplay.innerText = target.hits;
      


        if (target.health <= 0) {
            document.getElementById("tree").classList.add("rotateOutDownRight");
            document.getElementById("tree-fall").play();
            var gameOverDisplay = document.getElementById("game-over");
            gameOverDisplay.innerText = "Game Over!";
            gameOverDisplay.classList.add("flash");
            document.getElementById("easy").setAttribute('disabled', 'disabled');
            document.getElementById("medium").setAttribute('disabled', 'disabled');
            document.getElementById("mega").setAttribute('disabled', 'disabled');
            healthDisplay.innerText = 0;
            hitsDisplay.innerText = 0;
        }


    }
        this.easyChop = function easyChop() {
            dataStore.easyChop();
            setTimeout(this.playEasyChop,750);
            var smallAxe = document.getElementById("axe");
            smallAxe.setAttribute("src", "smallaxe.png");
            smallAxe.style.right = 14 + "vw";
            setTimeout(update, 1000);
        }

        this.mediumChop = function mediumChop() {
            dataStore.mediumChop();
            setTimeout(this.playMediumChop,750);
            var mediumAxe = document.getElementById("axe");
            mediumAxe.setAttribute("src", "mediumaxe.png");
            mediumAxe.style.right = 13.15 + "vw";
            setTimeout(update, 1000);
        }

        this.megaChop = function megaChop() {
            dataStore.megaChop();
            setTimeout(this.playMegaChop,750);
            var megaAxe = document.getElementById("axe");
            megaAxe.setAttribute("src", "megaaxe.png");
            megaAxe.style.right = 12 + "vw";
            setTimeout(update, 1000);
        }

        this.disease = function disease() {
            dataStore.disease();
            var gameOverDisplay = document.getElementById("game-over");
            gameOverDisplay.innerText += "..." + "TREE IS DISEASED!"
            document.getElementById("disease-button").setAttribute('disabled', 'disabled');
            document.getElementById("disease-button").style.color = "white";

        }

        this.drought = function drought() {
            dataStore.drought();
            var gameOverDisplay = document.getElementById("game-over");
            gameOverDisplay.innerText += "..." + "TREE NEEDS WATER!"
            document.getElementById("drought-button").setAttribute('disabled', 'disabled');
            document.getElementById("drought-button").style.color = "white";

        }

        this.insects = function insects() {
            dataStore.insects();
            var gameOverDisplay = document.getElementById("game-over");
            gameOverDisplay.innerText += "..." + "TREE NEEDS INSECTICIDE!";
            document.getElementById("insects-button").setAttribute('disabled', 'disabled');
            document.getElementById("insects-button").style.color = "white";

        }


        this.reset = function reset() {
            location.reload();
        }

        this.playEasyChop = function playEasyChop() {

            document.getElementById("easy-chop").play();
        }

        this.playMediumChop = function playMediumChop() {

            document.getElementById("medium-chop").play();
        }

        this.playMegaChop = function playMegaChop() {

            document.getElementById("mega-chop").play();
        }

        this.selectTree1 = function selectTree1() {
            var nameDisplay = document.getElementById("name");
            nameDisplay.innerText = "TREE1";
            document.getElementById("tree").src = "tree1.png";
            document.getElementById("select-message").innerText ="";
            document.getElementById("tree2").setAttribute('disabled', 'disabled');
            document.getElementById("tree2").style.color = "white";
            document.getElementById("tree3").setAttribute('disabled', 'disabled');
            document.getElementById("tree3").style.color = "white";
        }

         this.selectTree2 = function selectTree2() {
            var nameDisplay = document.getElementById("name");
            nameDisplay.innerText = "TREE2";
            document.getElementById("tree").src = "tree2.png";
            document.getElementById("select-message").innerText ="";
            document.getElementById("tree1").setAttribute('disabled', 'disabled');
            document.getElementById("tree1").style.color = "white";
            document.getElementById("tree3").setAttribute('disabled', 'disabled');
            document.getElementById("tree3").style.color = "white";
        }
 

        this.selectTree3 = function selectTree3() {
            var nameDisplay = document.getElementById("name");
            nameDisplay.innerText = "TREE3";
            document.getElementById("tree").src = "tree3.png";
            document.getElementById("select-message").innerText ="";
            document.getElementById("tree1").setAttribute('disabled', 'disabled');
            document.getElementById("tree1").style.color = "white";
            document.getElementById("tree2").setAttribute('disabled', 'disabled');
            document.getElementById("tree2").style.color = "white";
        }

}






        jQuery(document).ready(function ($) {



            var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

            var animation = "animated flip";

            var animation2 = "shake";

            //var animation3="hinge";

            //   if (tree.health <= 0){

            //  $("#tree").addClass(animation3);


            //  }
            $(".chop").on("click", function () {




                $("#axe").addClass(animation).one(animationEnd, function () {

                    $("#axe").removeClass(animation);

                    $("#tree").addClass(animation2).one(animationEnd, function () {

                        $("#tree").removeClass(animation2);

                        //               if (tree.health <= 0){

                        //    $("#tree").addClass("rotateOutDownRight");}

                    });



                });
            });

        });

    



























