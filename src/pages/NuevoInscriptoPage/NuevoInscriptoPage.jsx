import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Jumbotron } from 'react-bootstrap';
import logo from '../../../baac2020.png';
import { ButtonWithIconAndTooltip } from '../../components/ButtonWithIconAndTooltip';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import './style.scss';
import Swal from 'sweetalert2';

const NuevoInscriptoPage = ({
  getInfoByDNI,
  getInfo,
  info_loading,
  info_user,
  error,
  all_info,
  postFormNuevoInscripto,
  data_nuevo_inscripto,
}) => {
  const [dni, setDni] = useState('');
  const [telefono, setTelefono] = useState('');

  const { handleSubmit, register, errors, setValue, getValues } = useForm();

  const onSubmit = async (values) => {
    console.log(values);
    if (phonenumber(values.telefono)) {
      await postFormNuevoInscripto(values);
    } else {
      Swal.fire('Error!', 'El campo número debe ser válido: Formato +543364123456 ', 'error');
    }
  };

  const phonenumber = (inputtxt) => {
    console.log(inputtxt);
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (inputtxt.match(phoneno)) {
      return true;
    } else {
      return false;
    }
  };

  const handleGetDatosByDNI = async () => {
    if (dni) {
      await getInfoByDNI(dni);
    } else {
      Swal.fire('Error!', 'El campo DNI debe estar completo para traer datos', 'error');
    }
  };

  const handleChangeTelefono = (e) => {
    console.log(e.target.value);
    console.log(phonenumber(e.target.value));
    if (phonenumber(e.target.value)) {
      setTelefono(e.target.value);
    }
  };
  // useEffect(() => {
  //     getInfo()
  // }, [])

  // useEffect(() => {
  //     if(all_info){
  //         console.log("all_info ", all_info)
  //         const aux = all_info.map((inf) => {
  //             return { value: inf.dni, label: inf.dni };
  //           })
  //           console.log("aux ", aux)
  //         setLoadOptions(aux)
  //     }
  // }, [all_info])

  useEffect(() => {
    if (info_user) {
      console.log('info_user');
      console.log(info_user);
      setValue('apellido', info_user.apenom, { shouldValidate: true });
      setValue('nombre', info_user.nombre, { shouldValidate: true });
      setValue('dni', info_user.dni, { shouldValidate: true });
      setDni(info_user.dni);
      setValue('domicilio', info_user.domicilio, { shouldValidate: true });
      setValue('telefono', info_user.telefono, { shouldValidate: true });
      setTelefono(info_user.telefono);
      setValue('temperatura', info_user.temperatura, { shouldValidate: true });
    }
  }, [info_user]);

  useEffect(() => {
    console.log({ data_nuevo_inscripto });
    if (data_nuevo_inscripto && data_nuevo_inscripto.message) {
      console.log('true');
    } else {
      console.log('false');
    }
  }, [data_nuevo_inscripto]);

  return (
    <Container>
      <Row className="">
        <Col>
          <img src={logo} alt="logo" />
        </Col>
        <Col>
          <br />
          <br />
        </Col>
        <Col xs={10} md={10}>
          <center>
            <span
              style={{
                marginLeft: '50px',
                fontSize: '40px',
                fontFamily: 'Karla',
                textAlign: 'center',
              }}
            ></span>
          </center>
        </Col>
      </Row>
      <br />
      <br />
      <Jumbotron>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col>
              <Row>
                <Col md={3}>
                  <Form.Label>APELLIDO</Form.Label>
                </Col>
                <Col md={7}>
                  <Form.Control
                    type="text"
                    placeholder="INGRESÁ TU APELLIDO"
                    required
                    name="apellido"
                    ref={register()}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={3}>
                  <Form.Label>NOMBRE</Form.Label>
                </Col>
                <Col md={7}>
                  <Form.Control
                    type="text"
                    placeholder="INGRESÁ TU NOMBRE"
                    required
                    name="nombre"
                    ref={register()}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={3}>
                  <Form.Label>DNI</Form.Label>
                </Col>
                <Col xs={10} md={7}>
                  <Form.Control
                    type="number"
                    value={dni}
                    onChange={(e) => setDni(e.target.value)}
                    placeholder="INGRESÁ TU  DNI"
                    required
                    name="dni"
                    ref={register()}
                  />
                </Col>
                <br />
              </Row>
              <br />
              <Row>
                <Col md={3}>
                  <Form.Label>DOMICILIO</Form.Label>
                </Col>

                <Col md={7}>
                  <Form.Control
                    type="text"
                    placeholder="INGRESÁ TU DOMICILIO"
                    required
                    name="domicilio"
                    ref={register()}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={3}>
                  <Form.Label>TELÉFONO</Form.Label>
                </Col>
                <Col md={7}>
                  <Form.Control
                    type="text"
                    placeholder="+543364123456 - INGRESÁ TU TELÉFONO"
                    required
                    name="telefono"
                    ref={register()}
                    //value={telefono}
                    //onChange={(e) => setTelefono(e.event.value)}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={3}>
                  <Form.Label>TEMPERATURA</Form.Label>
                </Col>
                <Col xs={10} md={7}>
                  <Form.Control
                    type="number"
                    //value={temperatura}
                    //onChange={(e) => setDni(e.target.value)}
                    placeholder="INGRESÁ TU  TEMPERATURA"
                    required
                    name="temperatura"
                    ref={register()}
                  />
                </Col>
                <br />
              </Row>
              <br />
              <Row>
                <Col md={10}>
                  <center>
                    <Button variant="primary" type="submit">
                      INSCRIBIR
                    </Button>
                    <br />
                    <br />
                  </center>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Jumbotron>
    </Container>
  );
};
export default NuevoInscriptoPage;
