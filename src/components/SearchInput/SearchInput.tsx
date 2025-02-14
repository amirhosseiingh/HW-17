import { useRef } from "react";

type Props = {
  dispatch: (action: { type: "SET_SEARCH_TERM"; payload: string }) => void;
};

export default function SearchInput({ dispatch }: Props) {
  const searchRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSearch = (value: string) => {
    if (searchRef.current) clearTimeout(searchRef.current);
    searchRef.current = setTimeout(() => {
      dispatch({ type: "SET_SEARCH_TERM", payload: value });
    }, 500);
  };

  return (
    <input
      type="text"
      placeholder="Search by name..."
      onChange={(e) => handleSearch(e.target.value)}
      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
    />
  );
}
