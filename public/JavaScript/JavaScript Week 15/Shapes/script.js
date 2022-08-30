var shapes = {

    square: {
        height: "50px",
        width: "50px"
    },
    circle: {
        height: "50px",
        width: "50px",
        borderRadius: "50%"
    },
    oval: {
        height: "50px",
        width: "100px",
        borderRadius: "50%"
    },
    rectangle: {
        height: "50px",
        width: "100px"
    },
    triangle: {
        height: "0px",
        width: "0px",
        borderBottom: "50px solid black",
        borderLeft: "25px solid transparent",
        borderRight: "25px solid transparent",
        backgroundColor: "white"
    },
    parallelogram: {
        width: "100px",
        height: "50px",
        transform: "skew(20deg)"
    },
    trapezoid: {
        height: "0px",
        width: "125px",
        borderBottom: "50px solid black",
        borderLeft: "25px solid transparent",
        borderRight: "25px solid transparent",
        backgroundColor: "white"
    }
};


var square = document.getElementById("square");
var circle = document.getElementById("circle");
var oval = document.getElementById("oval");
var rectangle = document.getElementById("rectangle");
var triangle = document.getElementById("triangle");
var parallelogram = document.getElementById("parallelogram");
var trapezoid = document.getElementById("trapezoid");


square.style.height = shapes.square.height;
square.style.width = shapes.square.width;

circle.style.height = shapes.circle.height;
circle.style.width = shapes.circle.width;
circle.style.borderRadius = shapes.circle.borderRadius;

oval.style.height = shapes.oval.height;
oval.style.width = shapes.oval.width;
oval.style.borderRadius = shapes.oval.borderRadius;

rectangle.style.height = shapes.rectangle.height;
rectangle.style.width = shapes.rectangle.width;

triangle.style.height = shapes.triangle.height;
triangle.style.width = shapes.triangle.width;
triangle.style.borderBottom = shapes.triangle.borderBottom;
triangle.style.borderLeft = shapes.triangle.borderLeft;
triangle.style.borderRight = shapes.triangle.borderRight;
triangle.style.backgroundColor = shapes.triangle.backgroundColor;

parallelogram.style.height = shapes.parallelogram.height;
parallelogram.style.width = shapes.parallelogram.width;
parallelogram.style.transform = shapes.parallelogram.transform;

trapezoid.style.height = shapes.trapezoid.height;
trapezoid.style.width = shapes.trapezoid.width;
trapezoid.style.borderBottom = shapes.trapezoid.borderBottom;
trapezoid.style.borderLeft = shapes.trapezoid.borderLeft;
trapezoid.style.borderRight = shapes.trapezoid.borderRight;
trapezoid.style.backgroundColor = shapes.trapezoid.backgroundColor;