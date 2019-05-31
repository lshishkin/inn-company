import React from "react";
import ReactDOM from "react-dom";
import Table from "./component/Table";
import Modal from "./component/Modal";

import "./styles.css";
import { json } from "body-parser";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      formData: {
        tin: "",
        name: "",
        address: "",
        psrn: "",
        dateReg: ""
      },
      modal: false
    };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.loadData = this.loadData.bind(this);
  }
  onChangeInput(e) {
    const newFormData = Object.assign(this.state.formData, {
      [e.target.id]: e.target.value
    });
    this.setState({ formData: newFormData });
  }
  onSubmitForm(e) {
    e.preventDefault();
    const newData = {
      tin: this.state.formData.tin,
      name: this.state.formData.name,
      address: this.state.formData.address,
      psrn: this.state.formData.psrn,
      dateReg: this.state.formData.dateReg
    };
    this.setState({
      data: [...this.state.data, newData],
      formData: {
        tin: "",
        name: "",
        address: "",
        psrn: "",
        dateReg: ""
      }
    });
  }
  handleClick(inn) {
    const newData = this.state.data.filter(val => val.inn !== inn);
    this.setState({ data: [...newData] });
  }
  openModal() {
    this.setState({ modal: true });
  }
  loadData(e) {
    e.preventDefault();
    fetch("/api")
      .then(data => data.json())
      .then(data => console.log(data));
  }
  render() {
    let modal = this.state.modal ? (
      <Modal
        formData={this.state.formData}
        onSubmitForm={this.onSubmitForm}
        onChangeInput={this.onChangeInput}
        loadData={this.loadData}
      />
    ) : (
      ""
    );
    return (
      <div className="App">
        <Table data={this.state.data} handleClick={this.handleClick} />
        {modal}
        <button onClick={this.openModal}>Добавить</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
