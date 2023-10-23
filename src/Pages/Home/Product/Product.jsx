import { Link } from "react-router-dom";


const Product = ({ product }) => {
    const { id, name, price, image, description, isNew, category } = product
    return (
        <Link to={`/product/${id}`}>
            <div className="grad w-full h-[362px] rounded-[8px] overflow-hidden relative group">
                {/* badge  */}
                {isNew === true && <div className="absolute bg-accent text-primary text-[12px] font-extrabold uppercase top-4 right-4 rounded-full px-2 x-10">
                    new
                </div>}
                {/* image  */}
                <div className="w-full h-[200px] flex items-center justify-center relative">

                    <img
                        className="w-[180px] group-hover:scale-90 transition-all"
                        src={image} alt="Bicycle" />
                </div>
                {/* text  */}
                <div className="px-6 pb-8 flex flex-col">
                    {/* category  */}
                    <div className="text-sm text-accent">{category}</div>
                    {/* title  */}
                    <div className="text-[15px] mb-4 lg:mb-9 ">{name.substring(0, 35)}...</div>
                    <div className="text-lg text-accent">
                        $ {price}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Product;