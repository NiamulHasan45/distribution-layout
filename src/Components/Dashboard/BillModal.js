import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const BillModal = (props) => {
    console.log(props.info)
    // 

        // const booking = {
        //     id: _id,
        //     name: name,
        //     email: formattedDate,
        //     phone: number,
        //     amount: money
        // }

        const handleBooking =()=>{

            // fetch('http://localhost:5000/add-billing', {
            //     method: 'PATCH',
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(review)
            // })
            // .then(res => res.json())
            // .then(data => {
            //     if(data.success){
            //         toast('Successfully reviewed');
            //     }
            // })
        }

     
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Please enter correct information</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" name="name" value="" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" placeholder="{email}" className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="amount" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BillModal;