import React, { Component, useState } from "react";
import { Modal, Row, Col, Form } from "react-bootstrap";
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
  render() {
    let { show, onHide, member, name } = this.props;
    let gogoo = this.props.member;
    console.log(JSON.stringify(gogoo));

    let addModalClose = () => this.setState({ addModalShow: false });

    console.log(JSON.stringify(member));

    var gogo = (mem) => {
      console.log(mem);
      for (let i = 0; i < mem.length; i++) {
        if (mem[i].start_time == "Feb 1 2020 , 1:33PM") {
          console.log(mem[i]);
          return mem[i];
        }
      }
    };

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
              {name}'s Activity
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <Calendar onChange={this.onChange} value={this.state.date} />

                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(this.state.date)}
              </div>
              <div>
                {JSON.stringify(member)}
                {gogo(this.props.member)}
              </div>
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

export default UserActivity;
