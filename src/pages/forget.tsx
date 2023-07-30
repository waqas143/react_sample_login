import { Link } from "react-router-dom";

export const ForgetPage = () => {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Forget Password</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div className="d-grid gap-2 mt-3">
            <Link className="btn btn-secondary" to="/login">
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
