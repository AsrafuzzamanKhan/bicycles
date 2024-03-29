import { Link } from "react-router-dom";
import useBicycle from "../../../hooks/useBicycle";


const CategoryNav = () => {
    const [bicycle] = useBicycle()

    // Extract unique category types
    const uniqueCategories = [...new Set(bicycle.map(item => item.category))];

    // console.log("Unique Category Types:", uniqueCategories);

    return (
        <aside className="hidden lg:block">
            <div className="flex flex-col lg:w-[200px] xl:w-[280px] h-[500px] rounded-[8px] overflow-hidden bg-zinc-900">
                <div className="bg-accent py-4 text-primary font-semibold flex items-center justify-center uppercase ">Browse Categories</div>
                <div className="flex flex-col gap-y-6 p-6 ">
                    {
                        uniqueCategories.map((category, index) => {
                            return <Link to={`/products/${category}`} key={index}>{category}</Link>
                        })
                    }
                </div>
            </div>
        </aside>
    );
};

export default CategoryNav;