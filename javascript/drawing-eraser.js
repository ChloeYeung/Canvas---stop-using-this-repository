class Eraser extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.context= contextReal;
       
    }
    onMouseDown(coord, event){
    this.context.beginPath();
    this.context.moveTo(coord[0], coord[1]);
    }
    onDragging(coord, event){
    this.context.globalCompositeOperation = "destination-out";
    this.context.lineWidth = 5;
    // this.context.strokeStyle = "white";
    this.context.lineTo(coord[0], coord[1]);
    this.context.moveTo(coord[0], coord[1]);
    this.context.closePath();
    this.context.stroke();
    }
    onMouseMove() {}
    onMouseUp() {
        this.context.globalCompositeOperation="destination-over";
        
    }
    onMouseLeave() {}
    onMouseEnter() {}
}


//issues: the last shape drawn cannot be erased unless a new shape is drawn which in the end show the last erased