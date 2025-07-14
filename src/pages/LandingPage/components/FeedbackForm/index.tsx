import React from "react";

import { userService } from "../../../../services";

import * as Styled from "./styles";

export const FeedbackForm = () => {
  const initialValues = {
    name: "",
    surname: "",
    email: "",
    message: "",
    messageResponse: "",
    hasError: false,
  };

  const [values, setValues] = React.useState(initialValues);

  const handleChange = (
    name: keyof typeof initialValues,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", values);

    userService
      .feedBack({
        emailFrom: values.email,
        title: `Feedback - ${values.name} ${values.surname}`,
        message: values.message,
      })
      .then((response) => {
        console.log("Feedback submitted successfully:", response);
        setValues({
          ...initialValues,
          hasError: false,
          messageResponse: "Feedback enviado com sucesso!",
        });
      })
      .catch((error) => {
        setValues((prev) => ({
          ...prev,
          hasError: true,
          messageResponse: error?.message ?? "Feedback enviado com sucesso!",
        }));
      });
  };

  const handleReset = () => {
    setValues(initialValues);
  };

  return (
    <Styled.ContactForm onSubmit={handleSubmit} onReset={handleReset}>
      <Styled.FormRow>
        <Styled.FormGroup>
          <Styled.FormLabel>Nome *</Styled.FormLabel>
          <Styled.FormInput
            type="text"
            required
            value={values.name}
            onChange={(event) => handleChange("name", event)}
          />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <Styled.FormLabel>Sobrenome *</Styled.FormLabel>
          <Styled.FormInput
            type="text"
            required
            value={values.surname}
            onChange={(event) => handleChange("surname", event)}
          />
        </Styled.FormGroup>
      </Styled.FormRow>
      <Styled.FormGroup>
        <Styled.FormLabel>Email *</Styled.FormLabel>
        <Styled.FormInput
          type="email"
          required
          value={values.email}
          onChange={(event) => handleChange("email", event)}
        />
      </Styled.FormGroup>
      <Styled.FormGroup>
        <Styled.FormLabel>Deixe sua mensagem*</Styled.FormLabel>
        <Styled.FormTextarea
          rows={4}
          value={values.message}
          onChange={(event) => handleChange("message", event)}
        />
      </Styled.FormGroup>

      {values.messageResponse && (
        <Styled.MessageResponse isSuccess={!values.hasError}>
          {values.messageResponse}
        </Styled.MessageResponse>
      )}

      <Styled.SubmitButton type="submit">Enviar</Styled.SubmitButton>
    </Styled.ContactForm>
  );
};
