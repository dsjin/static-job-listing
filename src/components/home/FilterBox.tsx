import React from 'react'
import Badge from './Badge'
import './FilterBox.scss'

import { IFilterBox } from '../../interfaces/components/home/FilterBox'

const FilterBox = (props: IFilterBox) => {
  const badgeList = props.additionalList.map((label: string) => {
    return <Badge
      key={ label }
      label={label}
      bgColor="hsl(180, 31%, 95%)"
      textColor="hsl(180, 29%, 50%)"
      className={['px-2 pb-1 pt-2 font-bold mt-0 mb-4 lg:mb-0']}
      classNameDiscard={['px-1 cursor-pointer mr-4 mb-4 lg:mb-0']}
      discardable
      discardBgColor="hsl(180, 29%, 50%)"
      discardTextColor="white"
      discardHoverBgColor="hsl(180, 14%, 20%)"
      discardCallback={ () => props.discardCallback!!(label)}
    />
  })
  return (
    <div
      className={`filter-box bg-white rounded px-8 pt-4 pb-m-2 lg:py-4 shadow-lg flex ${props.className ? props.className : ''}`}
    >
      <div
        className="flex-auto flex flex-wrap"
      >
        {
          badgeList
        }
      </div>
      <div
        className="flex-none flex items-center justify-center clear-button cursor-pointer"
        onClick={ () => props.discardAllCallback!!()  }
      >
        Clear
      </div>
    </div>
  )
}

export default FilterBox