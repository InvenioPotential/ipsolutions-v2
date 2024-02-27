import { usePathname } from 'next/navigation'
import React, { useEffect, useRef } from 'react'

import {motion, useCycle } from "framer-motion";

const HeaderMobile = () => {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const {height} = useDimensions(containerRef);
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom= {height}
      className={`fixed inset-0 z-50 w-full md:hidden ${
        isOpen ? "" : "pointer-events-none"
      }`}
      ref={containerRef}
    ></motion.nav>
  )
}

export default HeaderMobile;

const useDimensions = (ref: any) => {
  const dimensions = useRef({ width:0, height: 0});

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;

    }
  }, [ref]);

  return dimensions.current;
}
