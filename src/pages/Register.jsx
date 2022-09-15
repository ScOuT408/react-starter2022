import React, { useState } from "react";
import styled from "styled-components";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

const RegisterSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  margin-left: -3rem;

  @media (max-width: 450px) {
    padding: 0 2rem;
  }

  .heading {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    justify-content: center;
    margin-bottom: 0.6rem;
    .icon {
      font-size: 2.5rem;
      color: #303030;
      margin-bottom: 0.3rem;
    }

    h3 {
      font-size: 2rem;
      text-transform: capitalize;
      font-weight: 450;
    }
  }

  .form_box {
    text-align: center;
    max-width: 60rem;
    margin: 0 auto;

    form {
      padding: 1.4rem 1.5rem;
      max-width: 60rem;
      width: 100%;
      margin: 1.5rem;
      border: 0.1rem solid #dbdbdb;
      background-color: #fcfeff;
      box-shadow: 0 0.4rem 0.5rem rgba(0, 0, 0, 0.1);
      margin-bottom: -15rem;

      .box {
        width: 100%;
        padding: 1rem 1rem;
        margin: 1rem 0;
        border: 0.1rem solid #cccccc;
        outline: none;
        font-size: 1.5rem;
        font-weight: 500;
        transition: all 0.2s ease-in-out;
        border-radius: 0.4rem;

        &:focus {
          border: 0.13rem solid #72d436;
          transition: all 0.2s ease-in-out;
        }
      }

      button {
        display: inline-block;
        padding: 0.6rem 2.7rem;
        margin-top: 0.8rem;
        font-size: 1.6rem;
        text-transform: capitalize;
        font-weight: 550;
        background: #303030;
        border: 0.1rem solid #303030;
        color: #fff;
        cursor: pointer;
        border-radius: 0.4rem;
        margin-right: 0.9rem;

        @media (max-width: 350px) {
          width: 100% !important;
          margin-bottom: 0.8rem;
        }
      }

      .click {
        text-decoration: none;
        font-size: 1.3rem;
        color: #303030;
        text-transform: capitalize;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

function Register() {
  const defaultValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  };

  const [formValues, setFormValues] = useState(defaultValues);
  const { name, email, phone, password, confirm_password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <RegisterSec>
      <div className="form_box">
        <form onSubmit={handleSubmit}>
          <div className="heading">
            <BiUser className="icon" />
            <h3> register now </h3>
          </div>

          <input
            type="text"
            placeholder="Enter name"
            className="box"
            name="name"
            value={name}
            onChange={onInputChange}
          />
          <input
            type="email"
            placeholder="Enter email"
            className="box"
            name="email"
            value={email}
            onChange={onInputChange}
          />
          <input
            type="text"
            placeholder="Enter phone"
            className="box"
            name="phone"
            value={phone}
            onChange={onInputChange}
          />
          <input
            type="password"
            placeholder="Enter password"
            className="box"
            name="password"
            value={password}
            onChange={onInputChange}
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="box"
            name="confirm_password"
            value={confirm_password}
            onChange={onInputChange}
          />
          <div className="flex_items">
            <button> register </button>
            <Link to="/login" className="click">
              click here to login
            </Link>
          </div>
        </form>
      </div>
    </RegisterSec>
  );
}

export default Register;
