import React from "react";
import Helmet from "../components/Helmet/Helmet";
import "../styles/Home.css";

import { Container, Row, Col } from "reactstrap";
import heroImage from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";

const Home = () => {
  const year = new Date().getFullYear();
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                  quo totam laboriosam odio. Repellendus omnis vero magnam neque
                  molestias et.
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="shop__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImage} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
    </Helmet>
  );
};

export default Home;
