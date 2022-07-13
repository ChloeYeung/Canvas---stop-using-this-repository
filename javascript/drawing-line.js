/**********************************************
 * Drawing Line Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 * Remember, order matters
 ***********************************************/
class DrawingLine extends PaintFunction {
  // This class extends the PaintFunction class
  // You are only passing one instance here

  constructor( contextReal) {
    super();
    this.org_x;
    this.org_y;
    this.options = {
      stroke_color: ['00', '00', '00'],
      dim: 4
    }


    this.contextReal = contextReal;
    this.contextReal.strokeColor = this.options.stroke_color;
    this.drawing = false;
  }


  // On mouse down, ensure that the pen has these features
  onMouseDown(coord, event) {
    // Fill in the color
    this.contextReal.strokeStyle = "#df4b26";
    // Kind of line
    this.contextReal.lineJoin = "round";
    // Width of line
    this.contextReal.lineWidth = 5;
    // Drawing the line here
    this.contextReal.beginPath();
    this.contextReal.moveTo(coord[0], coord[1]);
    history.saveState(canvasReal);
    this.drawing = true;
  }
  // Clicking and removing your mouse
  onDragging(coord, event) {
    if (this.drawing) {
      var x = coord[0];
      var y = coord[1];


      this.contextReal.lineTo(x, y);
      this.contextReal.stroke();
    }
  }
  stop = function (evt) {
    if (this.drawing) this.drawing = false;
  };
  onMouseMove() { }
  onMouseUp() { }
  onMouseLeave() { }
  onMouseEnter() { }


}
