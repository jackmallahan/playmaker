import { Component } from "react";

class Field extends Component {
  constructor(height, width, canvas, context, fieldSize){
    super();
    this.height = height;
    this.width = width;
    this.canvas = canvas;
    this.context = context;
    this.endLine = fieldSize.toLower() === "halffield" ? "1200px" : "600px";
  }
}
