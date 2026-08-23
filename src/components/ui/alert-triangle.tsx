"use client";

import { m, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "@/lib/utils";

export interface AlertTriangleIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface AlertTriangleIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const AlertTriangleIcon = forwardRef<
  AlertTriangleIconHandle,
  AlertTriangleIconProps
>(({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
  const controls = useAnimation();
  const isControlledRef = useRef(false);

  useImperativeHandle(ref, () => {
    isControlledRef.current = true;

    return {
      startAnimation: () => controls.start("animate"),
      stopAnimation: () => controls.start("normal"),
    };
  });

  const handleMouseEnter = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (isControlledRef.current) {
        onMouseEnter?.(event);
      } else {
        controls.start("animate");
      }
    },
    [controls, onMouseEnter],
  );

  const handleMouseLeave = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (isControlledRef.current) {
        onMouseLeave?.(event);
      } else {
        controls.start("normal");
      }
    },
    [controls, onMouseLeave],
  );

  return (
    <div
      className={cn(className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <svg
        fill="none"
        height={size}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <m.g
          animate={controls}
          style={{ transformOrigin: "12px 12px" }}
          variants={{
            normal: { rotate: 0 },
            animate: {
              rotate: [0, -3, 3, -2, 0],
              transition: { duration: 0.36, ease: "easeOut" },
            },
          }}
        >
          <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          <m.path
            animate={controls}
            d="M12 9v4"
            variants={{
              normal: { pathLength: 1, opacity: 1 },
              animate: {
                pathLength: [0, 1],
                opacity: [0, 1],
                transition: { delay: 0.08, duration: 0.18 },
              },
            }}
          />
          <circle cx="12" cy="17" r="0.5" fill="currentColor" stroke="none" />
        </m.g>
      </svg>
    </div>
  );
});

AlertTriangleIcon.displayName = "AlertTriangleIcon";

export { AlertTriangleIcon };
