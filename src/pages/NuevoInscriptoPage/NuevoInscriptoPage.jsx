import React, { useState, useEffect } from 'react'
import {
    Container, Row, Col, Form, Button, Jumbotron
} from 'react-bootstrap'
import logo from '../../../banner.jpg'
import DatePicker from "react-datepicker";
import { ButtonWithIconAndTooltip } from '../../components/ButtonWithIconAndTooltip'
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
// import Select from 'react-select';
import './style.scss';
import Swal from 'sweetalert2';

const NuevoInscriptoPage = ({ getInfoByDNI, getInfo, info_loading, info_user, error, all_info, postFormNuevoInscripto, data_nuevo_inscripto }) => {    
    const [startBirthDate, setStartBirthDate] = useState(new Date());
    const [dni, setDni] = useState("");
    const [estadoCivil, setEstadoCivil] = useState("");
    const [telefono, setTelefono] = useState("");
    const [conyugeNombre, setConyugeNombre] = useState("");
    const [conyugeApellido, setConyugeApellido] = useState("");
    const [conyugeDni, setConyugeDni] = useState("");
    const [cantHijos, setCantHijos] = useState("")
    const [hijo1, setHijo1] = useState({
        nombre: "",
        apellido: "",
        dni: ""
    })
    const [hijo2, setHijo2] = useState({
        nombre: "",
        apellido: "",
        dni: ""
    })
    const [hijo3, setHijo3] = useState({
        nombre: "",
        apellido: "",
        dni: ""
    })
    const [hijo4, setHijo4] = useState({
        nombre: "",
        apellido: "",
        dni: ""
    })
    const [hijo5, setHijo5] = useState({
        nombre: "",
        apellido: "",
        dni: ""
    })
    const [hijo6, setHijo6] = useState({
        nombre: "",
        apellido: "",
        dni: ""
    })
    const [hijo7, setHijo7] = useState({
        nombre: "",
        apellido: "",
        dni: ""
    })
    const [hijo8, setHijo8] = useState({
        nombre: "",
        apellido: "",
        dni: ""
    })
    const [hijo9, setHijo9] = useState({
        nombre: "",
        apellido: "",
        dni: ""
    })
    const [hijo10, setHijo10] = useState({
        nombre: "",
        apellido: "",
        dni: ""
    })

    const handleChangeHijo1 = (e) => {
        const { name, value } = e.target;
        setHijo1(prevState => ({ ...prevState, [name]: value }))
    }

    const handleChangeHijo2 = (e) => {
        const { name, value } = e.target;
        setHijo2(prevState => ({ ...prevState, [name]: value }))
    }

    const handleChangeHijo3 = (e) => {
        const { name, value } = e.target;
        setHijo3(prevState => ({ ...prevState, [name]: value }))
    }

    const handleChangeHijo4 = (e) => {
        const { name, value } = e.target;
        setHijo4(prevState => ({ ...prevState, [name]: value }))
    }

    const handleChangeHijo5 = (e) => {
        const { name, value } = e.target;
        setHijo5(prevState => ({ ...prevState, [name]: value }))
    }

    const handleChangeHijo6 = (e) => {
        const { name, value } = e.target;
        setHijo6(prevState => ({ ...prevState, [name]: value }))
    }

    const handleChangeHijo7 = (e) => {
        const { name, value } = e.target;
        setHijo7(prevState => ({ ...prevState, [name]: value }))
    }

    const handleChangeHijo8 = (e) => {
        const { name, value } = e.target;
        setHijo8(prevState => ({ ...prevState, [name]: value }))
    }

    const handleChangeHijo9 = (e) => {
        const { name, value } = e.target;
        setHijo9(prevState => ({ ...prevState, [name]: value }))
    }

    const handleChangeHijo10 = (e) => {
        const { name, value } = e.target;
        setHijo10(prevState => ({ ...prevState, [name]: value }))
    }
    
    const { handleSubmit, register, errors, setValue, getValues } = useForm();

    const onSubmit = async values => {
        values.startBirthDate = startBirthDate.toISOString();
        //agregar validaciones
        values.conyuge = {
            nombre: conyugeNombre,
            apellido: conyugeApellido,
            dni: conyugeDni
        }
        values.hijo1 = hijo1;
        values.hijo2 = hijo2;
        values.hijo3 = hijo3;
        values.hijo4 = hijo4;
        values.hijo5 = hijo5;
        values.hijo6 = hijo6;
        values.hijo7 = hijo7;
        values.hijo8 = hijo8;
        values.hijo9 = hijo9;
        values.hijo10 = hijo10;
        if(phonenumber(values.telefono)){
            await postFormNuevoInscripto(values)
        }else{
            Swal.fire(
                'Error!',
                "El campo número debe ser válido: Formato +543364123456 ",
                'error'
            )
        }
    };

    const phonenumber = (inputtxt) => {
        console.log(inputtxt)
        var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        if(inputtxt.match(phoneno)) {
          return true;
        }  
        else {
          return false;
        }
   }

    const handleGetDatosByDNI = async () => {
        if (dni) {
            await getInfoByDNI(dni)
        } else {
            Swal.fire(
                'Error!',
                "El campo DNI debe estar completo para traer datos",
                'error'
            )
        }
    }
    
    // const handleChangeTelefono = (e) => {
    //     console.log(e.target.value)
    //     console.log(phonenumber(e.target.value))
    //     if(phonenumber(e.target.value)){
    //         setTelefono(e.target.value)
    //     }
    // }
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
        if(info_user){
            console.log("info_user")
            console.log(info_user)
            setValue('apellido', info_user.apenom, { shouldValidate: true });
            setValue('nombre', info_user.nombre, { shouldValidate: true });
            setValue('dni', info_user.dni, { shouldValidate: true });
            setDni(info_user.dni);
            setValue('nacionalidad', info_user.nacionalidad, { shouldValidate: true });
            setStartBirthDate(info_user && info_user.nacimiento && new Date(info_user.nacimiento));
            setValue('estado_civil', info_user.estado_civil, { shouldValidate: true });
            setEstadoCivil(info_user.estado_civil)
            if(info_user.estado_civil === "Casado" || info_user.estado_civil === "Union de Hecho"){
                setConyugeNombre(info_user.conyugeInfo && info_user.conyugeInfo.nombre)
                setConyugeApellido(info_user.conyugeInfo && info_user.conyugeInfo.apellido)
                setConyugeDni(info_user.conyugeInfo && info_user.conyugeInfo.dni)
            }
            setValue('cant_hijos', info_user.cant_hijos, { shouldValidate: true });
            setCantHijos(info_user && info_user.cant_hijos && info_user.cant_hijos.toString())
            if(info_user && info_user.hijo1Info && info_user.hijo1Info.length && (info_user.hijo1Info[0].apellido !== "" && info_user.hijo1Info[0].nombre !== "" && info_user.hijo1Info[0].dni !== "")){
                setHijo1({
                    apellido: info_user.hijo1Info[0].apellido,
                    nombre: info_user.hijo1Info[0].nombre,
                    dni: info_user.hijo1Info[0].dni
                })
            }

            if(info_user && info_user.hijo2Info && info_user.hijo2Info.length && (info_user.hijo2Info[0].apellido !== "" && info_user.hijo2Info[0].nombre !== "" && info_user.hijo2Info[0].dni !== "")){
                setHijo2({
                    apellido: info_user.hijo2Info[0].apellido,
                    nombre: info_user.hijo2Info[0].nombre,
                    dni: info_user.hijo2Info[0].dni
                })
            }

            if(info_user && info_user.hijo3Info && info_user.hijo3Info.length &&( info_user.hijo3Info[0].apellido !== "" && info_user.hijo3Info[0].nombre !== "" && info_user.hijo3Info[0].dni !== "")){
                setHijo3({
                    apellido: info_user.hijo3Info[0].apellido,
                    nombre: info_user.hijo3Info[0].nombre,
                    dni: info_user.hijo3Info[0].dni
                })
            }

            if(info_user && info_user.hijo4Info && info_user.hijo4Info.length && (info_user.hijo4Info[0].apellido !== "" && info_user.hijo4Info[0].nombre !== "" && info_user.hijo4Info[0].dni !== "")){
                setHijo4({
                    apellido: info_user.hijo4Info[0].apellido,
                    nombre: info_user.hijo4Info[0].nombre,
                    dni: info_user.hijo4Info[0].dni
                })
            }

            if(info_user && info_user.hijo5Info && info_user.hijo5Info.length && (info_user.hijo5Info[0].apellido !== "" && info_user.hijo5Info[0].nombre !== "" && info_user.hijo5Info[0].dni !== "")){
                setHijo5({
                    apellido: info_user.hijo5Info[0].apellido,
                    nombre: info_user.hijo5Info[0].nombre,
                    dni: info_user.hijo5Info[0].dni
                })
            }

            if(info_user && info_user.hijo6Info && info_user.hijo6Info.length && (info_user.hijo6Info[0].apellido !== "" && info_user.hijo6Info[0].nombre !== "" && info_user.hijo6Info[0].dni !== "")){
                setHijo6({
                    apellido: info_user.hijo6Info[0].apellido,
                    nombre: info_user.hijo6Info[0].nombre,
                    dni: info_user.hijo6Info[0].dni
                })
            }

            if(info_user && info_user.hijo7Info && info_user.hijo7Info.length && (info_user.hijo7Info[0].apellido !== "" && info_user.hijo7Info[0].nombre !== "" && info_user.hijo7Info[0].dni !== "")){
                setHijo7({
                    apellido: info_user.hijo7Info[0].apellido,
                    nombre: info_user.hijo7Info[0].nombre,
                    dni: info_user.hijo7Info[0].dni
                })
            }

            if(info_user && info_user.hijo8Info && info_user.hijo8Info.length && (info_user.hijo8Info[0].apellido !== "" && info_user.hijo8Info[0].nombre !== "" && info_user.hijo8Info[0].dni !== "")){
                setHijo8({
                    apellido: info_user.hijo8Info[0].apellido,
                    nombre: info_user.hijo8Info[0].nombre,
                    dni: info_user.hijo8Info[0].dni
                })
            }

            if(info_user && info_user.hijo9Info && info_user.hijo9Info.length && (info_user.hijo9Info[0].apellido !== "" && info_user.hijo9Info[0].nombre !== "" && info_user.hijo9Info[0].dni !== "")){
                setHijo9({
                    apellido: info_user.hijo9Info[0].apellido,
                    nombre: info_user.hijo9Info[0].nombre,
                    dni: info_user.hijo9Info[0].dni
                })
            }

            if(info_user && info_user.hijo10Info && info_user.hijo10Info.length && (info_user.hijo10Info[0].apellido !== "" && info_user.hijo10Info[0].nombre !== "" && info_user.hijo10Info[0].dni !== "")){
                setHijo10({
                    apellido: info_user.hijo10Info[0].apellido,
                    nombre: info_user.hijo10Info[0].nombre,
                    dni: info_user.hijo10Info[0].dni
                })
            }
            
            setValue('discapacidad', info_user.discapacidad, { shouldValidate: true });
            setValue('domicilio', info_user.domicilio, { shouldValidate: true });
            setValue('localidad', info_user.localidad, { shouldValidate: true });
            setValue('telefono', info_user.telefono, { shouldValidate: true });
            setTelefono(info_user.telefono)
            setValue('email', info_user.email, { shouldValidate: true });
            setValue('trabajo', info_user.trabajo, { shouldValidate: true });
            setValue('ingreso_familiar', info_user.apenom, { shouldValidate: true });
            setValue('vivienda_adaptada', info_user.ingresos, { shouldValidate: true });
            setValue('plan_social', info_user.plan_social, { shouldValidate: true });
            setValue('situacion', info_user.situacion, { shouldValidate: true });
            setValue('observacion', info_user.observacion, { shouldValidate: true });
        }
    }, [info_user])

    useEffect(() => {
        console.log({data_nuevo_inscripto})
        if(data_nuevo_inscripto && data_nuevo_inscripto.message) {
            console.log("true")
        }else{
            console.log("false")
        }
    }, [data_nuevo_inscripto])

    return (
        <Container>
            <Row className="">
                <Col>
                    {/* <center>
                        <img
                            src={logo}
                            width="300"
                            style={{ marginLeft: "50px" }}
                        />
                        <span style={{ marginLeft: "50px", fontSize: "40px", fontFamily: "Karla" }}>Inscripcion a viviendas</span>
                    </center> */}
                    <img src={logo} alt="logo" />
                </Col>
                <Col>
                    <br />
                    <br />
                    <h4>"Hechos que cambian tu vida"</h4>
                </Col>
            </Row>
            <br />
            <br />
            <Row>
                <Col xs={10} md={10}>
                    <center><span style={{ marginLeft: "50px", fontSize: "40px", fontFamily: "Karla", textAlign: "center" }}>INSCRIPCIÓN AL REGISTRO DE ASPIRANTES A VIVIENDAS</span></center>
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
                                    <Form.Control type="text" placeholder="INGRESÁ TU NOMBRE" required name="nombre" ref={register()} />
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
                                    {/* <Select 
                                        // defaultValue={loadOptions[0]}
                                        // isLoading={true}
                                        isClearable={true}
                                        isSearchable={true}
                                        name="dni"
                                        options={loadOptions}
                                        onChange={(e) => setDni(e.target.value)}
                                    /> */}
                                </Col>
                                {/* <Col xs={2} md={2}>
                                    <ButtonWithIconAndTooltip
                                        icon={faSyncAlt}
                                        placement="top"
                                        variant="primary"
                                        fn={() => handleGetDatosByDNI()}
                                        btnSize="sm"
                                        tooltipText="Traer datos"
                                    />
                                </Col> */}
                            </Row>
                            <br />
                            <Row>
                                <Col md={3}>
                                    <Form.Label>NACIONALIDAD</Form.Label>
                                </Col>
                                <Col md={7}>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="INGRESÁ TU NACIONALIDAD" 
                                        defaultValue="ARG" 
                                        required 
                                        name="nacionalidad" 
                                        ref={register()} 
                                    />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col md={3}>
                                    <Form.Label>FECHA DE NACIMIENTO</Form.Label>
                                </Col>
                                <Col md={7}>
                                    <DatePicker
                                        selected={startBirthDate}
                                        onChange={(date) => setStartBirthDate(date)}
                                        dateFormat="dd/MM/yyyy"
                                        isClearable
                                        required
                                        showYearDropdown
                                        name="fecha_nacimiento"
                                    />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col md={3}>
                                    <Form.Label>ESTADO CIVIL</Form.Label>
                                </Col>
                                <Col md={7}>
                                    <Form.Control 
                                        as="select" 
                                        name="estado_civil" 
                                        ref={register()} 
                                        value={estadoCivil} 
                                        onChange={e => setEstadoCivil(e.target.value)}
                                    >
                                        <option value="Soltero">SOLTERO/A</option>
                                        <option value="Casado">CASADO/A</option>
                                        <option value="Union de Hecho">UNION DE HECHO</option>
                                        <option value="Viudo">VIUDO/A</option>
                                        <option value="Separado">SEPARADO/DIVORCIADO</option>
                                    </Form.Control>
                                </Col>
                            </Row>
                            <br />
                            {/* PONER QUE CUANDO SEA CASADO O UNION DE HECHO QUE PIDA DATOS DEL CONYUGE. */}
                            {(estadoCivil === "Casado" || estadoCivil === "Union de Hecho") && <>
                                <Row>
                                    <Col md={10}><Form.Label><b>DATOS DEL CONYUGE</b></Form.Label></Col>
                                </Row>
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>CONYUGE - NOMBRE</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ EL NOMBRE" 
                                            required 
                                            name="Nombre" 
                                            value={conyugeNombre}
                                            onChange={e => setConyugeNombre(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>CONYUGE - APELLIDO</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ EL APELLIDO" 
                                            required 
                                            name="Apellido" 
                                            value={conyugeApellido}
                                            onChange={e => setConyugeApellido(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>CONYUGE - DNI</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ EL DNI" 
                                            required 
                                            name="domicilio" 
                                            value={conyugeDni}
                                            onChange={e => setConyugeDni(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                            </>}
                            <Row>
                                <Col md={3}>
                                    <Form.Label>CANTIDAD DE HIJOS</Form.Label>
                                </Col>
                                <Col md={7}>
                                    <Form.Control 
                                        as="select" 
                                        name="cant_hijos" 
                                        value={cantHijos} 
                                        onChange={e => setCantHijos(e.target.value)} 
                                        ref={register()}
                                        required
                                    >
                                        <option value="0">NO TIENE HIJOS</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </Form.Control>
                                </Col>
                            </Row>
                            <br />
                            {/* PONER QUE CUANDO TENGA HIJOS CARGUE LOS DATOS DE LOS HIJOS. 1 HIJO = FORM, 3 HIJOS = 3 FORM */}
                            {(cantHijos === "1" || cantHijos === "2" || cantHijos === "3" || cantHijos === "4" || cantHijos === "5" || cantHijos === "6" || cantHijos === "7" || cantHijos === "8" || cantHijos === "9" || cantHijos === "10") && <>
                                <Row>
                                    <Col md={10}><Form.Label><b>DATOS DE LOS HIJOS</b></Form.Label></Col>
                                </Row>
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 1 - NOMBRE</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU NOMBRE" 
                                            required 
                                            name="nombre" 
                                            value={hijo1.nombre}
                                            onChange={e => handleChangeHijo1(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 1 - APELLIDO</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU APELLIDO" 
                                            required 
                                            name="apellido" 
                                            value={hijo1.apellido}
                                            onChange={e => handleChangeHijo1(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 1 - DNI</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU DNI" 
                                            required 
                                            name="dni" 
                                            value={hijo1.dni}
                                            onChange={e => handleChangeHijo1(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                            </>}
                            {(cantHijos === "2" || cantHijos === "3" || cantHijos === "4" || cantHijos === "5" || cantHijos === "6" || cantHijos === "7" || cantHijos === "8" || cantHijos === "9" || cantHijos === "10") && <>
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>Hijo 2 - Nombre</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Ingrese su Nombre" 
                                            required 
                                            name="nombre" 
                                            value={hijo2.nombre}
                                            onChange={e => handleChangeHijo2(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>Hijo 2 - Apellido</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        {/* Nombre, Apellido, DNI.  */}
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Ingrese su Apellido" 
                                            required 
                                            name="apellido" 
                                            value={hijo2.apellido}
                                            onChange={e => handleChangeHijo2(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 2 - DNI</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU DNI" 
                                            required 
                                            name="dni" 
                                            value={hijo2.dni}
                                            onChange={e => handleChangeHijo2(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                            </>}
                            {(cantHijos === "3" || cantHijos === "4" || cantHijos === "5" || cantHijos === "6" || cantHijos === "7" || cantHijos === "8" || cantHijos === "9" || cantHijos === "10") && <>
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 3 - NOMBRE</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU NOMBRE" 
                                            required 
                                            name="nombre" 
                                            value={hijo3.nombre}
                                            onChange={e => handleChangeHijo3(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 3 - APELLIDO</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU APELLIDO" 
                                            required 
                                            name="apellido" 
                                            value={hijo3.apellido}
                                            onChange={e => handleChangeHijo3(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 3 - DNI</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU DNI" 
                                            required 
                                            name="dni" 
                                            value={hijo3.dni}
                                            onChange={e => handleChangeHijo3(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                            </>}
                            {(cantHijos === "4" || cantHijos === "5" || cantHijos === "6" || cantHijos === "7" || cantHijos === "8" || cantHijos === "9" || cantHijos === "10") && <>
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 4 - NOMBRE</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU NOMBRE" 
                                            required 
                                            name="nombre" 
                                            value={hijo4.nombre}
                                            onChange={e => handleChangeHijo4(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 4 - APELLIDO</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU APELLIDO" 
                                            required 
                                            name="apellido" 
                                            value={hijo4.apellido}
                                            onChange={e => handleChangeHijo4(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 4 - DNI</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU DNI" 
                                            required 
                                            name="dni" 
                                            value={hijo4.dni}
                                            onChange={e => handleChangeHijo4(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                            </>}
                            {(cantHijos === "5" || cantHijos === "6" || cantHijos === "7" || cantHijos === "8" || cantHijos === "9" || cantHijos === "10") && <>
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 5 - NOMBRE</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU NOMBRE" 
                                            required 
                                            name="nombre" 
                                            value={hijo5.nombre}
                                            onChange={e => handleChangeHijo5(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 5 - APELLIDO</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        {/* Nombre, Apellido, DNI.  */}
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU APELLIDO" 
                                            required 
                                            name="apellido" 
                                            value={hijo5.apellido}
                                            onChange={e => handleChangeHijo5(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 5 - DNI</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU DNI" 
                                            required 
                                            name="dni" 
                                            value={hijo5.dni}
                                            onChange={e => handleChangeHijo5(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                            </>}
                            {(cantHijos === "6" || cantHijos === "7" || cantHijos === "8" || cantHijos === "9" || cantHijos === "10") && <>
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 6 - NOMBRE</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU NOMBRE" 
                                            required 
                                            name="Nombre" 
                                            value={hijo6.nombre}
                                            onChange={e => handleChangeHijo6(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 6 - APELLIDO</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU APELLIDO" 
                                            required 
                                            name="apellido" 
                                            value={hijo6.apellido}
                                            onChange={e => handleChangeHijo6(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 6 - DNI</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU DNI" 
                                            required 
                                            name="dni" 
                                            value={hijo6.dni}
                                            onChange={e => handleChangeHijo6(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                            </>}
                            {(cantHijos === "7" || cantHijos === "8" || cantHijos === "9" || cantHijos === "10") && <>
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 7 - NOMBRE</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU NOMBRE" 
                                            required 
                                            name="nombre" 
                                            value={hijo7.nombre}
                                            onChange={e => handleChangeHijo7(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 7 - APELLIDO</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU APELLIDO" 
                                            required 
                                            name="apellido" 
                                            value={hijo7.apellido}
                                            onChange={e => handleChangeHijo7(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 7 - DNI</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU DNI" 
                                            required 
                                            name="dni" 
                                            value={hijo7.dni}
                                            onChange={e => handleChangeHijo7(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                            </>}
                            {(cantHijos === "8" || cantHijos === "9" || cantHijos === "10") && <>
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 8 - NOMBRE</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU NOMBRE" 
                                            required 
                                            name="nombre" 
                                            value={hijo8.nombre}
                                            onChange={e => handleChangeHijo8(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 8 - APELLIDO</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU APELLIDO" 
                                            required 
                                            name="apellido" 
                                            value={hijo8.apellido}
                                            onChange={e => handleChangeHijo8(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 8 - DNI</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU DNI" 
                                            required 
                                            name="dni" 
                                            value={hijo8.dni}
                                            onChange={e => handleChangeHijo8(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                            </>}
                            {(cantHijos === "9" || cantHijos === "10") && <>
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 9 - NOMBRE</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU NOMBRE" 
                                            required 
                                            name="nombre" 
                                            value={hijo9.nombre}
                                            onChange={e => handleChangeHijo9(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 9 - APELLIDO</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        {/* Nombre, Apellido, DNI.  */}
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU APELLIDO" 
                                            required 
                                            name="apellido" 
                                            value={hijo9.apellido}
                                            onChange={e => handleChangeHijo9(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 9 - DNI</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU DNI" 
                                            required 
                                            name="dni" 
                                            value={hijo9.dni}
                                            onChange={e => handleChangeHijo9(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                            </>}
                            {(cantHijos === "10") && <>
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 10 - NOMBRE</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU NOMBRE" 
                                            required 
                                            name="nombre" 
                                            value={hijo10.nombre}
                                            onChange={e => handleChangeHijo10(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 10 - APELLIDO</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        {/* Nombre, Apellido, DNI.  */}
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU APELLIDO" 
                                            required 
                                            name="apellido" 
                                            value={hijo10.apellido}
                                            onChange={e => handleChangeHijo10(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={3}>
                                        <Form.Label><b>HIJO 10 - DNI</b></Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="INGRESÁ SU DNI" 
                                            required 
                                            name="dni" 
                                            value={hijo10.dni}
                                            onChange={e => handleChangeHijo10(e)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                            </>}
                            <Row>
                                <Col md={3}>
                                    <Form.Label>DISCAPACIDAD</Form.Label>
                                </Col>
                                <Col md={7}>
                                    <Form.Control as="select" name="discapacidad" ref={register()} required>
                                        <option value="NO">NO</option>
                                        <option value="Motriz">MOTRIZ</option>
                                        <option value="Motriz Vivienda Adaptada">MOTRIZ VIVIENDA ADAPTADA</option>
                                        <option value="Visual">VISUAL</option>
                                        <option value="Auditiva">AUDITIVA</option>
                                        <option value="Intelectual">INTELECTUAL</option>
                                    </Form.Control>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col md={3}></Col>
                                <Col md={7}>
                                    <Form.Check 
                                        type="checkbox" 
                                        name="vivienda_adaptada" 
                                        ref={register()} 
                                        label="SOLICITA VIVIENDA ADAPTADA PARA SILLA DE RUEDAS." 
                                    />
                                </Col>
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
                                    <Form.Label>LOCALIDAD</Form.Label>
                                </Col>
                                <Col md={7}>
                                    <Form.Control type="text" defaultValue="San Nicolás" placeholder="INGRESÁ TU LOCALIDAD" required name="localidad" ref={register()} />
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
                                        value={telefono}
                                        onChange={e => setTelefono(e.event.value)}
                                    />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col md={3}>
                                    <Form.Label>EMAIL</Form.Label>
                                </Col>
                                <Col md={7}>
                                    <Form.Control type="email" placeholder="INGRESÁ TU EMAIL" required name="email" ref={register()} />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col md={3}>
                                    <Form.Label>TRABAJO</Form.Label>
                                </Col>
                                <Col md={7}>
                                    <Form.Control as="select" name="trabajo" ref={register()} >
                                        <option value="1">NO</option>
                                        <option value="2">DEPENDENCIA</option>
                                        <option value="3">INFORMAL</option>
                                        <option value="4">MONOTRIBUTO</option>
                                        <option value="5">AUTONOMO</option>
                                    </Form.Control>
                                </Col>
                            </Row>
                            <br />
                            {/* <Row>
                                <Col md={3}>
                                    <Form.Label>Fecha Ingreso Laboral</Form.Label>
                                </Col>
                                <Col md={7}>
                                    <DatePicker
                                        selected={startWorkingDate}
                                        onChange={(date) => setStartWorkingDate(date)}
                                        dateFormat="dd/MM/yyyy"
                                        isClearable
                                        required
                                        name="fecha_ingreso_laboral"
                                        ref={register()}
                                    />
                                </Col>
                            </Row> */}
                            <Row>
                                <Col md={3}>
                                    <Form.Label>INGRESO FAMILIAR MENSUAL $</Form.Label>
                                </Col>
                                <Col md={7}>
                                    <Form.Control 
                                        type="number" 
                                        placeholder="INGRESÁ EL MONTO" 
                                        required 
                                        name="ingreso_familiar" 
                                        ref={register()} 
                                    />
                                </Col>
                            </Row>
                            <br />
                            {/* <Row>
                                <Col md={3}>
                                    <Form.Label>Plan Social</Form.Label>
                                </Col>
                                <Col md={7}>
                                    <Form.Control type="text" defaultValue="NO" required name="plan_social" ref={register()} />
                                </Col>
                            </Row> */}
                            <br />
                            <Row>
                                <Col md={3}>
                                    <Form.Label>PLAN SOCIAL/AUH</Form.Label>
                                </Col>
                                <Col md={7}>
                                    <Form.Control as="select" name="plan_social" ref={register()}>
                                        <option value="NO">NO</option>
                                        <option value="SI">SI</option>
                                    </Form.Control>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col md={3}>
                                    <Form.Label>SITUACIÓN</Form.Label>
                                </Col>
                                <Col md={7}>
                                    <Form.Check 
                                        type="checkbox" 
                                        name="situacion"
                                        ref={register()} 
                                        label="MANIFIESTO BAJO DECLARACIÓN JURADA QUE NINGÚN INTEGRANTE DEL GRUPO FAMILIAR CONVIVIENTE POSEE VIVIENDA Y/O TERRENO. " 
                                    />

                                    {/* <Form.Control as="select" name="situacion" ref={register()}>
                                        <option value="1">Propietario de Vivienda</option>
                                        <option value="2">Propietario de Vivienda Precaria</option>
                                        <option value="3">No Posee Vivienda</option>
                                        <option value="4">Propietario de Terreno</option>
                                    </Form.Control> */}
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col md={3}>
                                    <Form.Label>OBSERVACIÓN</Form.Label>
                                </Col>
                                <Col md={7}>
                                    <Form.Control as="textarea" placeholder="INGRESÁ UNA OBSERVACIÓN" name="observacion" ref={register()}></Form.Control>
                                </Col>
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
    )
}
export default NuevoInscriptoPage;