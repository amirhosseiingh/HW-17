import { useEffect, useReducer } from "react";
import axios from "axios";
import SearchInput from "../SearchInput/SearchInput";
import UserList from "../UserList/UserList";

type User = {
  id: number;
  name: string;
  email: string;
  address: { city: string };
};

type State = {
  users: User[];
  loading: boolean;
  error: string;
  searchTerm: string;
};
type Action =
  | { type: "FETCH_SUCCESS" ; payload: User[] }
  | { type: "FETCH_ERROR"; payload: string }
  | { type: "SET_SEARCH_TERM";  payload: string };

const initialState: State = {
  users: [] ,
  loading: true,
  error: "",
  searchTerm: "",
};

const reducer = (state: State, action: Action): State => {
  switch ( action.type) {
    case "FETCH_SUCCESS":
      return { ...state, users: action.payload, loading: false };
    case "FETCH_ERROR":
      return { ...state, error: action.payload, loading: false };
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

export default function UserSearch() {
  const [state, dispatch] = useReducer( reducer  , initialState);

  useEffect(() => {
    axios.get( "https://jsonplaceholder.typicode.com/users")
      .then( (res) => dispatch ({  type: "FETCH_SUCCESS",  payload: res.data }))
      .catch( (err)=> dispatch({ type: "FETCH_ERROR",  payload: err.message }));
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">🔍 User Search</h2>
      <SearchInput dispatch={dispatch} />
      {state.loading && <p className="text-blue-500">Loading...</p>}
      {state.error && <p className="text-red-500">Error: {state.error}</p>}
      <UserList users={state.users} searchTerm={state.searchTerm} />
    </div>
  );
}
