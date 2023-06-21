import Books from "@/app/search/books";

const Page = () => {
  return (
    <div className="bg-gray-light w-screen rounded-l-[90px]">
      <div className="container mx-auto mt-48 max-w-3xl">
        <h1 className="text-5xl">Zaawansowane wyszukiwanie</h1>
        <Books />
      </div>
    </div>
  );
};

export default Page;
