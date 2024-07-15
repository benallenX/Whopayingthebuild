import React from 'react'
import { useBill } from '../context/BillContext'


const TipInput = () => {
    const { tip, setTip } = useBill()
    
    const handleChangeTip = e => {
        setTip(e.target.value)
    }

  return (
      <div className='p-4 mb-4'>
          <label className='block text-gray-700'>Enter Tip Percentage:</label>
          <input 
              type='number'
              value={tip}
              onChange={handleChangeTip}
              className='mt-2 p-2 w-full border rounded'
          />
    </div>
  )
}

export default TipInput