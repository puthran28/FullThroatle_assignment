import React, { Component } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Modal, Row, Col, Button, Form } from "react-bootstrap";

class cal extends Component {
  state = {
    date: new Date(),
    addModalShown: false,
  };

  onChange = (date) => this.setState({ date });

  render() {
    let addModalCloses = () => this.setState({ addModalShown: false });
    return (
      <div>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Select Date
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Calendar onChange={this.onChange} value={this.state.date} />
              {/* {this.state.date.toString()} */}
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "long",
                day: "2-digit",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              }).format(this.state.date)}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default cal;
