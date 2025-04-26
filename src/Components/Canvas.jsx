import React from 'react'
import { Stage, Layer, Rect, Transformer } from 'react-konva'

const Canvas = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div
        className="relative bg-white border border-gray-400 rounded-md shadow-md"
        style={{
          width: '1280px',
          height: '720px',
          maxWidth: '100%',
          aspectRatio: '16 / 9',
        }}
      >
        <Stage width={1280} height={720}>
          <Layer>

          </Layer>
        </Stage>
      </div>
    </div>
  )
}

export default Canvas
