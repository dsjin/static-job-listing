import React, { useState } from 'react'
import './Badge.scss'

import { IBadge } from '../../interfaces/components/home/Badge'

const Badge = (props: IBadge) => {
  const [discardBgColor, setDiscardBgColor] = useState(props.discardBgColor)

  const discardStyle = {
    backgroundColor: discardBgColor
  }

  return (
    <span
      className="flex"
    >
      <span
        className={`badge text-xs inline-flex items-center ${props.roundedSize ? `rounded${props.discardable ? '-l' : ''}-${props.roundedSize}` : `rounded${props.discardable ? '-l' : ''}`} ${props.className ? props.className.join(' ') : 'px-2 pt-1'}`}
        style={{ backgroundColor: props.bgColor, color: props.textColor }}
        onClick={ () => props.clickCallback ? props.clickCallback() : undefined }
      >
        {props.label}
      </span>
      {
        props.discardable ?
          <div
            className={`flex justify-center items-center transition-all rounded-r ${ props.classNameDiscard ? props.classNameDiscard : 'px-1' }`}
            style={discardStyle}
            onClick={ () => props.discardCallback!!() }
            onMouseEnter={
              () => {
                setDiscardBgColor(props.discardHoverBgColor)
              }
            }
            onMouseLeave={
              () => {
                setDiscardBgColor(props.discardBgColor)
              }
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" style={{ color: props.discardTextColor }} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          : ''
      }
    </span>
  )
}

export default Badge