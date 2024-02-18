import { useLocation } from "react-router-dom";
import useBicycle from "../../../hooks/useBicycle";

import Product from "../Product/Product";
import CategoryNav from "../CategoryNav/CategoryNav";

const Search = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('query')
    const [bicycle] = useBicycle()
    // console.log(searchTerm)
    // get product based on search term
    // const [bicycle] = useBicycle(`/products?populate=*&filters[name][$contains]=${searchTerm}`)


    // Filter the data array based on the search term
    const filteredResults = bicycle.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // console.log(filteredResults)
    return (
        <div className="pt-28 lg:pt-24 xl:pt-28">
            <div className="container mx-auto min-h-screen px-[2vw] lg:px-0 w-full ">
                <div className="flex gap-4 w-full ">
                    {/* category nav  */}
                    <CategoryNav></CategoryNav>
                    <div className="w-full">
                        {/* title  */}
                        <div className="pb-3 uppercase text-center lg:text-left text-xl ">
                            {filteredResults?.length > 0 ? `${filteredResults.length} results for ${searchTerm}` : `no result found for ${searchTerm} `}
                        </div>
                        {/* products grid */}
                        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full mx-auto">
                            {
                                filteredResults.map((product, i) => {
                                    return <Product key={i}
                                        product={product}
                                    ></Product>
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Search;