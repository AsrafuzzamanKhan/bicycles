import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


const SearchForm = () => {
    const navigate = useNavigate();
    const [searchTerm, setSeachTerm] = useState('')
    const handleSeachInput = e => {
        setSeachTerm(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()

    }
    return (
        <form
            onSubmit={handleSubmit}
            className="w-full relative" >
            <input
                onChange={handleSeachInput}
                className="input" type="text" placeholder="Search for a product.." />
            <button className="btn btn-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none">
                <FiSearch className="text-xl"></FiSearch>
            </button>
        </form>
    );
};

export default SearchForm;