import "./Button.scss";

export const Button: React.FC<{
  buttonName?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ buttonName = "Click", onClick, className }) => {
  return (
    <button className={`shared-button ${className}`} onClick={onClick}>
      {buttonName}
    </button>
  );
};
