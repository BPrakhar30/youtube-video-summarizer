import { motion } from 'framer-motion'

const VideoInput = ({ videoUrl, setVideoUrl, icon }) => {
  return (
    <motion.div 
      className="input-group"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      <label htmlFor="video-url">
        {icon} YouTube Video URL
      </label>
      <input
        type="text"
        id="video-url"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        placeholder="https://www.youtube.com/watch?v=..."
      />
    </motion.div>
  )
}

export default VideoInput 