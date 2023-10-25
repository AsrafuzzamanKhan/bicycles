import { useParams } from "react-router-dom";
import useBicycle from "../../../hooks/useBicycle";
import RelatedProducts from "../RelatedProducts/RelatedProducts";

const ProductDetails = () => {
    const { id } = useParams()
    const [bicycle] = useBicycle()
    const productDetails = bicycle.find(pd => pd.id == id)
    if (!productDetails) {
        return <div className="container mx-auto">loading....</div>
    }
    console.log(productDetails.category)
    return (
        <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0">
            <div className="container mx-auto">
                {/* text  */}
                <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
                    <div className="flex-1 lg:max-w-[40%] lg:h-[550px] grad rounded-lg flex justify-center items-center">
                        <img src={productDetails.image}
                            className="w-full max-w-[65%]"
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
                            <button className="btn btn-accent">Add to cart</button>
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