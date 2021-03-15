import React from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { Row, Col } from 'antd';
import './contact.css'

class Contact extends React.Component {

    render() {
        return (
            <div className="page background-dark" id="contact-wrap">
                <h2>Contact</h2>
                <Row gutter={[50, 50]}>
                    <Col lg={{ span: 12 }} xs={{ span: 24 }} >
                        <h3>Get in touch</h3>
                        <p>We would love to hear your feedback. Send us a message and we will get back at you as soon possible.</p>
                        <p><a href="mailto:hello@kiri.codes">hello@kiri.codes</a></p>
                    </Col>
                    <Col lg={{ span: 12 }} xs={{ span: 24 }}>
                        <h3>Get the news</h3>
                        <div id="newsletter-signup">
                            <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Contact;