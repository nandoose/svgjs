
SVG.Ashoka = function(size, options) {

  this.constructor.call(this, SVG.create('svg'))


  this.viewbox(0, 0, 100, 100);

  this.size(size, size);

  this.chakra = this.group()
                  .add(this.circle(50).fill("#008").center(50,50))
                  .add(this.circle(45).fill("#fff").center(50,50))
                  .add(this.circle(10).fill("#008").center(50,50))



for (var i = 0; i < 24 ; i++){
    this.group()
      .add(this.polygon('0,0 1.0,12 0,24 -1.0,12').fill("#008"))
      .add(this.circle(3).fill("#008").move(-4.5,21))
      .rotate(i*15)
      .move(50,50)
}



}

SVG.Ashoka.prototype = new SVG.Container



// Extend SVG container
SVG.extend(SVG.Container, {
  // Add clock method 
  ashoka: function(size) {
    return this.put(new SVG.Ashoka(size))
  }
  
})
