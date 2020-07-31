import React, { Component, useState } from "react";
import { Modal, Row, Col, Form } from "react-bootstrap";
import cal from "./cal.js";
import { Button, ButtonToolbar } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

class UserActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalShow: false,
      date: new Date(),
    };
  }
  onChange = (date) => this.setState({ date });
  render(props) {
    const { show, onHide, member } = this.props;
    console.log(member);
    let addModalClose = () => this.setState({ addModalShow: false });
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
              User Activity
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Calendar onChange={this.onChange} value={this.state.date} />
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(this.state.date)}
            </div>
            {JSON.stringify(member.activity_periods)}

            {/* <div>
              {member.activity_periods
                .filter(
                  (times) =>
                    new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }).format(times.start_time) == "Feb 1 2020"
                )
                .map((filteredPerson) => (
                  <li>
                    {filteredPerson.start_time} {filteredPerson.end_time}
                  </li>
                ))}
            </div> */}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default UserActivity;
