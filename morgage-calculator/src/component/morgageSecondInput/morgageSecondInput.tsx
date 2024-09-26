import { useContext } from "react";
import { IMorgageSecondInput } from "../../type.Interface";
import { AppContext } from "../Context/AppContext";

import style from "../morgageSecondInput/morgageSecondInput.module.css";

const MorgageSecondInput = (props: IMorgageSecondInput) => {
  const { label, symbol, value, state } = props;
  const { bgColor } = useContext(AppContext);

  return (
    <div>
      <label htmlFor="morgageAmount" className={`form-label ${style.label}`}>
        {label}
      </label>
      <div className={`input-group mb-3 ${style.morgageSecondForm}`}>
        <input
          type="number"
          className={`form-control" ${style.morgageSecondInputBar}`}
          placeholder=""
          id="morgageAmount"
          value={value}
          onChange={(event) => state(event.target.value)}
          // aria-label="morgageAmount"
          // aria-describedby="basic-addon2"
        />
        <span
          className={style.morgageSecondSpan}
          style={{ backgroundColor: bgColor }}
        >
          {symbol}
        </span>
      </div>
    </div>
  );
};
export default MorgageSecondInput;
