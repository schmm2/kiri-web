import React from "react"
import { Row, Col } from 'antd';

class Deploy extends React.Component {

    render() {
        return (
            <div className="page" id="deploy-wrap">
                <h2>Deployment</h2>
                <div className="grid">
                    <p className="text-center">The solutions consists of multible Azure Resources. The deployment process is automated in an ARM Template. You can use the button below, login to your tenant and deploy it.</p>
                    <div className="text-center">
                        <a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fschmm2%2Fkiri-backend%2Fdev%2Fdeployment%2Fazuredeploy.json" target="_blank"><img src="https://aka.ms/deploytoazurebutton" /></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Deploy;