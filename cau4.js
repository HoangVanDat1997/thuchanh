function HCN(){
    class Rectangle{
        x;
        y;
        width;
        height;
        color;
        constructor(x,y,width,height,color) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.color = color;

        }
        render(canvas){
            let ctx = canvas.getContext("2d");
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);

        }


    }
}