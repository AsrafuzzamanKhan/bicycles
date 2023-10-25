import { FiX } from "react-icons/fi";
import useBicycle from "../../../hooks/useBicycle";
import { Link } from "react-router-dom";

const CategoryNavMobile = ({ setCatNavMobile }) => {
    const [bicycle] = useBicycle();
    // Extract unique category types
    const uniqueCategories = [...new Set(bicycle.map(item => item.category))];

    // console.log("Unique Category Types:", uniqueCategories);
    return (
        <div className="w-full h-full bg-primary p-8" >
            {/* close icon  */}
            <div onClick={() => setCatNavMobile(false)}
                className=" flex justify-end mb-8 cursor-pointer">
                <FiX className="text-3xl" />
            </div>
            <div className="flex flex-col gap-y-8" >
                {
                    uniqueCategories?.map((category, i) => {
                        return <Link key={i} to={`/products/${category}`} className="uppercase font-medium">  {category} Bicycle

                        </Link>

                    })
                }
            </div>

        </div>
    );
};

export default CategoryNavMobile;