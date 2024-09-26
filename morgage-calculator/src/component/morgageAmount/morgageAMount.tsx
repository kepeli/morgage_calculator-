import { useContext } from "react";
import { IMorgageInput } from "../../type.Interface";
import { AppContext } from "../Context/AppContext";
import styles from "../morgageAmount/morgageAmount.module.css";

const MorgageInput = (props: IMorgageInput) => {
  const { principal, setPrincipal, bgColor } = useContext(AppContext);

  const { label } = props;
  return (
    <div>
      <label htmlFor="morgageAmount" className={`form-label ${styles.label}`}>
        {label}
      </label>
      <div className={`input-group mb-3 ${styles.principalInputForm}`}>
        <span
          className={`input-group-text ${styles.principalInputSpan}`}
          id="basic-addon1"
          style={{ backgroundColor: bgColor }}
        >
          £
        </span>
        <input
          type="number"
          className={`form-control ${styles.principalInputBar}`}
          // placeholder=""
          id="morgageAmount"
          // aria-label="morgageAmount"
          aria-describedby="basic-addon1"
          value={principal}
          onChange={(event) => setPrincipal(event.target.value)}
        />
      </div>
    </div>
  );
};
export default MorgageInput;
