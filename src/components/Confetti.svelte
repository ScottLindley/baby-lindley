<script>
  import { onMount } from "svelte";

  let canvas;

  onMount(() => {
    const w = (canvas.width = window.innerWidth);
    const h = (canvas.height = window.innerHeight * 2);

    class Confetti {
      constructor() {
        const colors = ["#fde132", "#bb85d2", "#7aab80"];
        const size = Math.random(10) * (w / 60);
        this.x = Math.round(Math.random(10) * w);
        this.y = Math.round(Math.random(10) * h) - h / 2;
        this.rotation = Math.random(10) * 360;
        this.size = size < 15 ? 15 : size;
        this.color = colors[Math.round(Math.random(colors.length) * 10 - 1)];
        this.speed = this.size / 7;
        this.opacity = Math.random(10);
        this.shiftDirection = Math.random(10) > 0.5 ? 1 : -1;
      }

      update() {
        this.y += this.speed;

        if (this.y <= h) {
          this.x += this.shiftDirection / 5;
          this.rotation += (this.shiftDirection * this.speed) / 100;
        } else {
          this.y = h;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(
          this.x,
          this.y,
          this.size,
          this.rotation,
          this.rotation + Math.PI / 2
        );
        ctx.lineTo(this.x, this.y);
        ctx.closePath();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const ctx = canvas.getContext("2d");
    const numPieces = Math.floor(w / 5);
    const confettiPieces = new Array(numPieces).fill().map(_ => new Confetti());

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, w, h);

      confettiPieces.forEach(c => {
        c.update();
        c.draw();
      });
    };

    animate();
  });
</script>

<style>
  canvas {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>

<canvas bind:this={canvas} id="confettiCanvas" />
