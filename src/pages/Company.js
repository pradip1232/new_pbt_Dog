import React from 'react'
import CompanySection from '../components/OurCompanySections/CompanySection'
import OurStory from '../components/OurCompanySections/OurStory'
import MissionVisionSection from '../components/OurCompanySections/MissionVisionSection'
import ColdChainSection from '../components/OurCompanySections/ColdChainSection'
import MilestoneChart from '../components/OurCompanySections/MilestoneChart'
import InfoSection from '../components/OurCompanySections/InfoSection'

const Company = () => {
  return (
    <div>
      <CompanySection />
      <OurStory />
      <MissionVisionSection />
      <ColdChainSection />
      <MilestoneChart />
      <InfoSection />
    </div>
  )
}

export default Company
