import useForm from "./useForm";
import ValidateInfo from "./ValidateInfo";
import "./styles/form.css";

const FormSignup = ({ submitForm }) => {
  const { formValues, handleChange, handleSubmit, errors } = useForm(
    submitForm,
    ValidateInfo
  );

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="form-input"
            placeholder="Enter your username"
            value={formValues.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-input"
            placeholder="Enter your email"
            value={formValues.email}
            onChange={handleChange}
          />
          {/* {errors.email && <p>{errors.email}</p>} */}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-input"
            placeholder="Enter your password"
            value={formValues.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            name="password2"
            id="password2"
            className="form-input"
            placeholder="Enter your password"
            value={formValues.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button type="submit" className="form-input-btn">
          Sign up
        </button>
        <span className="form-input-login">
          Already have na account? Login in <a href="#">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
