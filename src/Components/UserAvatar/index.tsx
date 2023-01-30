import { DefaultAvatar } from "../../assets/Icons";

type AvatarProps = {
  name?: string;
  src?: string | undefined;
  className?: string;
  onClick?: () => void;
};

/* To use it =>  <UserAvatar name="Albert John" className="h-32px w-32px" /> */
/* To use it =>  <UserAvatar src="https://www.kindpng.com/picc/m/236-2362818_anime-sempai-animegirl-heart-kawaii-cute-anime-girl.png" name="Albert John" /> */

const UserAvatar = ({ name, src, className, onClick }: AvatarProps) => {
  const AvatarClasses = "rounded-50px border-2px-white outline flex justify-center";
  if (src) {
    return <img onClick={onClick} className={` object-fit ${className} ${AvatarClasses}`} src={src} alt="Avatar" />;
    
  } else if (name) {
    return (
      <div
        onClick={onClick}
        className={`items-center text-white bg-red ${className} ${AvatarClasses}`}
      >
        <h5>{`${name
          .split(" ")
          .map((name) => name[0])
          .join("")
          .toUpperCase()}`}</h5>
      </div>
    );
  } else {
    return (
      <div className={`${className} ${AvatarClasses}`}>
        <DefaultAvatar className="" />
      </div>
    );
  }
};

export default UserAvatar;
