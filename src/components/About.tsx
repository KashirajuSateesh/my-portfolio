import React from 'react'

function About() {
  return (
    <div className="bg-white/30 backdrop-blur-md p-4 rounded-2xl">
      <h2 className='text-4xl font-bold p-4'>About Me</h2>
      <p className='text-lg text-gray-800 px-4'>
        I am a passionate Software Engineer with over 2 years of experience in full-stack development, microservices architecture, and data processing at Virtusa. I specialize in building scalable, high-performance applications and optimizing data workflows.
      </p>
      <div>
        <h3 className='text-2xl font-bold p-4'>Experience</h3>
        <h4 className='text-xl font-bold px-4'>Virtusa Consultancy and Services | Software Engineer </h4>
        <h4 className='text-xl font-light px-4'>Hyderabad, India | September 2022 – July 2023 </h4>
        <p className='text-lg text-gray-800 p-4'>
          <li>Spearheaded the design and implementation of 10+ microservices, enhancing system modularity and achieving a 40% reduction in deployment times across multiple functionalities.</li>
          <li>Developed and optimized over 10+ UI components using Angular, resulting in improved user engagement through enhanced data grid visualization and dashboard interactivity.</li>
          <li>Executed comprehensive monitoring of production data logs leading to the identification and resolution of performance bottlenecks, improving system reliability by 25% while reducing bug incidence.</li>
          <li>Developed and implemented data extraction, transformation and load process using Pentaho data integration tool to streamline the data across multiple sources.</li>
          <li>Analyzed, designed and developed complex database components for optimizing the data processing in the financial reporting project.</li>
          <li>Received appreciation from the clients and the onsite leads for analyzing, fixing critical issues, and giving demos in an efficient way.</li>
        </p>
        <h4 className='text-xl font-bold px-4'>Virtusa Consultancy and Services | Associate Engineer </h4>
        <h4 className='text-xl font-light px-4'>Hyderabad, India | September 2021 – August 2022</h4>
        <p className='text-lg text-gray-800 p-4'>
          <li>Developed API’s using Postman to test the collected data from various sources into the database using Kafka.</li>
          <li>Helped to develop responsive web applications using Angular to display financial reports and charts, which helps the client to make data-driven decisions.</li>
          <li>Provided bug fixes and enhancements requested by clients during my initial period.</li>
          <li>Supported releases and provided clarifications on functionalities.</li>
        </p>
      </div>
      <div className='flex flex-row justify-between'>
        <div className="backdrop-blur-md p-4 rounded-2xl w-full max-w-4xl">
          <h3 className='text-2xl font-bold p-4'>Education</h3>
          <p className='mb-2'>
            <h4 className='text-xl font-semibold px-4'>University of Alabama at Birmingham</h4>
            <h4 className='text-xl font-light px-4'>Degree: Master of Science</h4>
            <h4 className='text-xl font-light px-4'>Program: Data Science</h4>
          </p>
        </div >
        <div className="backdrop-blur-md p-4 rounded-2xl w-full max-w-4xl">
          <h3 className='text-2xl font-bold p-4'>Achievements</h3>
          <p className='mb-2'>
            <h4 className='text-xl font-light px-4'>Oracle Certified Associate, Java SE 8 Programmer </h4>
            <h4 className='text-xl font-light px-4'>National level winner of Virtusa Neural Hack - 2020 competition</h4>
            <h4 className='text-xl font-light px-4'>Certificate of Completion in AWS Could Practitioner Essentials</h4>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About