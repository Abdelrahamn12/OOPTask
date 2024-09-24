
class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error("Cannot instniate Shape dircty.");
        }
    }
}
class Rectangle extends Shape { // inhert
    static objectCount = 0;

    constructor(width, height) {
        super(); 
        this.width = width;
        this.height = height;
        Rectangle.objectCount++; 
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
    displayInfo() {
        console.log(`Rectangle Info:
        Width: ${this.width}, 
        Height: ${this.height}, 
        Area: ${this.calculateArea()}, 
        Perimeter: ${this.calculatePerimeter()}`);
    }

    toString() {
        return `Rectangle Info:
        Width: ${this.width}, 
        Height: ${this.height}, 
        Area: ${this.calculateArea()}, 
        Perimeter: ${this.calculatePerimeter()}`;
    }

    static getObjectCount() {
        return Rectangle.objectCount;
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }

    toString() { 
        return `Square Info:
        Side: ${this.width}, 

        Area: ${this.calculateArea()
            
        }, 
        Perimeter: ${this.calculatePerimeter()}`;
    }
}

const rect1 = new Rectangle(5, 10);
rect1.displayInfo();
console.log(rect1.toString());

const square1 = new Square(6);
square1.displayInfo();


console.log(square1.toString());

console.log(`Total objects created: ${Rectangle.getObjectCount()}`);

try {
    const shape = new Shape(); 
} catch (error) {
    console.error(error.message);
}

