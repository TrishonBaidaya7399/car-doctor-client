// import PropTypes from 'prop-types';
import Banner from "../../Shared/Banner/Banner";

const AddService = () => {
    return (
        <div className="">
        <Banner address={"Service"}/>
        <div className="bg-gray-200 rounded-lg p-12 mx-[20px] md:mx-[50px] lg:mx-[100px] my-[20px] md:my-[50px] lg:my-[100px]">
            <form>
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                   <input required type="text" name="name" placeholder="Service Name" className="bg-white rounded-lg p-4 w-full" />
                   <input required type="number" name="price" placeholder="Service Price" className="bg-white rounded-lg p-4 w-full" />
                </div>
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                   <input required type="text" name="text" placeholder="Text here" className="bg-white rounded-lg p-4 w-full" />
                   <input required type="text" name="type" placeholder="Service Type" className="bg-white rounded-lg p-4 w-full" />
                </div>
                <div className=" gap-6 mb-6">
                   <textarea required type="text" name="description" placeholder="Product Description" className="bg-white rounded-lg p-4 w-full h-40" />
                </div>
                <div className=" gap-6">
                   <input type="submit" value="Submit" className="btn hover:bg-orange-600 text-md text-white font-semibold bg-orange-500 rounded-lg p-4 w-full" />
                </div>
            </form>
        </div>
    </div>
    );
};

AddService.propTypes = {
    
};

export default AddService;