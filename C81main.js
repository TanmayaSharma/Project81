canvas=document.getElementById("myCanvas");
pencil=canvas.getContext("2d");

pencil.beginPath();
pencil.strokeStyle="blue";
pencil.lineWidth=4;
pencil.arc(200,100,40,0,360);
pencil.stroke();

pencil.beginPath();
pencil.strokeStyle="black";
pencil.lineWidth=4;
pencil.arc(300,100,40,0,360);
pencil.stroke();

pencil.beginPath();
pencil.strokeStyle="red";
pencil.lineWidth=4;
pencil.arc(400,100,40,0,360);
pencil.stroke();

pencil.beginPath();
pencil.strokeStyle="yellow";
pencil.lineWidth=4;
pencil.arc(250,150,40,0,360);
pencil.stroke();

pencil.beginPath();
pencil.strokeStyle="green";
pencil.lineWidth=4;
pencil.arc(350,150,40,0,360);
pencil.stroke();

pencil.beginPath();
pencil.strokeStyle="yellow";
pencil.lineWidth=4;
pencil.rect(150,50,400,200);
pencil.stroke();

function clearcanvas()
{

  pencil.clearRect(0,0,canvas.height,canvas.width),  

}