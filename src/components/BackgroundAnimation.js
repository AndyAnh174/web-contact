import React, { useRef, useEffect } from 'react';
import p5 from 'p5';
import penguinImage from '../data/images/penguin.png'; // Đảm bảo đường dẫn đến hình ảnh đúng

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      let shapes = [];
      let img;

      p.preload = () => {
        img = p.loadImage(penguinImage);
      };

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasRef.current);
        for (let i = 0; i < 20; i++) {
          shapes.push(new Shape(p, img));
        }
      };

      p.draw = () => {
        p.background('#1a202c');
        for (let shape of shapes) {
          shape.update();
          shape.display();
        }
      };

      class Shape {
        constructor(p, img) {
          this.p = p;
          this.img = img;
          this.x = p.random(p.width);
          this.y = p.random(p.height);
          this.size = p.random(30, 50);
          this.speed = p.random(1, 3);
          this.type = p.random(['triangle', 'square', 'penguin']);
        }

        update() {
          this.x += this.speed;
          if (this.x > this.p.width + this.size) {
            this.x = -this.size;
          }
        }

        display() {
          this.p.fill('#ffffff');
          if (this.type === 'triangle') {
            this.p.triangle(this.x, this.y, this.x + this.size, this.y, this.x + this.size / 2, this.y - this.size);
          } else if (this.type === 'square') {
            this.p.rect(this.x, this.y, this.size, this.size);
          } else if (this.type === 'penguin') {
            this.p.image(this.img, this.x, this.y, this.size, this.size * 1.2);
          }
        }
      }
    };

    new p5(sketch);
  }, []);

  return <div ref={canvasRef} className="absolute inset-0" />;
};

export default BackgroundAnimation;
