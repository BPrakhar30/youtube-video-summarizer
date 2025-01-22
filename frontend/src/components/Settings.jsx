import { motion, AnimatePresence } from 'framer-motion'
import { FaKey, FaTimes } from 'react-icons/fa'
import ApiKeyInput from './ApiKeyInput'

const Settings = ({ isOpen, onClose, apiKey, setApiKey }) => {
  const handleProceed = () => {
    if (!apiKey) {
      alert('Please enter your OpenAI API key')
      return
    }
    onClose()
    // Find and focus the video URL input
    const videoInput = document.getElementById('video-url')
    if (videoInput) {
      videoInput.focus()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="settings-overlay"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="settings-panel"
          >
            <div className="settings-header">
              <h2>Settings</h2>
              <button className="close-button" onClick={onClose}>
                <FaTimes />
              </button>
            </div>
            <div className="settings-content">
              <ApiKeyInput apiKey={apiKey} setApiKey={setApiKey} icon={<FaKey />} />
              <button 
                className="proceed-button"
                onClick={handleProceed}
                style={{ marginTop: '1rem' }}
              >
                Proceed
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Settings 