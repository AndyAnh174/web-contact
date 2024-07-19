import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      let shapes = [];

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasRef.current);
        for (let i = 0; i < 20; i++) {
          shapes.push(new Shape(p));
        }
      };

      p.draw = () => {
        p.background('#1a202c'); // Màu nền tối
        for (let shape of shapes) {
          shape.update();
          shape.display();
        }
      };

      class Shape {
        constructor(p) {
          this.x = p.random(p.width);
          this.y = p.random(p.height);
          this.size = p.random(10, 30);
          this.speed = p.random(1, 3);
          this.type = p.random(['triangle', 'square', 'penguin']);
        }

        update() {
          this.x += this.speed;
          if (this.x > p.width + this.size) {
            this.x = -this.size;
          }
        }

        display() {
          p.fill('#ffffff'); // Màu trắng cho các hình
          if (this.type === 'triangle') {
            p.triangle(this.x, this.y, this.x + this.size, this.y, this.x + this.size / 2, this.y - this.size);
          } else if (this.type === 'square') {
            p.rect(this.x, this.y, this.size, this.size);
          } else {
            // Vẽ hình chim cánh cụt đơn giản (bạn có thể tùy chỉnh thêm)
            p.ellipse(this.x + this.size / 2, this.y, this.size, this.size * 1.2); 
            p.fill('#000000'); // Màu đen cho mắt
            p.ellipse(this.x + this.size / 3, this.y - this.size / 4, this.size / 5, this.size / 5);
          }
        }
      }
    };

    new p5(sketch);
  }, []);

  return <div ref={canvasRef} />;
};

export default BackgroundAnimation;