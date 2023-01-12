import { DefaultAvatar } from '../../assets/Icons';

type AvatarProps = {
  name?: string;
  src?: string | undefined;
  className?: string;
  onClick?: () => void;
};

/* To use it =>  <UserAvatar name="Albert John" className="h-32px w-32px" /> */
/* To use it =>  <UserAvatar imageUrl="https://www.kindpng.com/picc/m/236-2362818_anime-sempai-animegirl-heart-kawaii-cute-anime-girl.png" /> */

const UserAvatar = ({ name, src, className, onClick }: AvatarProps) => {
  const AvatarClasses = () => {
    
  }
  if (name) {
    return (
      <div
        onClick={onClick}
        className={`rounded-50px border-1px-white flex justify-center items-center text-white bg-red outline ${className}`}
      >
        <h5>{`${name
          .split(' ')
          .map((name) => name[0])
          .join('')
          .toUpperCase()}`}</h5>
      </div>
    );
  } else if (src) {
    return (
      <img
        onClick={onClick}
        className={`rounded-50px border-1px-white object-fit outline ${className}`}
        src={src}
        alt="Avatar"
      />
    );
  } else {
    return (
      <div className={`rounded-50px border-1px-white flex justify-center outline  ${className}`}>
        <DefaultAvatar height={28} width={28} />
      </div>
    );
  }
};

export default UserAvatar;
