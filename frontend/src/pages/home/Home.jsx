import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import MessageContainer from '../../components/messages/MessageContainer.jsx'
import Userinfo from '../../components/sidebar/Userinfo.jsx'

const Home = () => {
  return (
  <>
    <div>
      <Userinfo/>
    </div>
    <div className='flex sm:h-[600px] md:h-[900px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
    
			<Sidebar />
			<MessageContainer />
		</div>
    </>
  )
}

export default Home