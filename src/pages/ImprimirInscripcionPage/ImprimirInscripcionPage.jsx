import React from 'react'
import {
    Container, Row, Col
} from 'react-bootstrap'
import logo from '../../../banner.jpg'

const ImprimirInscripcionPage = ({dataToPrint}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <center>
                        <img src={logo} alt="logo_sn"/>
                    </center>
                </Col>
            </Row>
            <Row>
                <Col md={10} style={{textAlign: "left"}}>
                    <b><h1>¡Listo!</h1></b>
                </Col>
            </Row>
            <Container style={{fontSize: 30}}>
                Ya estás inscripto en el Registro Único de Acceso a la Vivienda de la <br />
                Municipalidad de San Nicolás.<br />
                Tu inscripción te permite ser candidato para participar de los próximos<br />
                sorteos de viviendas que realicemos.<br />
                Recordá que previo a cada sorteo, publicaremos los requisitos necesarios<br />
                para acceder.<br />
                Podrás encontrar más información en www.sannicolasciudad.gob.ar
            </Container>
            <br />
            <h2>¡Buena Suerte!</h2>
            <br />
            <Row>
                <Col style={{fontSize: 25}}>
                    Nombre del titular: {dataToPrint && dataToPrint.nombre}{' '}{dataToPrint && dataToPrint.apellido}
                </Col>
            </Row>
            <Row>
                <Col style={{fontSize: 25}}>   
                    DNI: {dataToPrint && dataToPrint.dni}
                </Col>
            </Row>
        </Container>
    )
}


export default ImprimirInscripcionPage