class DrawingTriangle extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal=contextReal;
        this.contextDraft = contextDraft;
    }
    onMouseDown(coord,event){
        this.contextDraft.lineWidth = 4;
        this.contextDraft.strokeStyle = "black";
        this.contextDraft.fillStyle = "blue";

        this.contextDraft.setLineDash([]);
        this.origX = coord[0];
        this.origY = coord[1];
}
    onDragging(coord,event){
        this.contextDraft.beginPath();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.lineTo(coord[0], coord[1]);
        this.contextDraft.lineTo(this.origX - [coord[0]-this.origX], coord[1]);
        this.contextDraft.stroke();
        this.contextDraft.fill();
    }
    onMouseMove() {}

    onMouseUp(coord,event) {
      
        this.contextReal.lineWidth = 4;
        this.contextReal.strokeStyle = "black";
        this.contextReal.fillStyle = "blue";
        this.contextReal.setLineDash([]);
        this.contextReal.beginPath();
        // this.contextReal.clearRect(0,0,canvasDraft.width,canvasDraft.height); //Can set to clear the pixels after its called
        this.contextReal.moveTo(this.origX, this.origY);
        this.contextReal.lineTo(coord[0], coord[1]);
        this.contextReal.lineTo(this.origX - [coord[0]-this.origX], coord[1]);
        this.contextReal.stroke();
        this.contextReal.fill();


    }
    onMouseLeave() {}
    onMouseEnter() {}

}