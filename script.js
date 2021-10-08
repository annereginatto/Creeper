var screen = document.querySelector("canvas");
var brush = screen.getContext("2d");

//fundo
brush.fillStyle = "#1c1c1c";
brush.fillRect(0, 0, 600, 400);

//cabeça
brush.fillStyle = "darkgreen";
brush.fillRect(120, 50, 350, 300);

brush.fillStyle = "black";
//olho esquerdo
brush.fillRect(170, 110, 90, 90);
//olho direito
brush.fillRect(330, 110, 90, 90);
//nariz
brush.fillRect(260, 200, 70, 100);
//boca
brush.fillRect(220, 240, 40, 110);
brush.fillRect(330, 240, 40, 110);