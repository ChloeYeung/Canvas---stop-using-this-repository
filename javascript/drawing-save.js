// var canvas = new fabric.Canvas("c");

// fabric.Image.fromURL("download.jpg", function(img){
//     // img.setWidth(200);
//     // img.setHeight(200);
//     canvas.add(img);
// });

$("#drawing-save").click(function () {
    $("#canvas-real").get(0).toBlob(function (blob) {
        saveAs(blob, "myIMG.png");
    });
});