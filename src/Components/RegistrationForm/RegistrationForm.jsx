import React from "react";
import "./RegistrationForm.css";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import { validateForm } from "../../utils/validation";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        username: "",
        email: "",
        password: "",
      },
      errors: {},
      showPassword: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  toggleShowPassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(this.state.formData);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      this.setState({
        formData: { username: "", email: "", password: "" },
        errors: {},
        showPassword: false,
      });
    } else {
      this.setState({ errors: validationErrors });
    }
  };

  render() {
    const { formData, errors, showPassword } = this.state;

    return (
      <div className="form-container">
        <h2>Registration Form</h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={this.handleChange}
            error={errors.username}
            required               
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={this.handleChange}
            error={errors.email}
            required               
          />
          <FormInput
            label="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={this.handleChange}
            error={errors.password}
            required               
          />
          <label className="show-password-checkbox">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={this.toggleShowPassword}
            />{" "}
            Show Password
          </label>
          <Button type="submit">Register</Button>
        </form>
      </div>
    );
  }
}
export default RegistrationForm;