import React from "react";
import styled from "styled-components";
import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const formDataObj = Object.fromEntries(formData);

  try {
    const res = await axios.post(newsletterUrl, formDataObj);
    toast.success(res.data.msg);
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error?.response?.data?.msg;
  }
};

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <p className="form-heading">Our NewsLetter</p>
      <Form className="form" method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" required />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          defaultValue="test@test.com"
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  padding: 2.5rem;
  gap: 1rem;
  border-radius: 5px;
  box-shadow: var(--shadow-3);
  max-width: 45vw;
  min-width: 260px;
  margin: 1.5rem auto -1rem;

  p {
    text-align: center;
    font-size: clamp(1rem, 2vw, 2rem);
  }
  * {
    display: block;
  }
  .form {
    display: flex;
    flex-direction: column;
  }
  label {
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
    font-size: 0.95rem;
  }
  input {
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid var(--grey-200);
    font-size: 0.85rem;
    padding: 0.5rem 0.5rem;
    border-radius: 5px;
  }
  button {
    margin-top: 0.5rem;
    background-color: var(--primary-500);
    border-color: transparent;
    color: white;
    padding: 0.25rem 0;
    border-radius: 5px;
    transition: var(--transition);
  }

  button:hover {
    background-color: var(--primary-600);
  }
`;

export default Newsletter;
