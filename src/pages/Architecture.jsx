import React from "react"
import { Row, Col } from 'antd';

class Architecture extends React.Component {
    render() {
        return (
            <div className="page" id="architecture-wrap">
                <h2>Architecture</h2>
                <div className="grid">
                    <Row gutter={[16, 16]}>
                        <Col lg={{ span: 8 }} xs={{ span: 24, offset: 0 }}>
                            <h4>Components</h4>
                            <p>The solutions consists of multible Azure Resources.</p>
                            <ul>
                                <li>Key Vault: To store app id and secrets</li>
                                <li>App Service: Frontend Web GUI</li>
                                <li>Functions App: Backend Logic</li>
                                <li>Storage Account: Needed by the Functions App</li>
                                <li>Cosmos DB: Store Data</li>
                            </ul>
                            <p>The system while in developing is not restricted in any kind. It is totaly free. But please be aware that the deployed Azure Ressources will generate some cost. At the moment I'm unable to give you some number. I have yet to test the system for a longer period of time.</p>
                        </Col>
                        <Col lg={{ span: 8 }} xs={{ span: 24, offset: 0 }}>
                            <h4>Documentation</h4>
                            <p>The documentation part is still under construction and will be improved over the next months, You can find all docs on <a target="_blank" href="https://docs.kiri.codes">docs.kiri.codes</a></p>
                        </Col>
                        <Col lg={{ span: 8 }} xs={{ span: 24, offset: 0 }}>
                            <h4>Deployment</h4>
                            <p>The deployment process is automated in an ARM Template. You can use the deploy button, login to your tenant and deploy it. Follow the instructions <a target="_blank" href="https://docs.kiri.codes/#/installation">here </a></p>
                            <p><b>Important! kiri is in development. I do not guarantee for the stability and functionality of the app. Try it on your own risk.</b></p>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Architecture;