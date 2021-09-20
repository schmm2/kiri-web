import React from "react"
import './contact.css'

class Contact extends React.Component {

    render() {
        return (
            <div className="page background-dark" id="contact-wrap">
                <h2>Contact</h2>
                <p className="text-center">I would love to hear your feedback. Send me a message and I will get back at you as soon possible.</p>
                <p className="text-center"><a href="mailto:hello@martinschmidli.com">hello@martinschmidli.com</a></p>
            </div>
        );
    }
}

export default Contact;