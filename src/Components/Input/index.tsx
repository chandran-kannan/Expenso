import { Eye, EyeSlash } from "../../assets/Icons";
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
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="relative w-343px h-56px  mr-16px border rounded-15px">
      <input
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        className="w-311px h-32px ml-16px mr-16px mb-12px mt-12px border-none outline-none font-size-18px"
      ></input>
      {type === "password" ? (
        <i
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          <span className="absolute r-30px b-10px">
            {showPassword ? <Eye /> : <EyeSlash />}
          </span>
        </i>
      ) : null}
    </div>
  );
};

export default Input;
