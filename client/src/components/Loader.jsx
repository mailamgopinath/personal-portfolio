import { AnimatePresence, motion } from 'framer-motion';

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div className="loader" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
          <motion.div
            className="loader-mark"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            G
          </motion.div>
          <div className="loader-bar"><span /></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
