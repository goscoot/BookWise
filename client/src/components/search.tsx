import { HTMLAttributes } from "react";

const Search = ({ ...props }: HTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="rounded border-2 border-gray border-solid">
      <input {...props} className="p-4" type="search" placeholder="Szukaj..." />
    </div>
  );
};

export default Search;
