import { ICalculateMonthlyPayments } from "../../type.Interface";

export const monthlyRepayments = (props: ICalculateMonthlyPayments) => {
  const {
    principal,
    year,
    interestRate,
    setMonthlyPayment,
    setTotalMonthlyPayment,
  } = props;
  const monthlyInterestRate =
    interestRate !== undefined ? parseFloat(interestRate) / 100 / 12 : 0;

  const numberOfMonths = year !== undefined ? parseInt(year) * 12 : 0;

  const monthlyPayment =
    (principal !== undefined
      ? parseFloat(principal) * monthlyInterestRate
      : 0) /
    (1 - Math.pow(1 + monthlyInterestRate, -numberOfMonths));
  console.log("principal: " + principal);
  console.log("year: " + year);
  console.log("interestRate: " + interestRate);

  console.log("monthlyRepayments: " + monthlyPayment);

  const totalPayments = monthlyPayment * numberOfMonths;

  setMonthlyPayment(monthlyPayment.toFixed(2));
  setTotalMonthlyPayment(totalPayments.toFixed(2));
};

export const interestPayment = (props: ICalculateMonthlyPayments) => {
  const {
    principal,
    year,
    interestRate,
    setMonthlyPayment,
    setTotalMonthlyPayment,
  } = props;
  const monthlyInterestRate =
    interestRate !== undefined ? parseFloat(interestRate) / 100 / 12 : 0;

  const numberOfMonths = year !== undefined ? parseInt(year) * 12 : 0;

  const monthlyPayment =
    principal !== undefined ? parseFloat(principal) * monthlyInterestRate : 0;
  console.log("principal: " + principal);
  console.log("year: " + year);
  console.log("interestRate: " + interestRate);

  console.log("monthlyRepayments: " + monthlyPayment);

  const totalPayments = monthlyPayment * numberOfMonths;

  setMonthlyPayment(monthlyPayment.toFixed(2));
  setTotalMonthlyPayment(totalPayments.toFixed(2));
};

// for interest rate
//monthlyPayment = (principal * monthlyRate)
//const totalPayment = monthlyPayment * months;
