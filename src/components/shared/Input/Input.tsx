import "./Input.scss";

export const Input: React.FC<{
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  placeholder?: string;
  className?: string;
  height?: string;
  width?: string;
}> = ({
  onChange,
  value,
  placeholder = "Insert text",
  height = "20px",
  width = "100%",
  className,
}) => {
  return (
    <input
      type="text"
      style={{ height, width }}
      className={`shared-input ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
