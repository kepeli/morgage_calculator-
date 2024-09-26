import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

import resultCover from "../../assets/illustration-empty.svg";

import style from "./result.module.css";

const Result = () => {
  const { monthlyPayment, totalMonthlyPayment, display } =
    useContext(AppContext);
  return (
    <>
      {!display && (
        <div className={style.resultContainer}>
          <div>
            <h1 className={style.captionHeader}>Your results</h1>
            <p className={style.headerContent}>
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              "calculate repayments" again.
            </p>
          </div>
          <div className={style.calculationContainer}>
            <div className={style.monthlyCalculation}>
              <h4 className={style.monthlyCalculationCaption}>
                Your monthly repayments
              </h4>
              <h4 className={style.resultValue}>£{monthlyPayment}</h4>
            </div>
            <hr />
            <div>
              <h4 className={style.monthlyCalculationCaption}>
                Total you'll repay over the term
              </h4>
              <h4 className={style.resultValue}>£{totalMonthlyPayment}</h4>
            </div>
          </div>
        </div>
      )}
      {display && (
        <div className={style.resultCoverContainer}>
          <div className={style.resultCover}>
            <img src={resultCover} alt="" />
          </div>
          <div className={style.resultCoverHeader}>
            <h1>Results shown here</h1>
          </div>
          <div className={style.resultCoverContent}>
            <p>
              Complete the form and click "calculate repayments" to see what
              your monthly repayments would be.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default Result;
