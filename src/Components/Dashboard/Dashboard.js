import React from 'react';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div>
            <table class="mx-auto m-5 table-auto md:table-fixed">
                <thead>
                    <tr className='bg-secondary'>
                        <th><input type="text" placeholder="Search" class="input input-bordered input-success w-full max-w-xs" /></th>
                        <th>
                            <button className='btn btn-primary'>Add new bill</button>
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

                </tbody>
            </table>
            <div class="d-flex justify-center m-6 btn-group">
                <button class="btn">1</button>
                <button class="btn btn-active">2</button>
                <button class="btn">3</button>
                <button class="btn">4</button>
            </div>
        </div>
    );
};

export default Dashboard;