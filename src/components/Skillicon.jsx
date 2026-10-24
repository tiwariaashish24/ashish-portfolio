import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

import React from 'react'

function Skillicon({imgurl}) {
  return (
        <div className="flex items-center justify-center">
        <DirectionAwareHover imageUrl={imgurl}>
          <p className="font-bold text-xl"></p>
          <p className="font-normal text-sm"></p>
        </DirectionAwareHover>
      </div>
  )
}

export default Skillicon
