import React from 'react'

type AvatarProps = {
    className ?: string
    alt ?: any
    src ?: string
}

const UserAvatar = ({className , src , alt} : AvatarProps) => {
  return (
    <div>
        { src ? ( 
        <img className={`w-32px h-32px rounded-50px border ${className}`} src={src} alt={alt} />
        ) : (
         <img className={`w-32p h-32px rounded-50px border ${className}`} src="https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png" alt={alt} />
        )}
    </div>
  )
}

export default UserAvatar