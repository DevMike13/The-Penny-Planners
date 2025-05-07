import React from 'react'
import Header from '../components/header/Header'

const page = () => {
  return (
    <div className='bg-white w-full h-auto flex justify-center items-center flex-col'>
      <div className='w-full h-[100px] bg-transparent flex flex-col md:flex-row items-center justify-between px-2 md:px-20 relative z-10 max-w-screen-xl mx-auto'>
        <div className="flex items-center">

        </div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-1 rounded-lg">
          {/* <a href="/"> */}
            <img 
              src="../images/logo.png" 
              alt="Logo" 
              width={220} 
              height={50} 
              className="hidden sm:block rounded-lg"
            />
            <img 
              src="../images/logo.png" 
              alt="Logo" 
              width={200} 
              height={50} 
              className="block sm:hidden rounded-lg"
            />
          {/* </a> */}
        </div>
        <div className='flex items-center justify-center md:gap-5 gap-2 mt-2 md:mt-0'>
          <ul className='flex gap-10'>
              {/* <li><a href="#" className='text-sm uppercase mb-2 text-center font-semibold text-gray-500'>Advertisement</a></li> */}
          </ul>
        </div>
      </div>
      <div className='p-6 w-full md:max-w-[780px] m-auto pt-10'>
          <h1 className="text-2xl md:text-4xl font-black text-center mb-10">Terms and Conditions for The Penny Planners</h1>

          <h6 className='font-bold text-lg'>Introduction</h6>
          <p>These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, The Penny Planners accessible at <a href="https://thepennyplanners.com/" className='text-blue-500 underline'>https://thepennyplanners.com/</a>.</p><br />
          <p>These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.</p><br />
          <p>Minors or people below 18 years old are not allowed to use this Website.</p><br />

          <h6 className='font-bold text-lg'>Introduction</h6>
          <p>Other than the content you own, under these Terms, The Penny Planners and/or its licensors own all the intellectual property rights and materials contained in this Website.</p><br />
          <p>You are granted limited license only for purposes of viewing the material contained on this Website.</p><br />

          <h6 className='font-bold text-lg'>Introduction</h6>
          <p>You are specifically restricted from all of the following:</p><br />
          <ul className='ml-10'>
              <li className='list-disc'>publishing any Website material in any other media;</li>
              <li className='list-disc'>selling, sublicensing and/or otherwise commercializing any Website material;</li>
              <li className='list-disc'>publicly performing and/or showing any Website material;</li>
              <li className='list-disc'>using this Website in any way that is or may be damaging to this Website;</li>
              <li className='list-disc'>using this Website in any way that impacts user access to this Website;</li>
              <li className='list-disc'>using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
              <li className='list-disc'>engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li>
              <li className='list-disc'>using this Website to engage in any advertising or marketing.</li>
          </ul><br />
          <p>Certain areas of this Website are restricted from being access by you and The Penny Planners may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.</p><br />

          <h6 className='font-bold text-lg'>Your Content</h6>
          <p>In these Website Standard Terms and Conditions, "Your Content" shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant The Penny Planners a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.</p><br />
          <p>Your Content must be your own and must not be invading any third-party’s rights. The Penny Planners reserves the right to remove any of Your Content from this Website at any time without notice.</p><br />

          <h6 className='font-bold text-lg'>No warranties</h6>
          <p>This Website is provided "as is," with all faults, and The Penny Planners express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.</p><br />
      
          <h6 className='font-bold text-lg'>Limitation of liability</h6>
          <p>In no event shall The Penny Planners, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.  The Penny Planners, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p><br />
      
          <h6 className='font-bold text-lg'>Indemnification</h6>
          <p>You hereby indemnify to the fullest extent The Penny Planners from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.</p><br />

          <h6 className='font-bold text-lg'>Severability</h6>
          <p>If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.</p><br />

          <h6 className='font-bold text-lg'>Variation of Terms</h6>
          <p>The Penny Planners is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.</p><br />

          <h6 className='font-bold text-lg'>Assignment</h6>
          <p>The The Penny Planners is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.</p><br />

          <h6 className='font-bold text-lg'>Entire Agreement</h6>
          <p>These Terms constitute the entire agreement between The Penny Planners and you in relation to your use of this Website, and supersede all prior agreements and understandings.</p><br />

          <h6 className='font-bold text-lg'>Governing Law & Jurisdiction</h6>
          <p>These Terms will be governed by and interpreted in accordance with the laws of the State of us, and you submit to the non-exclusive jurisdiction of the state and federal courts located in us for the resolution of any disputes.</p><br />
      </div>
    </div>
  )
}

export default page