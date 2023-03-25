import { useState, useEffect } from "react";
import ValidateInfo from "./ValidateInfo";

const useForm = (ValidateInfo) => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(ValidateInfo(formValues));
    setIsSubmitting(true);
  };

  return { formValues, handleChange, handleSubmit, errors };
};

export default useForm;
