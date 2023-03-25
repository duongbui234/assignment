import { SizeType } from "antd/lib/config-provider/SizeContext";
import clsx from "clsx";
type DividerProps = {
  type?: "dotted" | "dashed" | "solid";
  size?: SizeType;
  color?: string;
  className?: string;
};

const DividerComponent = ({
  type = "solid",
  size = "small",
  color = "#eee",
  className,
}: DividerProps) => {
  return (
    <>
      <div className={clsx(type, size, className)}></div>
      <style jsx>{`
        .small {
          border-top: 1px ${color};
        }
        .middle {
          border-top: 2px ${color};
        }
        .large {
          border-top: 4px ${color};
        }
        .dashed {
          border-style: dashed;
        }
        .dotted {
          border-style: dotted;
        }
        .solid {
          border-style: solid;
        }
      `}</style>
    </>
  );
};

export default DividerComponent;
