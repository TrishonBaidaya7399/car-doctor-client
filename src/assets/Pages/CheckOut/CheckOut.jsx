// Import PropTypes and other dependencies as needed

import { useLoaderData } from "react-router-dom";
import Banner from "../../Shared/Banner/Banner";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'

const CheckOut = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    console.log(user);

    // Filter the first word from displayName
    const displayNameWords = user?.displayName ? user?.displayName.split(' ') : [];
    const defaultFirstName = displayNameWords.length > 0 ? displayNameWords[0] : 'First Name';
    const defaultLastName = displayNameWords.length > 1 ? displayNameWords.slice(1).join(' ') : 'Last Name';

    const handleCheckOut = (e) => {
        e.preventDefault();
        setLoading(true)
        const form = e.target;
        const firstname = form.firstname.value;
        const lastname = form.lastname.value;
        const name =firstname+" "+lastname
        const phone = form.phone.value;
        const price = form.price.value;
        const date = form.date.value;
        const email = user?.email;
        const message = form.message.value;

        const booking ={
            customer_Id: user.uid,
            customerName: name,
            customerPhone: phone,
            email: email,
            price: price,
            date: date,
            service: service?.title,
            service_Id: service?._id,
            service_Img: service?.img,
            customerMessage: message
        }
        console.log(booking);
        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers:{
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(booking) 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setLoading(false)
            Swal.fire({
                title: 'Success!',
                text: 'Successfully checked out',
                icon: 'success',
                confirmButtonText: 'Exit'
              })
            form.reset();
        })

    }

    return (
        <div className="">
            <Banner address={"Check Out"} />
            <div className="bg-gray-200 rounded-lg p-12 mx-[20px] md:mx-[50px] lg:mx-[100px] my-[20px] md:my-[50px] lg:my-[100px]">
                <form onSubmit={handleCheckOut}>
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                       <input required type="text" name="firstname" defaultValue={defaultFirstName} placeholder="First Name" className="bg-white rounded-lg p-4 w-full" />
                       <input required type="text" name="lastname" defaultValue={defaultLastName} placeholder="Last Name" className="bg-white rounded-lg p-4 w-full" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                       <input required type="text" maxLength="11" name="phone" placeholder="Your Phone" className="bg-white rounded-lg p-4 w-full" />
                       <input required type="email" name="email" placeholder="Your Email" defaultValue={user?.email} className="bg-white rounded-lg p-4 w-full" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                       <input required type="number" name="price" placeholder="Service Price" defaultValue={service.price} className="bg-white rounded-lg p-4 w-full" />
                       <input required type="date" name="date" placeholder="Service Date" defaultValue={user?.email} className="bg-white rounded-lg p-4 w-full" />
                    </div>
                    <div className=" gap-6 mb-6">
                       <textarea required type="text" name="message" placeholder="Your Message" className="bg-white rounded-lg p-4 w-full h-40" />
                    </div>
                    <div className=" gap-6">
                       <input type="submit" value={loading ? 'Confirming...' : 'Order Confirm'} className="btn hover:bg-orange-600 text-md text-white font-semibold bg-orange-500 rounded-lg p-4 w-full" />
                    </div>
                </form>
            </div>
        </div>
    );
};

CheckOut.propTypes = {
    // Define your PropTypes as needed
};

export default CheckOut;
