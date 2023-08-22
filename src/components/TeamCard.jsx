import React from 'react'

const TeamCard = ({photo}) => {

  return (
    <div className='m-2 relative overflow-hidden border-none w-[220px] h-[220px] bg-[#00000000] rounded-3xl shadow-2xl'>
      <img src={photo} alt="team_member_photo" className='w-[220px] h-[220px]'/>
    </div>
  )
}

export default TeamCard