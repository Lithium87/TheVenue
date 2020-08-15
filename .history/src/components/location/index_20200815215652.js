import React from 'react'

const Location = () => {
  return (
    <div location_wrapper>
      <iframe
        title='frame'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.7222556080474!2d24.872563414819304!3d42.006235965365725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd8c1546ab2b5%3A0xe5e637643cca4b62!2z0JrQvtCo0LjQn9GA0LDQudC8!5e0!3m2!1sen!2sbg!4v1597517377560!5m2!1sen!2sbg'
        width='100%'
        height='500px'
        frameBorder='0'
        allowFullScreen
      ></iframe>

      <div className='location_tag'>
        <div>Location</div>
      </div>
    </div>
  )
}

export default Location
