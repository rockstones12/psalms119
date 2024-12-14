

type ButtonProps = {
    type: "button" | "submit";
    title: string | React.ReactNode;
    className?: string;
    disabled?: boolean;
  };
  
  const Button = ({ type, title, className, disabled}: ButtonProps) => {
    return (
      <div>
        <button 
          type={type}
          className={`${className}`}
          disabled={disabled}
        >
          {title}
        </button>
      </div>
    );
  };
  
  export default Button;
  