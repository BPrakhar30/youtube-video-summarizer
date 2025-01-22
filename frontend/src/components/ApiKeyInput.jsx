import { motion } from 'framer-motion'

const ApiKeyInput = ({ apiKey, setApiKey, icon }) => {
  return (
    <motion.div 
      className="input-group"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <label htmlFor="api-key">
        {icon} OpenAI API Key
      </label>
      <input
        type="password"
        id="api-key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="sk-..."
      />
    </motion.div>
  )
}

export default ApiKeyInput 