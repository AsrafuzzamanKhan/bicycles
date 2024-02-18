import { useParams } from "react-router-dom";
import useBicycle from "../../../hooks/useBicycle";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import { useContext } from "react";
import { CartContext } from "../../../context/CartProvider/CartProvider";

const ProductDetails = () => {
    const { id } = useParams()
    const [bicycle] = useBicycle()
    const { addToCart } = useContext(CartContext)
    const productDetails = bicycle.find(pd => pd.id == id)
    if (!productDetails) {
        return <div className="container mx-auto">loading....</div>
    }
    // console.log(productDetails.category)
    return (
        <div className="pt-32 lg:pt-24 xl:pt-24">
            <div className="container mx-auto">
                {/* text  */}
                <div className="flex flex-col lg:flex-row gap-4 px-[2vw] lg:px-0">
                    <div className="flex-1 lg:max-w-[40%] lg:h-[550px] grad rounded-lg flex justify-center items-center p-4 lg:p-0">
                        <img src={productDetails.image}
                            className="w-full max-w-[75%]"
                            alt="" />
                    </div>
                    <div className="flex-1 bg-primary p-12 xl:p-20 flex flex-col justify-center">
                        {/* category  */}
                        <div className="uppercase text-accent text-lg font-medium mb-2"> {productDetails.category}  </div>
                        {/* title  */}
                        <h2 className="h2 mb-4"> {productDetails.name} Bicycle </h2>
                        {/* description  */}
                        <p className="mb-12">{productDetails.description}</p>
                        {/* price and btn   */}
                        <div className="flex items-center gap-x-8">
                            {/* price  */}
                            <div className="text-3xl font-semibold text-accent">$ {productDetails.price}</div>
                            <button
                                onClick={() => addToCart(productDetails, productDetails.id)}
                                className="btn btn-accent">Add to cart</button>
                        </div>

                    </div>
                </div>
                {/* relatged  product  */}
                <RelatedProducts
                    categoryTitle={productDetails.category}
                ></RelatedProducts>
            </div>
        </div>
    );
};

export default ProductDetails;