export default function Home() {
    return (
      <>
      <h1 className="text-5xl">Best Products</h1>
      <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src="https://tableagent.s3.amazonaws.com/media/xl/2328_4911.jpg" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://i2.wp.com/www.test.dripthrucoffee.com/wp-content/uploads/2016/11/Products-DripThruCoffee-1.jpg?w=263" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://media-cdn.tripadvisor.com/media/photo-s/11/14/b1/ad/the-top-1-of-the-worlds.jpg" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://www.homecoffeemachines.ie/cdn/shop/articles/coffee_beans.png?v=1648141678&width=1024" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div></>
    )
  }