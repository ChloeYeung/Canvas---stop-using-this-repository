class DrawingCircle extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal= contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord,event){
        
        this.contextDraft.fillStyle = "blue";
        this.contextDraft.strokeStyle = "black";
         // Kind of line
        // this.contextDraft.lineJoin = "round";
        this.contextDraft.setLineDash([]);
        // Width of line
        this.contextDraft.lineWidth = 4;
        this.origX = coord[0];
        this.origY = coord[1];
    }

    onDragging(coord,event){
        this.contextDraft.beginPath();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        //arc(x, y, radius, startAngle, endAngle,clockwise/or anti-clockwise)
        this.contextDraft.arc(this.origX, this.origY, Math.abs(coord[0] - this.origX), 0, Math.PI*2,true)
        // this.contextDraft.closePath();
        this.contextDraft.stroke(); //outline 
        this.contextDraft.fill();
        
    }
    onMouseMove() {}

    onMouseUp(coord,event) {

        this.contextReal.fillStyle = "blue";
        this.contextReal.strokeStyle = "black";
         // Kind of line
        // this.contextReal.lineJoin = "round";
        // Width of line
        this.contextReal.lineWidth = 4;
        this.contextReal.setLineDash([]);
        
        this.contextReal.beginPath();
        // this.contextReal.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.arc(this.origX, this.origY, Math.abs(coord[0] - this.origX), 0, Math.PI*2,true)
        
        this.contextReal.stroke();
        this.contextReal.fill();
        // this.contextReal.closePath();
    }
    onMouseLeave() {}
    onMouseEnter() {}
  }


  // Issue: When dragging back will reproduce multiple stroke(outline). 
  //Fixed after using clearReact erases the pixels in a rectangular area by setting them to transparent black.