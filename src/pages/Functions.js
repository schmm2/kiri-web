import React from "react"
import './functions.css'
import { Row, Col, Card, Avatar } from 'antd';
import ImageCopy from '../assets/img/copy.png';

const { Meta } = Card;

class Functions extends React.Component {

  render() {
    return (

      <div className="page" id="functions-wrap">
        <h1>Functions</h1>
        <p>This is a list of functions which are planned to develop and integrate into Kiri.</p>
        <div className="functionGrid">
          <Row gutter={[16, 16]}>
            <Col lg={{ span: 8}} xs={{ span: 24, offset: 0}} >
              <Card hoverable={true}>
                <Meta
                  avatar={<Avatar shape={"square"} src={ImageCopy} />}
                  title="Copy & Paste"
                  description="This is the description"
                />
              </Card>
            </Col>
            <Col lg={{ span: 8}} xs={{ span: 24, offset: 0}}>
              <Card hoverable={true}>
                <Meta
                  avatar={<Avatar shape={"square"} src={ImageCopy} />}
                  title="Copy & Paste"
                  description="This is the description"
                />
              </Card>
            </Col>
            <Col lg={{ span: 8}} xs={{ span: 24 }}>
              <Card hoverable={true}>
                <Meta
                  avatar={<Avatar shape={"square"} src={ImageCopy} />}
                  title="Copy & Paste"
                  description="This is the description"
                />
              </Card>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col lg={{ span: 8}} xs={{ span: 24, offset: 0}}>
              <Card hoverable={true}>
                <Meta
                  avatar={<Avatar shape={"square"} src={ImageCopy} />}
                  title="Copy & Paste"
                  description="This is the description"
                />
              </Card>
            </Col>
            <Col span={8} />
            <Col span={8} />
          </Row>
        </div>
      </div>
    );
  }
}

export default Functions;