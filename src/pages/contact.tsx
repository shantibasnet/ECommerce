import { Link } from "react-router-dom";

export default function Contact() {
    return (
      <>
      
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
    <h1 className="text-3xl">
        Lorem ipsum dolor sit amet consectetur,atibus
      </h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="Name" placeholder="Full name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company</span>
          </label>
          <input type="message" placeholder="Name" className="input input-bordered" required />
          <label className="label">
      </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Inquiry</span>
          </label>
          <input type="message" placeholder="Message" className="input py-9 input-bordered" required />
        </div>
        <div className="form-control mt-9">
          <Link to ="/home">
          <button className="btn btn-primary">Submit</button>
          </Link>
        </div>
      </form>
    </div>
  </div>
</div>
      </>
    )
  }