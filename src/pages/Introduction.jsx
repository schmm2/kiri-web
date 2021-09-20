import React from "react"
import { Row, Col } from 'antd';

class Introduction extends React.Component {

  render() {
    return (
      <div className="page" id="introduction-wrap">
        <h2>Vision</h2>
        <div className="grid">
          <Row gutter={[50, 50]}>
            <Col lg={{ span: 12 }} xs={{ span: 24 }} >
              <h4>Challenges</h4>
              <div className="titleDivider"></div>
              <p>
                Microsft Endpoint Manager or to be more accurate Microsoft Intune is an amazing Mobile Device Management (MDM). It's not perfect but Microsoft is working hard to improve the system. Every month new features and fixes are coming out. The community is big, helpful, and is always supporting each other with advice and scripts. So what's the problem then?
              </p>
              <p>
                I believe that there are certain functionalities that alot of companies, Managed Service Providers (MSP) in particular, are missing. In our eyes, Intune offers a lot of Management functionality if you manage only one tenant. As soon as your number of customers is growing you will find yourself doing a lot of repetitive tasks and logging off and on from a lot of tenants a day.
              </p>
              <p>
                As MSP you can only create a cost-efficient service if you can scale your services. One key factor is to keep the same standards on all your managed tenants and keep your repetitive tasks to a minimum.
              </p>
            </Col>
            <Col lg={{ span: 12 }} xs={{ span: 24 }}>
              <h4>Vision</h4>
              <div className="titleDivider"></div>
              <p>
                Kiri tries to solve some of these issues. The service will connect to your managed tenants and give you one view to see all devices, all policies and issues that might occure. Deployment of new policies is simplified. If there are changes made to Intune kiri will track them and give you a changce to restore to a previous version. Backups of your configurations will occur regularly.
              </p>
              <p>This solution is ment to be a public community project. During my time as System Engineer I had access to many great communities and I felt the need of giving something back.</p>
              <p>The following list of functionality might give you a better insight what kiri is supposed to solve.</p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Introduction;