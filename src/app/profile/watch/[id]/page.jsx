import WatchSection from '@/components/Profile/Watch/WatchSection'
import React from 'react'

const page = ({params}) => {
  const { id } = params;
  return (
    <div className="p-5 h-full text-gray-700 dark:text-gray-400">
      <WatchSection courseId={id}/>
    </div>
  )
}

export default page