import React from "react";
import "./Modal.css";

export default function(props) {
  const { tin, name, address, psrn, dateReg } = props.formData;
  return (
    <form className="modal-form" onSubmit={props.onSubmitForm}>
      <label>
        ИНН
        <input
          id="tin"
          type="text"
          value={tin}
          onChange={props.onChangeInput}
        />
        <button onClick={props.loadData}>Загрузить</button>
      </label>
      <label>
        Имя
        <input
          id="name"
          type="text"
          value={name}
          onChange={props.onChangeInput}
        />
      </label>
      <label>
        Адрес
        <input
          id="address"
          type="text"
          value={address}
          onChange={props.onChangeInput}
        />
      </label>
      <label>
        ОГРН
        <input
          id="psrn"
          type="text"
          value={psrn}
          onChange={props.onChangeInput}
        />
      </label>
      <label>
        Дата регистрации
        <input
          id="dateReg"
          type="text"
          value={dateReg}
          onChange={props.onChangeInput}
        />
      </label>
      <br />
      <input type="submit" value="Отправить" />
    </form>
  );
}
