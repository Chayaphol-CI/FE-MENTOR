"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface TextCollapseProps {
  label: string;
  describe: string;
}

const TextCollapse = ({ label, describe }: TextCollapseProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const CollapseToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col items-start justify-center gap-6">
      <div
        className="flex flex-row items-center cursor-pointer gap-x-5"
        onClick={CollapseToggle}
      >
        <p className="text-title text-faq-darkpurple hover:text-faq-pink">
          {label}
        </p>
        <Image
          src={isOpen ? "/faq/icon-minus.svg" : "/faq/icon-plus.svg"}
          width={30}
          height={30}
          alt="icon"
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-body text-faq-palepurple">{describe}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default TextCollapse;
