import React, { Component } from "react";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  Month,
  WorkWeek,
  Agenda,
  ResourceDirective,
  ResourcesDirective,
} from "@syncfusion/ej2-react-schedule";

class Calender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      resourceDataSource: [],
    };
  }

  async componentDidMount() {
    await fetch(
      "http://localhost:3000/https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData"
    )
      .then(async (res) => await res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          members: json,
        });
      });
  }

  //localData = members;

  render() {
    return (
      // <ScheduleComponent>
      //   <Inject services={[Day, Week, Month, Agenda]} />
      // </ScheduleComponent>

      <ScheduleComponent
        height="550px"
        selectedDate={new Date(2020, 4, 8)}
        eventSettings={{ dataSource: this.members }}
      >
        <Inject services={[Day, Week, Month, Agenda]} />
        {/* <ResourcesDirective>
          <ResourceDirective
            field="ResourceID"
            tittle="Resource Name"
            textField="Name"
            idField="Id"
            colorField="Color"
          ></ResourceDirective>
        </ResourcesDirective> */}
      </ScheduleComponent>
    );
  }
}

export default Calender;
