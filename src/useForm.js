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

  return { handleChange };
};

export default useForm;
