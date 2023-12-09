import React, { ReactNode, useEffect, useState, createContext } from "react";

type Props = {
  children?: ReactNode;
  style?: string;
};

const Wrapper: React.FC<Props> = ({ children, style }: Props) => {
  return (
    <section className={`w-full ${style}`}>
      <div className="w-full h-full max-w-[1340px] m-auto md:px-8 px-2">
        {children}
      </div>
    </section>
  );
};

export default Wrapper;
