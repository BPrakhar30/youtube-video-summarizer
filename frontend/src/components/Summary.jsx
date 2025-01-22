import { motion } from 'framer-motion'

const Summary = ({ summary }) => {
  if (!summary) return null

  // Function to split and format the summary sections
  const formatSummary = (text) => {
    // For debugging
    console.log("Raw summary:", text);

    const sections = {
      title: '',
      summary: [],
      conclusion: ''
    }

    try {
      // Find title
      const titleMatch = text.match(/\*\*Title:\*\*(.*?)(?=\*\*|$)/s);
      if (titleMatch) {
        sections.title = titleMatch[1].trim();
      }

      // Find summary points
      const summaryMatch = text.match(/\*\*Summary:\*\*(.*?)(?=\*\*Conclusion:|$)/s);
      if (summaryMatch) {
        sections.summary = summaryMatch[1]
          .split('•')
          .map(point => point.trim())
          .filter(point => point.length > 0);
      }

      // Find conclusion
      const conclusionMatch = text.match(/\*\*Conclusion:\*\*(.*?)$/s);
      if (conclusionMatch) {
        sections.conclusion = conclusionMatch[1].trim();
      }

      // For debugging
      console.log("Processed sections:", sections);
    } catch (error) {
      console.error("Error processing summary:", error);
    }

    return sections;
  }

  const formattedSummary = formatSummary(summary);

  return (
    <motion.div 
      className="summary"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      {formattedSummary.title && (
        <div className="summary-section">
          <h2 className="summary-title">Title</h2>
          <p className="title-content">{formattedSummary.title}</p>
        </div>
      )}

      {formattedSummary.summary.length > 0 && (
        <div className="summary-section">
          <h2 className="summary-title">Summary</h2>
          <ul className="summary-points">
            {formattedSummary.summary.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {formattedSummary.conclusion && (
        <div className="summary-section">
          <h2 className="summary-title">Conclusion</h2>
          <p className="conclusion-content">{formattedSummary.conclusion}</p>
        </div>
      )}
    </motion.div>
  )
}

export default Summary 