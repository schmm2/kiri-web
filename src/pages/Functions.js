import React from "react"
import { Row, Col, Card, Avatar, Divider } from 'antd';

// images
import ImageCopy from '../assets/img/copy.png';
import ImageHistory from '../assets/img/track.png';
import ImageBackup from '../assets/img/backup.png';
import ImageDocumentation from '../assets/img/paper.png';
import ImageInventory from '../assets/img/inventory.png';
import ImageDeployment from '../assets/img/startup.png';
import ImageRuleset from '../assets/img/yellow-card.png';
import ImageConnector from '../assets/img/network.png';

const { Meta } = Card;

class Functions extends React.Component {

  render() {
    return (

      <div className="page background-bright" id="functions-wrap">
        <h2>Functions</h2>
        <p className="text-center">This is a list of functions which are planned to develop and integrate into kiri.</p>
        <div className="grid">
          <Divider>Shipped</Divider>
          <Row gutter={[16, 16]}>
            <Col lg={{ span: 8 }} xs={{ span: 24, offset: 0 }} >
              <Card hoverable={true}>
                <Meta
                  avatar={<Avatar shape={"square"} src={ImageCopy} alt="copy"/>}
                  title="Copy & Paste"
                  description="Policies and Configuration can be duplicated. Within or to another tenant"
                />
              </Card>
            </Col>
            <Col lg={{ span: 8 }} xs={{ span: 24, offset: 0 }}>
              <Card hoverable={true}>
                <Meta
                  avatar={<Avatar shape={"square"} src={ImageHistory} alt="version" />}
                  title="Version control"
                  description="Every change is tracked and can be restore to a previous state."
                />
              </Card>
            </Col>
            <Col lg={{ span: 8 }} xs={{ span: 24 }}>
              <Card hoverable={true}>
                <Meta
                  avatar={<Avatar shape={"square"} src={ImageBackup} alt="backup"/>}
                  title="Backup & Restore"
                  description="All configurations are backed up and can be restored or exported as JSON files."
                />
              </Card>
            </Col>
          </Row>
        </div>
        <div className="grid">
          <Divider>Planned</Divider>
          <Row gutter={[16, 16]}>
            <Col lg={{ span: 8 }} xs={{ span: 24, offset: 0 }}>
              <Card hoverable={true}>
                <Meta
                  avatar={<Avatar shape={"square"} src={ImageInventory} alt="inventory" />}
                  title="Inventory"
                  description="Create a inventory of your devices and configurations."
                />
              </Card>
            </Col>
            <Col lg={{ span: 8 }} xs={{ span: 24, offset: 0 }}>
              <Card hoverable={true}>
                <Meta
                  avatar={<Avatar shape={"square"} src={ImageDocumentation} alt="documenation"/>}
                  title="Documentation"
                  description="Auto generate a MEM Documentation. Export as Pdf and Markdown."
                />
              </Card>
            </Col>
            <Col lg={{ span: 8 }} xs={{ span: 24, offset: 0 }}>
              <Card hoverable={true}>
                <Meta
                  avatar={<Avatar shape={"square"} src={ImageRuleset} alt="ruleset" />}
                  title="Ruleset"
                  description="Create ruleset. For example enforce a certain naming concepts for devices and configurations."
                />
              </Card>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col lg={{ span: 8 }} xs={{ span: 24, offset: 0 }}>
              <Card hoverable={true}>
                <Meta
                  avatar={<Avatar shape={"square"} src={ImageConnector} alt="connector" />}
                  title="CMDB-Connectors"
                  description="Connect Kiri to your CMDB. Automatically create device items and link them to the owner. Planned Systems: ServiceNow"
                />
              </Card>
            </Col>
            <Col lg={{ span: 8 }} xs={{ span: 24, offset: 0 }}>
              <Card hoverable={true}>
                <Meta
                  avatar={<Avatar shape={"square"} src={ImageDeployment} alt="deployment" />}
                  title="Deployment"
                  description="Deployment pipeline to deploy new configurations to all managed tenants."
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Functions;