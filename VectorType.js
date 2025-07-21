let vector2D = [3, 4]; // A 2D vector
let vector3D = [1, 2, 3]; // A 3D vector

class Vector {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }

      add(otherVector) {
        return new Vector(this.x + otherVector.x, this.y + otherVector.y);
      }

      magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      }
      // ... other vector operations
    }

    let v1 = new Vector(1, 2);
    let v2 = new Vector(3, 4);
    let sum = v1.add(v2); // sum is a new Vector(4, 6)
    let vectorData = new Float32Array(3);
    vectorData[0] = 1.0;
    vectorData[1] = 2.5;
    vectorData[2] = -0.7;