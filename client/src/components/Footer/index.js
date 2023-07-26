import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/logo.png";
import navIcon1 from "../../assets/nav-icon1.svg";
import navIcon3 from "../../assets/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/simone-monari-40502527a/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Purplelume"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Thank you! For visiting my page!</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;