import React, { Component } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import UserActivity from "./UserActivity.js";
import cal from "./cal.js";

class UserDashBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [],
      isLoaded: false,
      addModalShow: false,
      addModalShown: false,
      user_prop: " ",
    };
  }

  async componentDidMount() {
    await fetch("http://localhost:3000/members")
      .then(async (res) => await res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          members: json,
        });
      });
  }

  render() {
    var { members, user_prop } = this.state;

    let addModalClose = () => this.setState({ addModalShow: false });
    let addModalCloses = () => this.setState({ addModalShown: false });

    return (
      <div>
        <div className="toto1">
          <div>
            <h2>User List</h2>
            <div>
              {members.map((member) => (
                <div>
                  <ButtonToolbar
                    show={this.state.addModalShow}
                    onHide={addModalClose}
                  >
                    <Button
                      className="frndbutton"
                      key={member.id}
                      onClick={() =>
                        this.setState({
                          addModalShow: true,
                          user_prop: member,
                        })
                      }
                    >
                      {member.real_name}{" "}
                    </Button>
                    <UserActivity
                      show={this.state.addModalShow}
                      onHide={addModalClose}
                      member={user_prop}
                    />
                  </ButtonToolbar>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDashBoard;
