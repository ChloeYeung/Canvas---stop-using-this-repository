class DrawingCircle extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal= contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord,event){
        
        this.contextDraft.fillStyle = $("#colorFill").val();
        this.contextDraft.strokeStyle = $("#colorStroke").val();
        this.contextDraft.lineWidth = $("#lineWidth").val();
        // this.contextDraft.lineJoin = "round";
        this.contextDraft.setLineDash([]);
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

        this.contextReal.fillStyle = $("#colorFill").val();
        this.contextReal.strokeStyle = $("#colorStroke").val();
        this.contextReal.lineWidth = $("#lineWidth").val();
        this.contextReal.setLineDash([]);
        this.contextReal.beginPath();
        // this.contextReal.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.arc(this.origX, this.origY, Math.abs(coord[0] - this.origX), 0, Math.PI*2,true)
        this.contextReal.stroke();
        this.contextReal.fill();
    }
    onMouseLeave() {}
    onMouseEnter() {}
  }


  // Issue: When dragging back will reproduce multiple stroke(outline). 
  //Fixed after using clearReact erases the pixels inside the canvas.