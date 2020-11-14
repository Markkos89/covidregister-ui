import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  const CustomInput = ({ value, onClick }) => (
    <Form.Control type="text" onClick={onClick} value={value} />
  );
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<CustomInput />}
    />
  );
};

export { Calendar };
