let canvas, ctx, wave, theta;

window.onload = () => {
    canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx = canvas.getContext("2d");

    wave = {
        y: window.innerHeight / 2,
        length: 200000,
        amplitude: 25,
        speed: 0.2
    };

    theta = 0;
    window.requestAnimationFrame(animation);
    setTimeout(palmAnimation, 4000);
};

function animation() {
    window.requestAnimationFrame(animation);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.strokeStyle = `rgb(256, 256, 256)`;
    ctx.lineWidth = 5;
    ctx.moveTo(window.innerWidth / 200, window.innerHeight / 2);
    for (let i = window.innerWidth / 200; i < window.innerWidth / 2; i++) {
        ctx.lineTo(i, wave.y + Math.sin(i * wave.length + theta) * wave.amplitude);
    }
    ctx.stroke();
    theta += wave.speed;
}


function palmAnimation() {
    document.getElementsByClassName('canvas-animation')[0].style.display = "none";
    document.getElementsByClassName('palm-animation')[0].style.display = "block";
    document.getElementsByClassName('palm-path')[0].style.animationPlayState = "running";
    document.getElementById('palm-1').style.animationPlayState = "running";
    setTimeout(semicircle, 2000);
}

function semicircle() {
    document.getElementsByClassName('palm-animation')[0].style.display = "none";
    document.getElementsByClassName('circle-animation')[0].style.display = "block";
    document.getElementsByClassName('cls-2')[0].style.animationPlayState = "running";
    document.getElementsByClassName('cls-1')[0].style.animationPlayState = 'running';

}