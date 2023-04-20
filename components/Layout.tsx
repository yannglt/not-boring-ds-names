import { motion } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <motion.div
    initial={{ y: 48, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ ease: "easeInOut", duration: 0.4 }}
  >
    {children}
  </motion.div>
);
export default Layout;