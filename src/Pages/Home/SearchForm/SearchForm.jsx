import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


const SearchForm = () => {
    const navigate = useNavigate();
    const [searchTerm, setSeachTerm] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsAnimating(false)
        }, 1000);
        // clear time out 
        return () => clearTimeout(timeout)
    }, [])
    const handleSeachInput = e => {
        setSeachTerm(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        // console.log(searchTerm)
        if (searchTerm.length > 0) {
            navigate(`/search?query=${searchTerm}`)
            document.querySelector('input').value = '';
            setSeachTerm('')
        } else {
            // if input is empty set animation to true
            setIsAnimating(true)

        }

    }
    return (
        <form
            onSubmit={handleSubmit}
            className={`${isAnimating ? 'animate-shake' : 'animate-none'} w-full relative`} >
            <input
                onChange={handleSeachInput}
                className="input" type="text" placeholder="Search for a product.." />
            <button className="btn bg-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none">
                <FiSearch className="text-xl"></FiSearch>
            </button>
        </form>
    );
};

export default SearchForm;