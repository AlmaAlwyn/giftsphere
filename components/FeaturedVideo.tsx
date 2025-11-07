"use client";

import { useState } from "react";
import ReactPlayer from "react-player";

export default function FeaturedVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200">
        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
        <h2 className="text-lg font-bold text-gray-900">Featured Video</h2>
      </div>

      <div className="relative aspect-video bg-gray-900">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          playing={playing}
          controls
          width="100%"
          height="100%"
          light="/video-thumbnail.jpg"
          playIcon={
            <div className="bg-primary-600 rounded-full p-4 hover:bg-primary-700 transition-colors">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          }
        />

        {/* Fallback for when ReactPlayer doesn't load */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600">
          <div className="text-center text-white p-8">
            <button
              onClick={() => setPlaying(true)}
              className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all mb-4"
            >
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <h3 className="text-2xl font-bold mb-2">The Art of Gift Giving</h3>
            <p className="text-white/90">Learn how to choose perfect return gifts</p>
          </div>
        </div>
      </div>

      <div className="p-4 bg-gray-50">
        <p className="text-gray-700 text-sm">
          Discover the secrets of selecting memorable return gifts that your guests will cherish.
          From personalized touches to elegant packaging, make every occasion special.
        </p>
      </div>
    </div>
  );
}
