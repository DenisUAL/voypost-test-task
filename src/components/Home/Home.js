import React, { Component } from "react";
import "./Home.css";
import "antd/dist/antd.css";
import moment from "moment";
import { Table, Input } from "antd";
import { setTrips, getTrips } from "../../store/actions";
const { Search } = Input;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { noSearchResutls: false };
    this.columns = [
      { dataIndex: "fromName", title: "From", key: "fromName" },
      { dataIndex: "toName", title: "To", key: "toName" },
      { dataIndex: "departAt", title: "Departure time", key: "departAt" },
      { dataIndex: "vehicle", title: "Vehicle", key: "vehicle" }
    ];
  }

  componentDidMount() {
    this.props.dispatch(getTrips());
  }

  clearSearch = e => {
    if (e.target.value === "") {
      this.props.dispatch(getTrips());
      this.setState({ noSearchResutls: false });
    }
  };

  search = value => {
    const { trips, dispatch } = this.props;
    if (value === "") {
      return dispatch(getTrips());
    }
    const searchStr = value.toLowerCase();
    const filteredTrips = trips.filter(
      trip =>
        trip.fromName.toLowerCase().includes(searchStr) ||
        trip.toName.toLowerCase().includes(searchStr)
    );
    if (filteredTrips.length) {
      dispatch(setTrips(filteredTrips));
      this.setState({ noSearchResutls: false });
    } else {
      this.setState({ noSearchResutls: true });
    }
  };

  render() {
    const { trips } = this.props;
    const { noSearchResutls } = this.state;
    const data = trips.map((trip, index) => ({
      ...trip,
      departAt: moment(trip.departAt).format("MMMM Do YYYY, h:mm a"),
      key: index
    }));
    return (
      <div className="container">
        <div className="title">Available trips:</div>
        <Search
          className="search"
          placeholder="Search by departure and arrival points"
          onSearch={this.search}
          onChange={this.clearSearch}
          style={{ width: 400 }}
        />
        {noSearchResutls ? (
          <div className="message">No matching trips found</div>
        ) : (
          <Table columns={this.columns} dataSource={data} />
        )}
      </div>
    );
  }
}
