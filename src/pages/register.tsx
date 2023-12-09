import { Link } from "react-router-dom";

export default function Register() {
    return (
      <>
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
        <div className="flex justify-center w-full py-1 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
  
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="card w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <Link to="/home">
                <button className="btn btn-primary">Register</button>
                </Link>
                <p className="mt-12 text-center text-sm font-semibold text-darkGrayishBlue dark:text-grayishBlue">
      ALready have an account{' '}
        <Link to="/register" className="text-primaryRed hover:underline">
          Login
        </Link>{' '}
      </p>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
  