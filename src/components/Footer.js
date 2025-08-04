import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/prashanth-da/">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="Placeholder" />
              </a>
              <a href="https://www.instagram.com/pr45h4n7h_r3ddy/?igsh=MTN2OGE1bTE5Z3JyMw%3D%3D#">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>

            {/* 🔥 Visitor Counter Badge */}
            <div style={{ marginTop: "10px" }}>
              <img
                src="https://api.visitorbadge.io/api/visitors?path=portfolio-theta-swart-10.vercel.app&label=Visitors&countColor=%23ffffff&labelColor=%2300ffaa&style=flat-square"
                alt="Visitor Count"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
