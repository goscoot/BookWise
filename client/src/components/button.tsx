import { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className="px-10 py-6 bg-gray-light text-2xl rounded-2xl">
      {children}
    </button>
  );
};

export default Button;
