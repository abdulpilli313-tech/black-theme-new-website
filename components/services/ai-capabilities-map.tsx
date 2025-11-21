"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const nodes = [
  { label: "Autonomous Agents", x: 50, y: 20 },
  { label: "RPA Automation", x: 80, y: 35 },
  { label: "Workflow Orchestration", x: 65, y: 55 },
  { label: "Knowledge Bases", x: 35, y: 50 },
  { label: "Data Pipelines", x: 20, y: 70 },
  { label: "Realtime Analytics", x: 50, y: 80 },
  { label: "Smart Chat & Voice", x: 75, y: 70 },
]

export function AICapabilitiesMap() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null)

  return (
    <section className="relative min-h-screen w-full bg-background px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-bold md:text-5xl">
          <span className="gradient-text">AI Capabilities Map</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">Interconnected AI systems working in harmony</p>
      </motion.div>

      <div className="mx-auto max-w-6xl">
        <svg className="h-96 w-full" viewBox="0 0 100 100">
          {/* Draw connecting lines */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {nodes.map((node1, i) =>
            nodes.map((node2, j) =>
              i < j && Math.random() > 0.4 ? (
                <motion.line
                  key={`line-${i}-${j}`}
                  x1={node1.x}
                  y1={node1.y}
                  x2={node2.x}
                  y2={node2.y}
                  stroke="rgba(59, 130, 246, 0.2)"
                  strokeWidth="0.3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                />
              ) : null,
            ),
          )}

          {/* Draw nodes */}
          {nodes.map((node, index) => (
            <g key={index}>
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="3"
                fill={hoveredNode === index ? "#a855f7" : "#3b82f6"}
                filter="url(#glow)"
                onMouseEnter={() => setHoveredNode(index)}
                onMouseLeave={() => setHoveredNode(null)}
                whileHover={{ r: 4, fill: "#a855f7" }}
                animate={{
                  r: hoveredNode === index ? 4 : 3,
                }}
                className="cursor-pointer transition-colors"
              />

              {hoveredNode === index && (
                <motion.text
                  x={node.x}
                  y={node.y - 4}
                  textAnchor="middle"
                  className="select-none fill-blue-400 text-xs font-semibold"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {node.label}
                </motion.text>
              )}
            </g>
          ))}
        </svg>
      </div>
    </section>
  )
}
