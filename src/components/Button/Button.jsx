import style from "./Button.module.scss";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`${style.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <span className={style.buttonContent}>
        {props.text}
        {props.icon}
      </span>
    </button>
  );
};

export default Button;
