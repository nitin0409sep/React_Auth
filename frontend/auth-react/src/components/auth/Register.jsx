import React, { useCallback, useEffect, useState } from "react";
import { Form } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContextProvider";
import * as EmailValidator from "email-validator";

const Register = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Errors Handling
  const [errors, setErrors] = useState({});
  const [validForm, setValidForm] = useState(false);
  const { setShowToast, setToastError } = useUserContext();

  //? If user has changed password, after filling password & confirm passowrd both, then validate both again
  useEffect(() => {
    if (formData.password && formData.confirmPassword) {
      validate({ confirmPassword: "" });
    }
  }, [formData.password]);

  useEffect(() => {
    validateForm();
  }, [errors]);

  // Validation
  const validate = useCallback(
    (fieldValues = formData) => {
      const temp = { ...errors };

      if ("name" in fieldValues)
        temp.name =
          formData.name || fieldValues.name ? "" : "Name is required.";

      if ("email" in fieldValues) {
        temp.email =
          !fieldValues.email && !formData.email
            ? "Email is required."
            : (formData.email || fieldValues.email) &&
              (EmailValidator.validate(fieldValues.email) ||
                EmailValidator.validate(formData.email))
            ? ""
            : `Email is invalid`;
      }

      if ("password" in fieldValues) {
        temp.password =
          !fieldValues.password && !formData.password
            ? "Password is required"
            : (fieldValues.password && fieldValues.password.length < 7) ||
              (formData && formData.password.length < 7)
            ? "Passowrd should be more than 8 chars"
            : "";
      }

      if ("confirmPassword" in fieldValues) {
        temp.confirmPassword =
          !fieldValues.confirmPassword && !formData.confirmPassword
            ? "Confirm Password is Required"
            : (fieldValues.confirmPassword &&
                fieldValues.confirmPassword === formData.password) ||
              (formData.confirmPassword &&
                formData.confirmPassword === formData.password)
            ? ""
            : "Password and Confirm Passowrd are not same";
      }

      setErrors({ ...temp });
    },
    [formData, errors]
  );

  // Form is Valid or Not
  function validateForm() {
    const allFieldsFilled = Object.values(formData).every(
      (value) => value !== ""
    );
    const noErrors = Object.values(errors).every((error) => error === "");
    setValidForm(allFieldsFilled && noErrors);
  }

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // To check each field is valid or not
    validate({ [name]: value });
  };

  return (
    <>
      <div
        style={{ height: "90vh" }}
        className="flex flex-col justify-center items-center gap-10"
      >
        <div className="text-center">
          <h1 className="text-5xl">Register</h1>
        </div>

        <Form
          className="w-full flex justify-center"
          method="post"
          action="/auth/register"
          onSubmit={(event) => {
            event.preventDefault();

            if (!validate()) {
              setShowToast(true);
            }
          }}
        >
          <div className="flex flex-col gap-3 lg:w-1/3 sm:w-2/3 md:w-1/2 bg-gray-300 shadow-md rounded-xl pl-10 pr-10 pb-2">
            <div className="flex flex-col gap-1 pt-8">
              <label htmlFor="name" className="text-black pl-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="p-3 outline-none bg-slate-50 text-black rounded-xl"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={() => validate({ name: "" })}
              />
              {errors.name && (
                <span className="text-red-600 text-sm pl-2">{errors.name}</span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-black pl-2">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="p-3 outline-none bg-slate-50 text-black rounded-xl"
                value={formData.email}
                onBlur={() => validate({ email: "" })}
                onChange={handleInputChange}
              />
              {errors.email && (
                <span className="text-red-600 text-sm pl-2">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-black pl-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="p-3 outline-none bg-slate-50 text-black rounded-xl"
                value={formData.password}
                onChange={handleInputChange}
                onBlur={() => validate({ password: "" })}
              />
              {errors.password && (
                <span className="text-red-600 text-sm pl-2">
                  {errors.password}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="cofirmPassword" className="text-black pl-2">
                Confirm Password
              </label>
              <input
                type="text"
                id="confirmPassword"
                name="confirmPassword"
                className="p-3 outline-none bg-slate-50 text-black rounded-xl"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                onBlur={() => validate({ confirmPassword: "" })}
              />
              {errors.confirmPassword && (
                <span className="text-red-600 text-sm pl-2">
                  {errors.confirmPassword}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1 mb-5 pt-2">
              <button
                className={`${
                  !validForm ? "bg-gray-400 cursor-not-allowed" : ""
                }`}
                disabled={!validForm}
              >
                Register
              </button>
              <p className="text-right flex justify-center gap-1 text-black">
                <span>Already have an account?</span>
                <a href="/login">Login</a>
              </p>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Register;
