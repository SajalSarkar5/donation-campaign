

import React from 'react';

const Course = (props) => {
    const data = props.calculate;
    console.log(data)
    const creditHour = data.map(credit => credit.Credit)
    console.log(creditHour)
    const totalCredit = creditHour.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const hourRemaining = 20 - totalCredit
    const price = data.map(credit => credit.price)
    const totalPrice = price.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return (
        <div className='p-6 rounded-xl bg-base-100 shadow-xl'>
            <div className='pb-4 border-b'><h1 className='text-[#2F80ED] font-bold text-lg'>Credit Hour Remaining {hourRemaining} hr</h1></div>
            <div className='pt-4 pb-[21px]'><h1 className='text-[#1C1B1B] text-xl font-bold'>Course Name</h1></div>
            <div className='border-b'>
                <ol className='text-[#1C1B1B99] pl-5 pb-6'>
                    {
                        data.map((item, i) => {
                            return <li key={i} className='text-base font-normal leading-7 list-decimal'>{item.title}</li>
                        })
                    }
                </ol>
            </div>
            <div className='py-4 border-b'>
                <h2 className='text-[#1C1B1BCC] font-medium text-base'>Total Credit Hour : {totalCredit}</h2>
            </div>
            <div className='pt-4'>
                <h3 className='text-[#1C1B1BCC] font-semibold text-base'>Total Price : {totalPrice} USD</h3>
            </div>
        </div>
    );
};

export default Course;