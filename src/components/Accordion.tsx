import React, { useRef, useState } from 'react'
import { BsChevronCompactDown } from 'react-icons/bs'

interface AccordionProps {
  title: React.ReactNode
  content: React.ReactNode
}

export const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [active, setActive] = useState(false)
  const [height, setHeight] = useState('0px')
  const [rotate, setRotate] = useState('transform duration-700 ease')

  const contentSpace = useRef(null)

  function toggleAccordion() {
    setActive((prevState) => !prevState)
    // @ts-ignore
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
    setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180')
  }

  return (
    <div className="flex flex-col bg-white rounded-xl p-2 my-4">
      <button
        className="py-4 box-border appearance-none cursor-pointer focus:outline-green-400 flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <p className="inline-block text-footnote tracking-wider font-medium text-2xl mx-4 text-gray-600">{title}</p>
        <div className={`${rotate} inline-block mx-2 text-white bg-green-700 opacity-50 p-1 rounded-lg`}>
        <BsChevronCompactDown />
        </div>
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-auto transition-max-height duration-700 ease-in-out"
      >
        <div className="mx-4 pb-4 text-gray-500 text-lg">{content}</div>
      </div>
    </div>
  )
}