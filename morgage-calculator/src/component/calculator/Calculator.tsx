// import { useState } from "react";
import { useContext, useState } from "react";
import Style from "../calculator/calculator.module.css";
import MorgageInput from "../morgageAmount/morgageAMount";
import MorgageSecondInput from "../morgageSecondInput/morgageSecondInput";
import { AppContext } from "../Context/AppContext";
// import { monthlyRepayments } from "../helpers/helpers";
// import { ICalculateMonthlyPayments } from "../../type.Interface";
import { interestPayment, monthlyRepayments } from "../helpers/helpers";
import calculatorIcon from "../../assets/iconCalculator.svg";
// import { Form } from "react-router-dom";

const Calculator = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [validated, setValidated] = useState(false);

  const { setDisplay, setBGColor } = useContext(AppContext);

  const {
    principal,
    year,
    setYear,
    interestRate,
    setInterestRate,
    setMonthlyPayment,
    setTotalMonthlyPayment,
  } = useContext(AppContext);

  const handleClear = () => {
    window.location.reload();
  };

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  const handlePaymentChange = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (selectedValue === "Repayment") {
      monthlyRepayments({
        principal: principal,
        year: year,
        interestRate: interestRate,
        setMonthlyPayment: setMonthlyPayment,
        setTotalMonthlyPayment: setTotalMonthlyPayment,
      });
    } else {
      interestPayment({
        principal: principal,
        year: year,
        interestRate: interestRate,
        setMonthlyPayment: setMonthlyPayment,
        setTotalMonthlyPayment: setTotalMonthlyPayment,
      });
    }

    if (principal === "") {
      setBGColor("red");
    } else {
      setBGColor("#e3f3fd");
    }

    setDisplay(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event?.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div style={{ padding: "2.5rem" }}>
      <form
        noValidate={validated}
        onSubmit={handleSubmit}
        style={{ width: "100%" }}
      >
        <div className={Style.header}>
          <h1>Morgage Calculator</h1>
          <button className={Style.clearAll} onClick={() => handleClear()}>
            Clear All
          </button>
        </div>
        <MorgageInput label="Morgage Amount" />
        <div className={Style.morgageSecondContainer}>
          <div
            style={{
              width: "48.5%",
              marginRight: "3%",
            }}
          >
            <MorgageSecondInput
              label="Morgage Term"
              symbol="years"
              value={year}
              state={setYear}
            />
          </div>
          <div
            style={{
              width: "48.5%",
            }}
          >
            <MorgageSecondInput
              label="Interest Rate"
              symbol="%"
              value={interestRate}
              state={setInterestRate}
            />
          </div>
        </div>

        <div style={{ marginTop: "1.875rem" }}>
          <p style={{ color: "#4e6e7e", margin: "0" }}>Mortgage Type</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={Style.repaymentContainer}>
              <input
                type="radio"
                id="Repayment"
                name="mortgageType"
                value="Repayment"
                checked={selectedValue === "Repayment"}
                className={Style.repaymentRadio}
                onChange={() => handleRadioChange("Repayment")}
              />
              <span>Repayment</span>
            </div>
            <div className={Style.interestContainer}>
              <input
                type="radio"
                id="Interest"
                name="mortgageType"
                value="Interest"
                checked={selectedValue === "Interest"}
                className={Style.interestRadio}
                onChange={() => handleRadioChange("Interest")}
              />
              <span>Interest Only</span>
            </div>
          </div>
        </div>
        <div>
          <button
            className={Style.calculatePayment}
            onClick={handlePaymentChange}
          >
            <img src={calculatorIcon} alt="calculator-icon" />
            Calculate Repayments
          </button>
        </div>
      </form>
    </div>
  );
};
export default Calculator;
