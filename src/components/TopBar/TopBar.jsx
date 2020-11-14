import React from "react";
import { Navbar, Nav, Form, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TopBar.scss";

const TopBar = ({ children, logout, user, loggedIn }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">Viviendas</Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/verinscriptos">Ver inscriptos</Link>
          <Link to="/nuevoinscripto">Nuevo Inscripto</Link>
          <Link to="/resumen">Control de Actas</Link>
          {/* <NavDropdown.Divider /> */}
          <Link to="/reporteexcel">Reporte Excel</Link>
        </Nav>
        <Form inline>
          {loggedIn && (
            <Navbar.Text style={{ marginRight: "10px" }}>
              Bienvenido, {user.nombre}
            </Navbar.Text>
          )}
          <Button variant="outline-info" onClick={() => logout()}>
            Logout
          </Button>
        </Form>
      </Navbar>
      {children}
    </>
  );
};

export default TopBar;
