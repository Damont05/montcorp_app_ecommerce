import styles from "./Profile.module.css";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  ListGroup,
  Form,
  InputGroup,
} from "react-bootstrap";
import {
  PiUserCircle,
  PiShoppingBagBold,
  PiHeartStraightBold,
  PiClockCountdownBold,
  PiMapPinBold,
  PiPencilSimpleBold,
} from "react-icons/pi";
import { FaUserAstronaut } from "react-icons/fa";

const ProfilePresentation = ({ data }) => {
  const {
    isEditing,
    setIsEditing,
    userData,
    selectedCountry,
    handleCountryChange,
    countries,
  } = data;
  return (
    <>
      <Container fluid>
        <Card className={`${styles.cardProfile} `}>
          <Card.Header className={`${styles.cardHeader}`}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle overflow-hidden me-3"
                  style={{ width: "80px", height: "80px" }}
                >
                  <FaUserAstronaut size={80} />
                </div>
                <div>
                  <h4 className="mb-1">
                    {userData.name + " " + userData.lastname}
                  </h4>
                  <p className="mb-0 d-flex align-items-center">
                    <PiMapPinBold size={16} className="me-1" />
                    {userData.address
                      ? userData.address
                      : "Dirección no definida"}
                  </p>
                </div>
              </div>
              <Button
                variant="outline-light"
                className="d-flex align-items-center p-2"
                onClick={() => setIsEditing(!isEditing)}
              >
                <PiPencilSimpleBold size={16} className="me-2" />
                Edit Profile
              </Button>
            </div>
          </Card.Header>

          <Card.Body className="p-4">
            {isEditing ? (
              <Form>
                <Row>
                  <Col md={6} className="mb-3 p-2">
                    <Form.Group className={styles.customFormGroup}>
                      <Form.Control
                        id="nameInput" // Asegura que el input tenga un ID único
                        type="text"
                        name="name"
                        className={styles.profileInputField}
                        defaultValue={userData.name}
                        placeholder=""
                        autoComplete="off"
                      />
                      <Form.Label className={styles.customFloatingLabel}>
                        Nombres
                      </Form.Label>
                    </Form.Group>
                  </Col>

                  <Col md={6} className="mb-3 p-2">
                    <Form.Group className={styles.customFormGroup}>
                      <Form.Control
                        type="text"
                        name="lastname"
                        className={styles.profileInputField}
                        defaultValue={userData.lastname}
                        placeholder=""
                        autoComplete="off"
                      />
                      <Form.Label className={styles.customFloatingLabel}>
                        Apellidos
                      </Form.Label>
                    </Form.Group>
                  </Col>

                  <Col md={6} className="mb-3 p-2">
                    <Form.Group className={styles.customFormGroup}>
                      <InputGroup>
                        <Form.Select
                          name="code"
                          value={selectedCountry.code}
                          onChange={handleCountryChange}
                          className={styles.InputSelect}
                        >
                          {countries.map((country) => (
                            <option key={country.code} value={country.code}>
                              {country.flag} {country.code}
                            </option>
                          ))}
                        </Form.Select>
                        <Form.Control
                          type="tel"
                          name="phone"
                          className={styles.profileInputField}
                          defaultValue={userData.phone}
                          maxLength="9"
                          placeholder=""
                          autoComplete="off"
                        />
                        <Form.Label
                          className={`${styles.customFloatingLabel}`}
                          style={{ left: "8rem", zIndex: "5" }}
                        >
                          Número telefónico
                        </Form.Label>
                      </InputGroup>
                    </Form.Group>
                  </Col>

                  <Col md={6} className="mb-3 p-2">
                    <Form.Group className={styles.customFormGroup}>
                      <Form.Control
                        type="text"
                        name="lastname"
                        className={styles.profileInputField}
                        defaultValue={userData.address}
                        placeholder=""
                        autoComplete="off"
                      />
                      <Form.Label className={styles.customFloatingLabel}>
                        Dirección
                      </Form.Label>
                    </Form.Group>
                  </Col>

                  <Col md={6} className="mb-3 p-2">
                    <Form.Group className={styles.customFormGroup}>
                      <Form.Control
                        type="email"
                        name="email"
                        className={styles.profileInputField}
                        defaultValue={userData.email}
                        placeholder=""
                        autoComplete="off"
                      />
                      <Form.Label className={styles.customFloatingLabel}>
                        Correo
                      </Form.Label>
                    </Form.Group>
                  </Col>

                  <Col xs={12} className="text-end">
                    <Button
                      variant="secondary"
                      className="me-2 p-2"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancelar
                    </Button>
                    <Button className="me-2 p-2" variant="primary">
                      Guardar cambios
                    </Button>
                  </Col>
                </Row>
              </Form>
            ) : (
              <>
                <Row className="mb-4">
                  <Col sm={4} className="mb-3 mb-sm-0">
                    <Card className="text-center h-100 border-0 bg-light p-4">
                      <Card.Body>
                        <PiShoppingBagBold
                          className="mb-2 text-primary"
                          size={24}
                        />
                        <h5>28</h5>
                        <p className="text-muted mb-0">Pedidos.</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={4} className="mb-3 mb-sm-0">
                    <Card className="text-center h-100 border-0 bg-light p-4">
                      <Card.Body>
                        <PiHeartStraightBold
                          className="mb-2 text-danger"
                          size={24}
                        />
                        <h5>14</h5>
                        <p className="text-muted mb-0">Lista de deseos</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={4}>
                    <Card className="text-center h-100 border-0 bg-light p-4">
                      <Card.Body>
                        <PiClockCountdownBold
                          className="mb-2 text-success"
                          size={24}
                        />
                        <h5>2 Años</h5>
                        <p className="text-muted mb-0">Miembro desde</p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>

                <h5 className="mb-3">Pedidos recientes</h5>
                <ListGroup>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center p-4">
                    <div>
                      <h6 className="mb-1">
                        Vestido de la colección de verano
                      </h6>

                      <small className="text-muted">Pedido n.° 12345</small>
                    </div>
                    <div className="text-end">
                      <Badge bg="success" className="p-2">
                        Entregado
                      </Badge>
                      <div className="text-muted">$89.99</div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center p-4">
                    <div>
                      <h6 className="mb-1">Zapatillas casuales</h6>
                      <small className="text-muted">Pedido #12344</small>
                    </div>
                    <div className="text-end">
                      <Badge bg="primary" className="p-2">
                        En tránsito
                      </Badge>
                      <div className="text-muted">$129.99</div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center p-4">
                    <div>
                      <h6 className="mb-1">Chaqueta de invierno</h6>
                      <small className="text-muted">Pedido #12343</small>
                    </div>
                    <div className="text-end">
                      <Badge bg="success" className="p-2">
                        Entregado
                      </Badge>
                      <div className="text-muted">$199.99</div>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </>
            )}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ProfilePresentation;
