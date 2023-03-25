import React from "react";
import styles from "./index.module.scss";

const FormFloating = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={styles.formInputWrapper}>
      {children}
      <style jsx global>{``}</style>
    </div>
  );
};

export default FormFloating;
