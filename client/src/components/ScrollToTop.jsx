import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import useScrolled from '../hooks/useScrolled.js';

export default function ScrollToTop() {
  const visible = useScrolled(600);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="to-top"
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          whileHover={{ y: -3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <FiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
