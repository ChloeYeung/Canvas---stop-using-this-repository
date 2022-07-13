/**********************************************
 * Drawing Rectangle Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 ***********************************************/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect

class DrawingRectangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.org_x;
    this.org_y;
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.options = {
      stroke_color: ['00', '00', '00'],
      dim: 4
    }
    this.contextReal.strokeColor = this.options.stroke_color;
    this.drawing = false;
  }

  onMouseDown(coord, event) {
    this.contextReal.fillStyle = "#f44";
    this.origX = coord[0];
    this.origY = coord[1];
    history.saveState(canvasReal);
    this.drawing = true;
  }

  onDragging(coord, event) {
    if (this.drawing) {
      // Manipulating the context draft
      this.contextDraft.fillStyle = "#f44";
      // Allows you to actually draw out your squares
      this.contextDraft.clearRect(
        0,
        0,
        canvasDraft.width,
        canvasDraft.height
      );
      // Pass in the original x and y coordinates, followed by the new coordinates that we get for position x and y
      this.contextDraft.fillRect(
        this.origX,
        this.origY,
        coord[0] - this.origX,
        coord[1] - this.origY
      );
    }
  };
  stop = function (evt) {
    if (this.drawing) this.drawing = false;
  };
  onMouseMove() { }

  // Committing the element to the canvas
  onMouseUp(coord) {
    // Clearing the rectangle first
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );
    // Commit that drawing to context real
    // Without this commit, it won't actually draw
    this.contextReal.fillRect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    );
  }
  onMouseLeave() { }
  onMouseEnter() { }
}
