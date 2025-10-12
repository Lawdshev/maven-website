"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { ReactNode, useEffect } from "react";
import classNames from "classnames";

interface ModalContainerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, y: "-30px", scale: 0.95 },
  visible: { opacity: 1, y: "0", scale: 1 },
};

export default function ModalContainer({
  isOpen,
  onClose,
  children,
  className,
}: ModalContainerProps) {
  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = scrollBarWidth + "px";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "";
    }
  }, [isOpen]);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          onClick={onClose}
        >
          <motion.div
            className={classNames(
              "bg-white rounded-2xl shadow-lg w-full max-h-[80vh] overflow-y-auto max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-2xl  p-6 relative",
              className
            )}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
            {/* Optional close button */}
            {/* <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              aria-label="Close modal"
            >
              ✕
            </button> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}