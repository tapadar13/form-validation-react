import { useState, useEffect } from "react";

const useForm = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return { formValues, handleChange, handleSubmit };
};

export default useForm;
