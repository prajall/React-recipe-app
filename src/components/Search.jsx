import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [input, setInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <div className="flex flex-col mx-auto">
      <form className="mx-auto flex flex-row gap-2  rounded-2xl">
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          value={input}
          className="lg:w-[500px] md:w-[300px] w-[200px]  md:h-10 h-9 px-5 border border-black focus:outline-none focus:border-3 rounded-2xl"
          placeholder="Search recipes..."
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="text-white text-lg  "
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
