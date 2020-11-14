import React, { useState, useEffect } from 'react';
import './LoginPage.scss';
import Banner from '../../../banner.jpg';
import logo from '../../../baac2020.png';

const HomePage = ({ loggingIn, error, ingresar, getInfoByDNI }) => {
  const [inputs, setInputs] = useState({
    dni: '',
    password: '',
  });
  const [submitted, setSubmitted] = useState(false);

  //reset ingresar status
  //   useEffect(() => {
  //     reset()
  //   }, [])

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (inputs.dni) {
      getInfoByDNI(inputs.dni);
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 login-section-wrapper">
          <div className="brand-wrapper">
            <img src={logo} alt="logo" className="logo" style={{ objectFit: 'none' }} width="200" />
          </div>
          <div className="login-wrapper my-auto">
            <h1 className="login-title">COVID REGISTER (?)</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>DNI</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese su DNI"
                  value={inputs.dni}
                  onChange={handleChange}
                  name="dni"
                  value={inputs.dni}
                />
              </div>
              <button className="btn btn-block login-btn">Ingresar al Registro</button>
              {loggingIn && <span className="spinner-border spinner-border-sm mr-1" />}
            </form>
          </div>
        </div>
        {/* <div className="col-sm-6 px-0 d-none d-sm-block">
         <img src={Banner} alt="login image" className="login-img" />
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;
