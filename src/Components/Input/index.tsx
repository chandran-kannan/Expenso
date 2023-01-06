import { Eye, EyeSlash } from '../../assets/Icons';
import { useState } from 'react';
interface Input {
  type:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  placeholder: string;
  name?: string;
  value?: string;
  pattern?: string;
  maxlength?: number;
  minlength?: number;
  className?:string;
  onChange?: () => void;
}

const Input = ({
  className,
  type,
  placeholder,
  name,
  value,
  pattern,
  maxlength,
  minlength,
  onChange,
}: Input) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className={`relative w-343px h-56px  mr-16px border rounded-15px ${className}`}>
      <input
        type={showPassword ? 'text' : type}
        placeholder={placeholder}
        name={name}
        value={value}
        pattern={pattern}
        maxLength={maxlength}
        minLength={minlength}
        onChange={onChange}
        className="w-311px h-32px ml-16px mr-16px mb-12px mt-12px border-none outline-none font-size-18px"
      ></input>
      {type === 'password' ? (
        <i
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          <span className="absolute r-30px b-10px">{showPassword ? <Eye width="30" height="30" /> : <EyeSlash width="30" height="30" />}</span>
        </i>
      ) : null}
    </div>
  );
};

export default Input;
