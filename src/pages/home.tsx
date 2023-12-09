import { Link } from "react-router-dom";

export default function Home() {
    return (
      <>
      <h1 className="flex p-9 text-3xl justify-center ">Best Products</h1>
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
<div className="flex justify-center w-full py-1 gap-2  ">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
<div className="flex gap-5 px-4 py-3">
<div className="card w-56 shadow-xl">
  <figure><img src="https://cdn11.bigcommerce.com/s-bp9oll2/images/stencil/500x800/products/193/793/Type-A-Espresso-Blend-Coffee__20579.1632345197.jpg?c=2" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Expresso!</h2>
    <p>Wake up to the fullest</p>
    <div className="card-actions justify-end">
    <Link to ="/cart">
              <button className="btn btn-primary">Buy Now</button>
              </Link>
    </div>
    </div>
    </div>
    <div className="card w-56  shadow-xl">
  <figure><img src="https://m.media-amazon.com/images/I/41pcnQsuUcL._SX300_SY300_QL70_FMwebp_.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Guatemala!</h2>
    <p>Extra touch of fruit </p>
    <div className="card-actions justify-end">
    <Link to ="/cart">
              <button className="btn btn-primary">Buy Now</button>
              </Link>
    </div>
    
    </div>
    </div>
    <div className="card w-56 shadow-xl">
  <figure><img src="https://cdn11.bigcommerce.com/s-bp9oll2/images/stencil/500x800/products/193/793/Type-A-Espresso-Blend-Coffee__20579.1632345197.jpg?c=2" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Expresso!</h2>
    <p>Wake up to the fullest</p>
    <div className="card-actions justify-end">
    <Link to ="/cart">
              <button className="btn btn-primary">Buy Now</button>
              </Link>
    </div>
    </div>
    </div>
    <div className="card w-56 shadow-xl">
  <figure><img src="https://cdn11.bigcommerce.com/s-bp9oll2/images/stencil/500x800/products/193/793/Type-A-Espresso-Blend-Coffee__20579.1632345197.jpg?c=2" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Expresso!</h2>
    <p>Wake up to the fullest</p>
    <div className="card-actions justify-end">
    <Link to ="/cart">
              <button className="btn btn-primary">Buy Now</button>
              </Link>
    </div>
    </div>
    </div>
    </div>
    </>
    )
  }