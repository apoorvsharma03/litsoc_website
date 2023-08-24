import React from 'react'
import TeamCard from '../components/TeamCard'
import Fac_ed_pic from '../assets/team/fac_ed.jpg'
import Preisdent_pic from '../assets/team/president.jpg'
import Joint_president_1_pic from '../assets/team/joint_president_1.jpeg'
import Joint_president_2_pic from '../assets/team/joint_president_2.jpeg'
import sampleimg from '../assets/logo_black.png'

const Team = () => {
  return (
    <div className='max-w-[80vw] m-auto mt-10 lg:mt-20'>
      <h1 className='text-2xl text-center md:text-left md:text-3xl text-[#222222d4]'>Meet The Team</h1>
      <hr className='border-[#222222d4] mt-2 mb-5 lg:mb-10'/>
      <div className='flex flex-wrap justify-center lg:justify-between gap-y-10'>
        <div className='flex justify-center items-center flex-col'>
          <TeamCard photo = {Fac_ed_pic}/>
          <h2 className='mt-5'>Dr. Niraj Kumar Singh</h2>
          <h2 className='mt-1'>(Faculty Advisor)</h2>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <TeamCard photo = {Preisdent_pic}/>
          <h2 className='mt-5'>Sparsh Anand</h2>
          <h2 className='mt-1'>(President)</h2>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <TeamCard photo = {Joint_president_1_pic}/>
          <h2 className='mt-5'>Mohit Raj</h2>
          <h2 className='mt-1'>(Joint President)</h2>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <TeamCard photo = {Joint_president_2_pic}/>
          <h2 className='mt-5'>Ayush</h2>
          <h2 className='mt-1'>(Joint President)</h2>
        </div>
      </div>
      <br />
      <br />
      <div>
        <h2 className='text-xl lg:text-2xl'>K20s:</h2>
        <hr className='border-[#222222d4] mt-2 mb-5 '/>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          <h3>Utkarsh Anand</h3>
          <h3>Piyush Kumar</h3> 
          <h3>Saurya Raj</h3> 
          <h3>Ayushree Raj</h3> 
          <h3>Siddhant Abhinav Dungdung</h3>
          <h3>Harsh Raj</h3>
          <h3>Aviral Chaurasiya</h3> 
          <h3>Hemant Kumar</h3> 
          <h3>Aryan</h3>
          <h3>Neetu</h3>
          <h3>Varun Sha</h3>
          <h3>Rahul Dutta</h3>
        </div>
        <br />
        <br />
        <h2 className='text-xl lg:text-2xl'>K21s:</h2>
        <hr className='border-[#222222d4] mt-2 mb-5 '/>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          <h3>Srishti Choudhary</h3>
          <h3>Lily</h3>
          <h3>Aayush Dutt Mehta</h3>
          <h3>Praharsh Priyam</h3>
          <h3>Mridul Srivastava</h3>
          <h3>Jainam</h3> 
          <h3>Manindra</h3>
          <h3>Priyanka</h3>
          <h3>Sumeet</h3>
          <h3>Shreyas</h3>
          <h3>Simran</h3>
          <h3>Ayush Ranjan</h3>
          <h3>Manish khirwal</h3>
          <h3>Sudhanshu</h3>
          <h3>Pragyan Sharma</h3>
          <h3>Apoorv Sharma</h3>
          <h3>Swapna Neel</h3>
          <h3>Priyanka Sinha</h3>
          <h3>Shreyash Zade</h3> 
          <h3>Shailesh Agiwal</h3>
          <h3>Abantika</h3>
          <h3>Chetana jain</h3>
          <h3>Apoorv Tiwari</h3>
          <h3>Pranjal</h3>
          <h3>Hriddhi</h3>
          <h3>Sukriti</h3>
          <h3>Akshat</h3> 
          <h3>Shashank</h3>
        </div>
        <br />
        <br />
        <h2 className='text-xl lg:text-2xl'>K22s:</h2>
        <hr className='border-[#222222d4] mt-2 mb-5 '/>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          <h3>Shail Kumar Pandey</h3>
          <h3>Soamya Parashar</h3>
          <h3>Amandeep Singh Batra</h3>
          <h3>Himanshu Kumar Jha</h3>
          <h3>Abhiraj Sinha</h3>
          <h3>Priyanshu Kumar</h3>
          <h3>Mouli Banerjee</h3>
          <h3>Ugantar Raj Manu</h3>
          <h3>Rachit Bansal</h3>
          <h3>Pranjal Agrawal</h3>
          <h3>Ayush Raj</h3>
          <h3>Abhiraj Mitra</h3>
          <h3>Mayank Millind</h3>
          <h3>Aastha Chhabra</h3>
          <h3>Abhirup Chakrabarti</h3>
          <h3>Harshvardhan</h3>
          <h3>Tanisha S byamal</h3>
          <h3>Ritesh Kumar Pandey</h3>
          <h3>Anshita Mehra</h3>
          <h3>Shreyaa</h3>
          <h3>Aditya Maharana</h3>
          <h3>Ayush</h3>
          <h3>Soumi Pal</h3>
          <h3>Akanksha Chouhan</h3>
          <h3>Sameer Suman</h3>
        </div>
      </div>
    </div>
  )
}

export default Team