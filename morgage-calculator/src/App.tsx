import { Route, Routes } from "react-router-dom";
import "./App.css";
import FirstPage from "./page/FirstPage";
import { AppContext } from "./component/Context/AppContext";
import { ICalculator } from "./type.Interface";
import { useState } from "react";

function App() {
  const [principal, setPrincipal] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [interestRate, setInterestRate] = useState<string>("");
  const [monthlyPayment, setMonthlyPayment] = useState<string>("");
  const [totalMonthlyPayment, setTotalMonthlyPayment] = useState<string>("");
  const [display, setDisplay] = useState<boolean>(true);
  const [bgColor, setBGColor] = useState<string>("#e3f3fd");

  const providerValue: ICalculator = {
    principal,
    setPrincipal,
    year,
    setYear,
    interestRate,
    setInterestRate,
    monthlyPayment,
    setMonthlyPayment,
    totalMonthlyPayment,
    setTotalMonthlyPayment,
    display,
    setDisplay,
    bgColor,
    setBGColor,
  };

  return (
    <AppContext.Provider value={providerValue}>
      <Routes>
        <Route path="/" element={<FirstPage />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
