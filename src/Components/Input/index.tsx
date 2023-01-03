import { Eye, EyeSlash } from "../../assets/Icon";
import { useState } from "react";
interface Input {
  type:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  placeholder: string;
}

const Input = ({ type, placeholder }: Input) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-343 h-56  mr-16 border rounded-15">
      <input
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        className="w-311 h-32 ml-16 mr-16 mb-12 mt-12 border-none outline-none"
      ></input>
      {type === "password" ? (
        <i
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          <span className="absolute r-30 b-7">
            {showPassword ? <Eye /> : <EyeSlash />}
          </span>
        </i>
      ) : null}
    </div>
  );
};

export default Input;
