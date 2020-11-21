canvas= document.getElementById('myCanvas');

ctx= canvas.getContext("2d");

var purpleCar_x = 10;
var purpleCar_y = 10;
var car_width = 100;
var car_height = 90;
var purpleCar_image = "purpleCar.png";
var redCar_image = "redCar.png";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src= background_image;
    
    purpleCar_imgTag = new Image();
    purpleCar_imgTag.onload = uploadpurpleCar;
    purpleCar_imgTag.src = purpleCar_image;
    }
    
    function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
    
    }

    function uploadpurpleCar(){
        ctx.drawImage(purpleCar_imgTag, _x, purpleCar_y, purpleCar_width, purpleCar_height);
    }

    window.addEventListener("keydown", my_keydown);

    function my_keydown(e){
        keyPressed = e.keyCode;
        console.log(keyPressed);
    }

        if(keyPressed == '38'){
            up()
            console.log("Purple Car = Up");
        }
  

    if (keyPressed == '39'){
        right();
        console.log("Purple Car = right");
    }

    if (keyPressed == '37'){
        left()
        console.log("Purple Car = left");
    }

    if (keyPressed == '40'){
        down()
        console.log("Purple Car = Down");

        function left(){
            if (purpleCar_x >= 0){
                purpleCar_x -= 10;
                console.log("x position =" + purpleCar_x, "y position =" + purpleCar_y);
                uploadBackground();
                uploadpurpleCar();
            }
        }
    }

    function up(){
        if(purpleCar_x >= 0){
            purpleCar_x -= 10;
            console.log("x position =" + purpleCar_x, "y position =" + purpleCar_y);
            uploadBackground();
            uploadRover();
        }

        function right(){
            if(purpleCar_x <= 700){
                purpleCar_x += 10;
                console.log("x position =" + purpleCar_x, "y position =" + purpleCar_y);
                uploadBackground(); 
                uploadpurpleCar();   
            }
        }

        function down(){
            if(rover_y <= 500){
                rover_y += 10;
                console.log("x position =" + purpleCar_x, "y position =" + purpleCar_y);
                uploadBackground();
                uploadRover();
            }