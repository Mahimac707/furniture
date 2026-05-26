import React from 'react'
import { useNavigate } from 'react-router-dom'

function Info() {
  const navigate = useNavigate();

  return (
    <div className="bg-amber-800 text-amber-50 px-10 py-12 ">
      
      <div className="flex flex-col md:flex-row justify-between gap-10">

        {/* Brand */}
        <div className="flex flex-col gap-3 max-w-xs">
          <h3 className="text-xl font-bold tracking-wide">Mahima Living</h3>
          <p className="text-amber-200 text-sm">Preserving the legacy of decoration through exclusive rental experiences.</p>
          <div className="flex gap-4 text-lg mt-2">
            <i className="fa-solid fa-earth-americas hover:text-amber-400 cursor-pointer transition"></i>
            <i className="fa-solid fa-share-nodes hover:text-amber-400 cursor-pointer transition"></i>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold tracking-widest text-amber-400 uppercase">Quick Links</h3>
          <p className="text-amber-200 hover:text-amber-50 cursor-pointer transition text-sm">Fleet Guide</p>
          <p className="text-amber-200 hover:text-amber-50 cursor-pointer transition text-sm">Location</p>
          <p className="text-amber-200 hover:text-amber-50 cursor-pointer transition text-sm">Club Membership</p>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold tracking-widest text-amber-400 uppercase">Resources</h3>
          <p onClick={() => navigate('/contact')} className="text-amber-200 hover:text-amber-50 cursor-pointer transition text-sm">Contact</p>
          <p className="text-amber-200 hover:text-amber-50 cursor-pointer transition text-sm">Privacy Policy</p>
          <p className="text-amber-200 hover:text-amber-50 cursor-pointer transition text-sm">Terms of Service</p>
        </div>

        {/* Subscribe */}
        <div className="flex flex-col gap-3 max-w-xs">
          <h3 className="text-sm font-semibold tracking-widest text-amber-400 uppercase">Subscribe</h3>
          <p className="text-amber-200 text-sm">Join our private list for seasonal fleet updates.</p>
          <input
            type="email"
            placeholder="Email address"
            className="px-4 py-2 rounded-xl bg-amber-900 text-amber-50 placeholder-amber-400 border border-amber-700 focus:outline-none text-sm"
          />
          <button
            onClick={() => navigate('/contact')}
            className="px-4 py-2 bg-amber-50 text-amber-950 rounded-xl font-semibold text-sm hover:bg-amber-200 active:scale-95 transition-all"
          >
            Subscribe
          </button>
        </div>

      </div>

      

    </div>
  )
}

export default Info