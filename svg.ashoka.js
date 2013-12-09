
SVG.Ashoka = function(size, options) {

  this.constructor.call(this, SVG.create('svg'));

  this.viewbox(0, 0, 100, 100);

  this.size(size, size);

  var emblem  = this.set();
  var wheel = this.group()
                  .add(this.circle(50).fill("#008").center(50,50))
                  .add(this.circle(45).fill("#fff").center(50,50))
                  .add(this.circle(10).fill("#008").center(50,50));

  emblem.add(wheel)

 var spokes = this.group()

for (var i = 0; i < 24 ; i++){
    var spoke = this.group()
      .add(this.polygon('0,0 1.0,11 0,23.5 -1.0,11').fill("#008"))
      .add(this.circle(2.3).fill("#008").move(-4.3,21.3))
      .rotate(i*15)
      .move(50,50);
      spokes.add(spoke)
}

emblem.add(spokes)
emblem.animate(3000).rotate(100)

var grad = this.gradient('linear', function(stop) {
  stop.at({ offset: '33.3', color: 'rgb(255,131,51)', opacity: 1 })
  stop.at({ offset: '33.3', color: 'white', opacity: 1 })
   stop.at({ offset: '66.6', color: 'white', opacity: 1 })
 stop.at({ offset: '66.6', color: 'rgb(19,136,8)', opacity: 1 })


});


grad.from('0', '0').to('0', '100');

emblem.attr({'fill' : grad.fill()})

}

SVG.Ashoka.prototype = new SVG.Container ;



// Extend SVG container
SVG.extend(SVG.Container, {
  // Add clock method 
  ashoka: function(size) {
    return this.put(new SVG.Ashoka(size))
  }
  
});
