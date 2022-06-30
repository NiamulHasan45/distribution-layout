import { success } from 'daisyui/src/colors';
import React, { useEffect, useState } from 'react';
import BillModal from './BillModal';
import './Dashboard.css'

const Dashboard = () => {
    const [bills, setBills] = useState([]);
    const [info, setInfo] = useState({});




    useEffect(() => {
        fetch('http://localhost:5000/billing-list')
            .then(res => res.json())
            .then(data => setBills(data))
    }, [])


    const inputData = () => {

        // fetch('http://localhost:5000/add-billing', {
        //     method: 'POST',
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


    const deleteData = () => {

        // fetch('http://localhost:5000/delete-billing', {
        //     method: 'DELETE',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(review)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     if(data.success){
        //         console.log("sucess");
        //     }
        // })
    }
    return (
        <div>
            <table class="mx-auto m-5 table-auto md:table-fixed">
                <thead>
                    <tr className='bg-secondary'>
                        <th><input type="text" placeholder="Search" class="input input-bordered input-success w-full max-w-xs" /></th>
                        <th>
                            <button onClick={() => { inputData() }} className='btn btn-primary'>Add new bill</button>
                        </th>
                    </tr>
                </thead>
            </table>
            <table class="mx-auto table-auto md:table-fixed">
                <thead >
                    <tr className='bg-secondary'>
                        <th>Billing Id</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Paid Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>123234532465</td>
                        <td>Malcolm Lockyer</td>
                        <td>asfdasd@gmail.com</td>
                        <td>01763455343 </td>
                        <td>3444</td>
                        <td>
                            <button className='font-bold'>Edit</button>
                            <span>/</span>
                            <button className='font-bold'>delete</button>
                        </td>
                    </tr>

                    {
                        bills.map((a, index) => <tr key={a._id}>
                            <td>{a._id}</td>
                            <td>{a.name}</td>
                            <td>{a.email}</td>
                            <td>{a.phone}</td>
                            <td>{a.amount}</td>
                            <td>
                                <label
                                    htmlFor="booking-modal"
                                    onClick={() => { setInfo(a) }}
                                    className="font-bold"
                                >Edit</label>
                                <span>/</span>

                                <button onClick={() => { deleteData(a._id) }} className='font-bold'>delete</button>
                            </td>
                        </tr>)}

                </tbody>
            </table>
            <div class="d-flex justify-center m-6 btn-group">
                <button class="btn">1</button>
                <button class="btn btn-active">2</button>
                <button class="btn">3</button>
                <button class="btn">4</button>
            </div>
            {
                info && <BillModal info={info}></BillModal>
            }
        </div>
    );
};

export default Dashboard;