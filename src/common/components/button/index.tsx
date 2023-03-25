import React from "react";
import clsx from "clsx";
import { Button, ButtonProps } from "antd";

type Props = ButtonProps & {
  className?: string;
};

const ButtonComponent = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<Props>) => {
  return (
    <Button
      {...props}
      className={clsx(
        className,
        'relative px-[32px] bg-transparent border border-solid border-primary h-12 rounded text-white  transition-colors duration-primary hover:text-[#333] before:content-[""] before:absolute before:bg-primary before:w-full before:h-full before:top-0 before:left-0 before:scale-100 before:z-[-1] before:transition-transform before:duration-primary before:ease-primary before:origin-left hover:before:scale-x-0 hover:before:scale-y-100 hover:before:origin-right'
      )}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
