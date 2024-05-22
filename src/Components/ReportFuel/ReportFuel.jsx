import React from 'react'

export const ReportFuel = ({titre, quantite, date}) => {
  return (
    <div className='flex flex-col mt-9'>
        <div className='shadow border-t-4 border-orange-400 rounded-2xl w-96 m-8 px-6'>
        <h3 className='text-center border-b-2 border-[#6D3100] text-[#6D3100] py-2'>{titre}</h3>
        <div className='flex  justify-center text-5xl'>
        <div className ='flex flex-col items-center py-4 mx-6'>
          <h1 className='flex px-6 font-medium text-[#ED8B3B]'>{quantite}</h1>
          <p className='text-xs' >{date}</p>
        </div>
        </div>
        </div>
    </div>
  )
}; export default ReportFuel
