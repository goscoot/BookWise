"use client";

import Search from "@/components/search";
import ChevronDownIcon from "@/app/icons/ChevronDownIcon";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { supabase } from "@/app/lib/supabase";
import Image from "next/image";
import StarIcon from "@/app/icons/StarIcon";

interface Book {
  genre: string | null;
  id: number;
  image: string;
  name: string | null;
  opinions: number | null;
  rating: number | null;
}

const GENRES = [
  { name: "Poradnik", value: "poradnik" },
  { name: "Kryminal", value: "kryminal" },
  { name: "Fantasy", value: "fantasy" },
];

const Page = () => {
  const [books, setBooks] = useState<Book[] | null>();

  const [searchValue, setSearchValue] = useState<string>();

  const [genres, setGenres] = useState<string[]>([]);

  const [error, setError] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const query = supabase.from("books").select();

      if (genres.length > 0) {
        query.in("genre", genres);
      }

      if (searchValue) {
        query.textSearch("name", searchValue);
      }

      const { data, error } = await query;

      setBooks(data);

      if (error) {
        setError(true);
      }
    };
    fetch();
  }, [genres, searchValue]);

  const handleChange = (
    collection: string[],
    setter: Dispatch<SetStateAction<string[]>>,
    newValue: string
  ) => {
    if (!collection.includes(newValue)) {
      setter((prevState) => [...prevState, newValue]);
      return;
    }
    setter((prevState) => prevState.filter((value) => value !== newValue));
  };

  const handleChangeSearchValue = (event: FormEvent<HTMLInputElement>) => {
    let { value } = event.target as HTMLInputElement;
    setSearchValue(value);
  };

  return (
    <div className="bg-gray-light w-screen rounded-l-[90px]">
      <div className="container mx-auto mt-48 max-w-3xl">
        <h1 className="text-5xl">Zaawansowane wyszukiwanie</h1>
        <div className="flex gap-2 mt-5">
          {genres.map((genre) => (
            <div key={genre} className="p-1 bg-gray rounded">
              {genre}
            </div>
          ))}
        </div>
        <div className="flex gap-6 mt-4">
          <Search onChange={handleChangeSearchValue} />
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button
                className="IconButton flex items-center gap-1 p-4"
                aria-label="Customise options"
              >
                Gatunek
                <ChevronDownIcon />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="DropdownMenuContent"
                sideOffset={5}
              >
                {GENRES.map(({ name, value }) => (
                  <DropdownMenu.Item
                    key={value}
                    onClick={() => handleChange(genres, setGenres, value)}
                  >
                    {genres.includes(value) ? "+" : ""}
                    {name}
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>

        <div className="mt-8">
          {books?.map(({ id, name, image, opinions, rating }) => (
            <div key={id}>
              <Image src={image} alt="book cover" width={150} height={200} />

              <h3 className="font-semibold mt-4">{name}</h3>
              <div className="text-gray text-sm flex mt-2">
                <StarIcon />
                <span className="font-semibold text-gray-dark flex">
                  {rating}
                </span>{" "}
                ({opinions} opinii)
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
