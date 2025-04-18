import React from 'react'

const Section = ({children}) => {
  return (
    <div className='w-full'>
      <section className='max-w-7xl mx-auto '>
        {children}
      </section>
    </div>
  )
}

export default Section