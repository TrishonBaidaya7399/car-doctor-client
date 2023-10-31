// import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FiCornerUpLeft } from 'react-icons/fi';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Banner from "../../Shared/Banner/Banner";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { RotatingLines } from  'react-loader-spinner'

const CartDetails = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    console.log(user);
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    const [bookings, setBookings] = useState([])
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setBookings(data);
            setLoading(false)
        })
        .catch(error=>{
            console.error(error.message)
        })
    },[url])
    console.log(bookings);

    const handleDeleteAll = () =>{
      setLoading(true);
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch((url), {
                method: "DELETE", 
            })
            .then(res => res.json())
            .then(data => {
              setLoading(false);
                console.log(data);
                if(data.deletedCount>0){
                    Swal.fire(
                        'Deleted!',
                        'Your all services has been deleted.',
                        'success'
                      )
                }
                  fetch(url)
                  .then(res => res.json())
                  .then(data =>{
                      const remaining = (data);
                      setBookings(remaining);
                  })
                  .catch(error=>{
                      console.error(error.message)
                  })
              
            })
          
        }
      })
    }
    const handleRemove = id =>{
      setLoading(true);
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: "DELETE", 
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setLoading(false);
                    if(data.deletedCount>0){
                        Swal.fire(
                            'Deleted!',
                            'Your service has been deleted.',
                            'success'
                          )
                    }
                    const remaining = bookings.filter(booking => booking._id !== id)
                    setBookings(remaining);
                })
              
            }
          })
    }

    const handleConfirm = id =>{
      setLoading(true);
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "PATCH",
        headers: {
          "content-type" : "application/json"
        },
        body: JSON.stringify({status:"confirm"})
      })
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        console.log(data);
        if(data.modifiedCount > 0)
        {
          const remaining = bookings.filter(booking =>booking._id !== id);
          const updated = bookings.find(booking => booking._id === id);
          updated.status = "confirm"
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
          Swal.fire({
            title: 'Successful!',
            text: 'Your service order is confirmed!',
            icon: 'success',
            confirmButtonText: 'OK!'
          })
        }
      })
    }

    return (
<div className="mx-[20px] md:mx-[50px] lg:mx-[100px] ">
    <Banner address={"Cart Details"}/>
<div className="overflow-x-auto my-[20px] md:my-[50px] lg:my-[80px]">
{
  loading 
  ? <div className='flex items-center justify-center'>
    <RotatingLines
    strokeColor="orange"
    strokeWidth="5"
    animationDuration="0.75"
    width="120"
    visible={true}
    />
    </div>
  : 
  <>
   {
    bookings.length>0 
    ?
    <table className="table">
    <thead className='bg-gray-500 text-[20px] py-1 text-white border-[5px] border-gray-500'>
        <tr>
          <th>Remove</th>
          <th>Service</th>
          <th>Price</th>
          <th>Service Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
       {
          bookings.map(booking => 
              <tr key={booking._id} className='bg-gray-200 border-[5px] border-b-white'>
              <th>
              <label>
                  <button onClick={()=> handleRemove(booking._id)} className="text-red-600 text-[40px]"><MdDelete/></button>
                </label>
              </th>
              <td className="flex items-center gap-12">
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask rounded-lg w-[100px] h-[100px]">
                      <img src={booking?.service_Img} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-2xl">{booking?.service}</div>
                    <div className="text-sm font-semibold opacity-80">ID: {booking?.service_Id}</div>
                  </div>
                </div>
              </td>
              <td className="text-xl font-bold text-gray-600">
                ${booking.price}
              </td>
              <td className="text-xl font-semibold text-gray-600">{booking?.date}</td>
              <th>
               {
                booking.status === "confirm"
                ?  <span className="text-green-500 font-bold">Confirmed</span>
                :  <button onClick={()=>handleConfirm(booking._id)} className="btn bg-orange-500 px-5 py-2 rounded-lg text-white font-bold">Pending</button>
               }
              </th>
            </tr>     
      )
       } 
      </tbody>
    </table>
    :
    <div className='flex flex-col items-center justify-center'>
        <img className='w-[50%]' src="https://i.ibb.co/p2HLCJt/empty-cart.png" alt="" />
        <h1 className="text-4xl text-orange-500 font-bold mt-4">Your cart is Empty!</h1>
    </div> 
 }
  </>
}
     <div className='flex justify-between mt-8 md:mx-[100px]'>
        <Link to="/services" className='flex gap-2 text-xl text-gray-500 font-semibold items-center'><FiCornerUpLeft/>Continue Shopping</Link>
        {
            bookings.length >0 
            ?
            //onClick={handleDeleteAll}
            <button onClick={handleDeleteAll} className='flex gap-2 text-xl text-gray-500 font-semibold items-center'><RiDeleteBin5Line/>Clear Shopping Cart</button>
            : ''
        }
     </div>
</div>
    </div>
    );
};

CartDetails.propTypes = {
    
};

export default CartDetails;