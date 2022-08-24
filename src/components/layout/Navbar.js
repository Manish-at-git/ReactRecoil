import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar">
        <div class="container" style={{ display: "flex" }}>
          <div class="navbar-brand">
            <div class="navbar-item" href="/">
              <i class="fas fa-store fa-2x"></i>
            </div>
          </div>
          <div
            class="navbar-menu"
            style={{
              boxShadow: "none",
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <NavLink to="/addProduct">
                    <strong class="button is-primary">Add Product</strong>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
