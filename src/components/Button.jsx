const Button = ({ bgColor, color, size, text, borderRadius, width }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl w-${width}`}
    >
      {text}
    </button>
  );
};

export default Button;
