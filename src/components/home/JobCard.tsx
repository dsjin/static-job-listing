import React from 'react'
import ChainList from './ChainList'
import Badge from './Badge'

import './JobCard.scss'
import { IJobCard } from '../../interfaces/components/home/JobCard'

const JobCard = (props: IJobCard) => {

  const additionItems = props.additionItems.map((value: string) => {
    return (<Badge
      label={value}
      bgColor="hsl(180, 31%, 95%)"
      textColor="hsl(180, 29%, 50%)"
      className={['px-2 pb-1 pt-2 font-bold cursor-pointer mt-5 lg:mt-0']}
      clickCallback={ () => props.additionCallback!!(value) }
    />)
  })

  return (
    <div
      className={`job-card container rounded w-full bg-white p-9 shadow-lg my-16 lg:my-5 ${ props.featured ? 'active': '' }`}
    >
      <div
        className="flex flex-col lg:flex-row"
      >
        <img src={require(`../../assets/images/${props.src}`).default} className="w-16 absolute -top-8 lg:mr-5 lg:w-auto lg:relative lg:top-0" alt={props.title} />
        <div
          className="flex flex-col justify-between w-full mt-2 lg:mt-0"
        >
          <div
            className="company font-bold flex"
          >
            <span>
              { props.company }
            </span>
            { 
              props.new ?
              <Badge
                label="NEW!"
                bgColor="hsl(180, 29%, 50%)"
                roundedSize="2xl"
              /> : ''
            }
            { 
              props.featured ?
              <Badge
                label="FEATURED"
                bgColor="hsl(180, 14%, 20%)"
                roundedSize="2xl"
              /> : ''
            }
          </div>
          <div
            className="font-bold mt-4 lg:mt-0"
          >
            { props.title }
          </div>
          <div
            className="mt-4 lg:mt-0"
          >
            <ChainList
              texts={props.chainTexts}
            />
          </div>
        </div>
        <hr className="lg:hidden my-4" />
        <div
          className="addition-item flex lg:justify-end items-center w-full flex-wrap -mt-5 lg:mt-0"
        >
          { additionItems }
        </div>
      </div>
    </div>
  )
}

export default JobCard
