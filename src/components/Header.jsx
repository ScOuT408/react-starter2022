import React, { useEffect, useState } from "react";
import { FaGripfire } from "react-icons/fa";
import { FiShoppingCart, FiUser, FiLogOut, FiX, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProfileSec = styled.div`
  position: fixed;
  top: 16%;
  right: 5%;
  z-index: 2400;
  padding: 2rem;
  background: #eee;
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  transition: all 0.2s ease-in-out;

  &.active {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  .flex__btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;

    a {
      font-size: 1.5rem;
      text-decoration: none;
      text-transform: capitalize;
      color: #222;
      background: #fff;
      padding: 1rem;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }
  }
`;

function Header() {
  const user = false;
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(false);

  const handleNav = () => {
    setOpen(!open);
  };

  const handleUser = () => {
    setProfile(!profile);
  };

  useEffect(() => {
    document.addEventListener("mousedown", () => {
      setOpen(false);
    });
  });
  return (
    <>
      <header className="header">
        <div className="flex__header">
          <label className="logobox">
            <span>
              <FaGripfire />
            </span>
            ecom.
          </label>

          <nav className={open ? "navbar active" : "navbar"}>
            <Link to="/" className="links">
              home
            </Link>
            <Link to="/products" className="links">
              products
            </Link>
            <Link to="/about" className="links">
              about
            </Link>
          </nav>

          <div className="icons">
            <FiShoppingCart className="icon" />
            <span className="count"> 0 </span>
            {user ? (
              <FiLogOut className="icon" />
            ) : (
              <FiUser className="icon" onClick={handleUser} />
            )}
            {open ? (
              <FiX className="icon menu" onClick={handleNav} />
            ) : (
              <FiMenu className="icon menu" onClick={handleNav} />
            )}
          </div>
        </div>
      </header>

      <ProfileSec className={profile && "active"}>
        <div className="flex__btns">
          <Link to="/login"> login </Link>
          <Link to="/register"> register </Link>
        </div>
      </ProfileSec>
    </>
  );
}

export default Header;
