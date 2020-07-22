class Form{
    constructor(){
        this.input=createInput("ENTER NAME");
        this.button=createButton("START GAME");

        this.greet=createElement("h5");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greet.hide();
    }
    display(){
        var title=createElement("h2");
        title.html("Running  Game");
        title.position(displayWidth/2-50,0);

        
        this.input.position(displayWidth/2-50,displayHeight/2-80);

        this.button.position(displayWidth/2+5,displayHeight/2+40);

        this.button.mousePressed(()=>{
                this.input.hide();
                this.button.hide();

                player.name=this.input.value();

                playerCount++;
                player.index=playerCount;
                player.update();
                player.updateCount(playerCount);

                this.greet.html("Welcome " +player.name);
                this.greet.position(130,160);
                }
        )
    }
}