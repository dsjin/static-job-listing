import React, { useState } from 'react'
import JobList from '../../assets/data.json'
import JobCard from '../../components/home/JobCard'
import FilterBox from '../../components/home/FilterBox'
import './index.scss'

const Home = () => {
  const [ filterAdditionItem, setFilterAdditionItem ] = useState<Array<string>>([])
  const removeAdditionItem = (label: string) => {
    const originalList: Array<string> = [...filterAdditionItem]
    const index: number = originalList.indexOf(label)
    if (index !== -1) {
      originalList.splice(index, 1)
      setFilterAdditionItem(originalList)
    }
  }

  const addAdditionItem = (label: string) => {
    const originalList: Array<string> = [...filterAdditionItem]
    const index: number = originalList.indexOf(label)
    if (index === -1) {
      originalList.push(label)
      setFilterAdditionItem(originalList)
    }
  }

  const clearAllItem = () => {
    setFilterAdditionItem([])
  }

  const JobCardList = JobList.filter((jobData: any) => {
    if (filterAdditionItem.length === 0) {
      return true
    }
    const additionItems = [
      jobData.role,
      jobData.level,
      ...jobData.languages,
      ...jobData.tools
    ]
    const filterAdditionItems = new Set([...filterAdditionItem])
    return [...additionItems].filter(x => filterAdditionItems.has(x)).length === filterAdditionItems.size
  }).map((jobData: any) => {
    return <JobCard
      company={jobData.company}
      title={jobData.position}
      src={jobData.logo.split('/').slice(-1).pop()}
      chainTexts={[jobData.postedAt, jobData.contract, jobData.location]}
      new={jobData.new}
      featured={jobData.featured}
      additionItems={[
        jobData.role,
        jobData.level,
        ...jobData.languages,
        ...jobData.tools
      ]}
      additionCallback={ addAdditionItem }
    />
  })

  return (
    <div>
      <div
        id="Header"
        className="w-full"
      />
      <div
        className="container mx-auto px-4"
      >
        {
          filterAdditionItem.length > 0 ?
          <FilterBox
            additionalList={ filterAdditionItem }
            className="-mt-7"
            discardCallback={ removeAdditionItem }
            discardAllCallback={ clearAllItem }
          />
          : ''
        }
        { JobCardList }
      </div>
    </div>
  )
}

export default Home