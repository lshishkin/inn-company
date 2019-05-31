import React from "react";
import "./Table.css";

export default class extends React.Component {
  render() {
    const company = this.props.data.map(company => (
      <tr key={company.inn}>
        <td>{company.tin}</td>
        <td>{company.name}</td>
        <td>{company.address}</td>
        <td>{company.psrn}</td>
        <td>{company.dateReg}</td>
        <td>
          <span onClick={() => this.props.handleClick(company.inn)}>x</span>
        </td>
      </tr>
    ));
    return (
      <table className="table">
        <tbody>
          <tr>
            <th>ИНН</th>
            <th>Имя</th>
            <th>Адрес</th>
            <th>ОГРН</th>
            <th>Дата регистрации</th>
          </tr>
          {company}
        </tbody>
      </table>
    );
  }
}
