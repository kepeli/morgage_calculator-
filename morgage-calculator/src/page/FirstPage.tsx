import Result from "../component/result/Result";
import Calculator from "../component/calculator/Calculator";
import Style from "../page/firstPage.module.css";

const FirstPage = () => {
  return (
    <div className={Style.firstpage}>
      <div className={Style.innerFirstpage}>
        <div className={Style.calculator}>
          <Calculator />
        </div>
        <div className={Style.result}>
          <Result />
        </div>
        {/* <div className={Style.innerMetricPage}></div> */}
      </div>
    </div>
  );
};
export default FirstPage;
