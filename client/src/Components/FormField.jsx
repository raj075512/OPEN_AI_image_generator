import React from 'react'

const FormField = ({labelName,type,name,placeholder, value,
handleChange,isSurpriseMe ,handleSurpriseMe}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2' >
           <label htmlFor={name} className='block text-sm font-medium text-gray-900'>{labelName}
              {isSurpriseMe && (
                <button type='button'onClick={handleSurpriseMe}
                className=' text-[8px] text-[white] bg-[#09900b]  px-2 rounded-[3px] ' >
                  Surprise Me
                </button>
                
              )}
              <input type={type}
               value={value}
               placeholder={placeholder}
               name={name}
               id={name}
               onChange={handleChange}
              required
              className='bg-[#dbd8d8] mt-2 outline-none flex rounded-[5px] border border-gray-300 text-ellipsis text-[12px]  px-1 mt-1'

              />
        
            </label>
      </div>
    </div>
  )
}

export default FormField
