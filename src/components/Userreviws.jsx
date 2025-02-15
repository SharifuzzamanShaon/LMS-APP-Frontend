import React from 'react'

const Userreviws = () => {
  return (
    <div className="testimonials-section bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800">
          See what others are achieving through learning
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Join thousands of learners who have transformed their careers with SkillSage
        </p>
        
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory">
          {/* Testimonial Card 1 */}
          <div className="min-w-[300px] md:min-w-[380px] p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 snap-center">
            <div className="flex items-center gap-3 mb-6">
              <img src="/path-to-avatar1.jpg" alt="User" 
                className="w-14 h-14 rounded-full border-2 border-purple-200 object-cover" />
              <div>
                <h3 className="font-semibold text-gray-800">John Smith</h3>
                <p className="text-gray-600 text-sm">Software Engineer at TechCorp</p>
              </div>
            </div>
            <blockquote className="text-gray-700 leading-relaxed relative">
              <span className="text-5xl text-purple-200 absolute -top-4 -left-2">"</span>
              <p className="pl-6">SkillSage was rated the most popular online learning platform for aspiring developers in 2024.</p>
            </blockquote>
          </div>

          {/* Testimonial Card 2 */}
          <div className="min-w-[300px] md:min-w-[380px] p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 snap-center">
            <div className="flex items-center gap-3 mb-6">
              <img src="/path-to-avatar2.jpg" alt="User" 
                className="w-14 h-14 rounded-full border-2 border-purple-200 object-cover" />
              <div>
                <h3 className="font-semibold text-gray-800">Sarah Johnson</h3>
                <p className="text-gray-600 text-sm">Full Stack Developer</p>
              </div>
            </div>
            <blockquote className="text-gray-700 leading-relaxed relative">
              <span className="text-5xl text-purple-200 absolute -top-4 -left-2">"</span>
              <p className="pl-6">SkillSage was truly a game-changer for my career transition into tech. The structured learning path made all the difference.</p>
            </blockquote>
          </div>

          {/* Testimonial Card 3 */}
          <div className="min-w-[300px] md:min-w-[380px] p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 snap-center">
            <div className="flex items-center gap-3 mb-6">
              <img src="/path-to-avatar3.jpg" alt="User" 
                className="w-14 h-14 rounded-full border-2 border-purple-200 object-cover" />
              <div>
                <h3 className="font-semibold text-gray-800">Michael Chen</h3>
                <p className="text-gray-600 text-sm">Frontend Developer at StartupX</p>
              </div>
            </div>
            <blockquote className="text-gray-700 leading-relaxed relative">
              <span className="text-5xl text-purple-200 absolute -top-4 -left-2">"</span>
              <p className="pl-6">The practical projects and mentor support helped me land my dream job. SkillSage delivers real-world skills.</p>
            </blockquote>
          </div>
        </div>

        {/* Navigation Dots for Mobile */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          <button className="w-2 h-2 rounded-full bg-purple-600"></button>
          <button className="w-2 h-2 rounded-full bg-purple-200"></button>
          <button className="w-2 h-2 rounded-full bg-purple-200"></button>
        </div>
      </div>
    </div>
  )
}

export default Userreviws