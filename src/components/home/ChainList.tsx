import React from 'react'
import { IChainList } from '../../interfaces/components/home/ChainList'
import './ChainList.scss'

const ChainList = (props: IChainList) => {
  const liElms = props.texts.map((value: string) => {
    return <li className="inline-block">{value}</li>
  })
  return (
    <ul className="chain-list text-xs lg:text-base">
      { liElms }
    </ul>
  )
}

export default ChainList