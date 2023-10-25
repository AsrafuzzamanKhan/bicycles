import { useParams } from "react-router-dom";

import CategoryNav from "../CategoryNav/CategoryNav";
import useBicycle from "../../../hooks/useBicycle";
import Product from "../Product/Product";



const Products = () => {
    const { category } = useParams()
    console.log(category)
    const [bicycle] = useBicycle()

    // get products based on category 

    // Define the category you want to filter by
    const selectedCategory = category; // Replace with the category you want to filter

    // Use the filter method to get products of the selected category
    const filteredProducts = bicycle.filter(item => item.category === selectedCategory);

    // console.log("Products in the", selectedCategory, "category:", filteredProducts);

    return (
        <div className="pt-40 mb-16 lg:pt-0">

            <div className="container mx-auto">
                <div className="flex gap-x-[30px]">
                    {/* category nav  */}
                    <CategoryNav />
                    <main>
                        {/* title  */}
                        <div className="py-4 text-center uppercase text-xl lg:text-left">{category} Cycle</div>
                        {/* product grid   */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-[15px] md:gap-[30px]">
                            {filteredProducts.map((product, i) => {
                                return <Product key={i} product={product}></Product>
                            })}
                        </div>
                    </main>

                </div>
            </div>
        </div>
    );
};

export default Products;