type IconProps = {
  className?: string;
  fill?: string;
};

export const LeftArrow = ({ className, fill }: IconProps) => {
  return (
    <svg className={className} viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23 7.99999H2.58998L7.99998 2.63999C8.09371 2.54703 8.16811 2.43643 8.21888 2.31457C8.26964 2.19271 8.29578 2.062 8.29578 1.92999C8.29578 1.79798 8.26964 1.66727 8.21888 1.54542C8.16811 1.42356 8.09371 1.31296 7.99998 1.21999C7.81262 1.03374 7.55917 0.929199 7.29498 0.929199C7.0308 0.929199 6.77735 1.03374 6.58998 1.21999L0.879985 6.87999C0.318183 7.44249 0.00262451 8.20499 0.00262451 8.99999C0.00262451 9.795 0.318183 10.5575 0.879985 11.12L6.53998 16.78C6.72625 16.9647 6.97764 17.0689 7.23998 17.07C7.37159 17.0708 7.50205 17.0455 7.62389 16.9958C7.74573 16.946 7.85654 16.8727 7.94998 16.78C8.04371 16.687 8.11811 16.5764 8.16888 16.4546C8.21964 16.3327 8.24578 16.202 8.24578 16.07C8.24578 15.938 8.21964 15.8073 8.16888 15.6854C8.11811 15.5636 8.04371 15.453 7.94998 15.36L2.58998 9.99999H23C23.2652 9.99999 23.5196 9.89464 23.7071 9.7071C23.8946 9.51956 24 9.26521 24 8.99999C24 8.73478 23.8946 8.48042 23.7071 8.29289C23.5196 8.10535 23.2652 7.99999 23 7.99999Z"
        fill={fill}
      />
    </svg>
  );
};
export const RightArrow = ({ className, fill }: IconProps) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path
        fill={fill}
        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
      />
    </svg>
  );
};
export const Delet = ({ className, fill }: IconProps) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
      <path
        fill={fill}
        d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
      />
    </svg>
  );
};
export const Eye = ({ className, fill }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className={className}>
      <path
        fill={fill}
        d="M160 256C160 185.3 217.3 128 288 128C358.7 128 416 185.3 416 256C416 326.7 358.7 384 288 384C217.3 384 160 326.7 160 256zM288 336C332.2 336 368 300.2 368 256C368 211.8 332.2 176 288 176C287.3 176 286.7 176 285.1 176C287.3 181.1 288 186.5 288 192C288 227.3 259.3 256 224 256C218.5 256 213.1 255.3 208 253.1C208 254.7 208 255.3 208 255.1C208 300.2 243.8 336 288 336L288 336zM95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6V112.6zM288 80C222.8 80 169.2 109.6 128.1 147.7C89.6 183.5 63.02 225.1 49.44 256C63.02 286 89.6 328.5 128.1 364.3C169.2 402.4 222.8 432 288 432C353.2 432 406.8 402.4 447.9 364.3C486.4 328.5 512.1 286 526.6 256C512.1 225.1 486.4 183.5 447.9 147.7C406.8 109.6 353.2 80 288 80V80z"
      />
    </svg>
  );
};
export const EyeSlash = ({ className, fill }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className={className}>
      <path
        fill={fill}
        d="M150.7 92.77C195 58.27 251.8 32 320 32C400.8 32 465.5 68.84 512.6 112.6C559.4 156 590.7 207.1 605.5 243.7C608.8 251.6 608.8 260.4 605.5 268.3C592.1 300.6 565.2 346.1 525.6 386.7L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L150.7 92.77zM189.8 123.5L235.8 159.5C258.3 139.9 287.8 128 320 128C390.7 128 448 185.3 448 256C448 277.2 442.9 297.1 433.8 314.7L487.6 356.9C521.1 322.8 545.9 283.1 558.6 256C544.1 225.1 518.4 183.5 479.9 147.7C438.8 109.6 385.2 79.1 320 79.1C269.5 79.1 225.1 97.73 189.8 123.5L189.8 123.5zM394.9 284.2C398.2 275.4 400 265.9 400 255.1C400 211.8 364.2 175.1 320 175.1C319.3 175.1 318.7 176 317.1 176C319.3 181.1 320 186.5 320 191.1C320 202.2 317.6 211.8 313.4 220.3L394.9 284.2zM404.3 414.5L446.2 447.5C409.9 467.1 367.8 480 320 480C239.2 480 174.5 443.2 127.4 399.4C80.62 355.1 49.34 304 34.46 268.3C31.18 260.4 31.18 251.6 34.46 243.7C44 220.8 60.29 191.2 83.09 161.5L120.8 191.2C102.1 214.5 89.76 237.6 81.45 255.1C95.02 286 121.6 328.5 160.1 364.3C201.2 402.4 254.8 432 320 432C350.7 432 378.8 425.4 404.3 414.5H404.3zM192 255.1C192 253.1 192.1 250.3 192.3 247.5L248.4 291.7C258.9 312.8 278.5 328.6 302 333.1L358.2 378.2C346.1 381.1 333.3 384 319.1 384C249.3 384 191.1 326.7 191.1 255.1H192z"
      />
    </svg>
  );
};
export const Google = ({ className, fill }: IconProps) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
      <path
        fill={fill}
        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
      />
    </svg>
  );
};
export const MenuNotification = ({ className, fill }: IconProps) => {
  return (
    <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.3333 16.0002C13.3333 14.5274 14.5272 13.3335 15.9999 13.3335C17.4727 13.3335 18.6666 14.5274 18.6666 16.0002C18.6666 17.4729 17.4727 18.6668 15.9999 18.6668C14.5272 18.6668 13.3333 17.4729 13.3333 16.0002Z"
        fill={fill}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.6667 16.0002C22.6667 14.5274 23.8607 13.3335 25.3334 13.3335C26.8062 13.3335 28.0001 14.5274 28.0001 16.0002C28.0001 17.4729 26.8062 18.6668 25.3334 18.6668C23.8607 18.6668 22.6667 17.4729 22.6667 16.0002Z"
        fill={fill}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 16.0002C4 14.5274 5.19391 13.3335 6.66667 13.3335C8.13943 13.3335 9.33333 14.5274 9.33333 16.0002C9.33333 17.4729 8.13943 18.6668 6.66667 18.6668C5.19391 18.6668 4 17.4729 4 16.0002Z"
        fill={fill}
      />
    </svg>
  );
};