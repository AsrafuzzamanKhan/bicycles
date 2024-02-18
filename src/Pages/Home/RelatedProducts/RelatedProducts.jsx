import useBicycle from "../../../hooks/useBicycle";
import ProductSlider from "../ProductSlider/ProductSlider";

const RelatedProducts = ({ categoryTitle }) => {
    const [bicycle] = useBicycle()

    // get product by category title 
    // Use the filter method to get products of the selected category
    const filteredProducts = bicycle.filter(item => item.category === categoryTitle);

    // console.log("Products in the", categoryTitle, "category:", filteredProducts);
    return (
        <div className="my-8">
            <div className="container mx-auto w-full px-[2vw] lg:px-0">
                <h2 className="h2 mb-6 text-center lg:text-start">Relate Productd</h2>
                <ProductSlider data={filteredProducts}></ProductSlider>
            </div>
        </div>
    );
};

export default RelatedProducts;