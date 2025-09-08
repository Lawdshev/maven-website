"use client"
import React from 'react'
import HybridCloudHero from "./hybrid-cloud-hero";
import HybridCloudSolutions from './hybrid-cloud-solution';
import CaseStudiesResources from './case-studies-resources';
import DiscoverMore from './discover-more';

function page() {
  return (
    <div>
        <HybridCloudHero/>
        <HybridCloudSolutions />
        <CaseStudiesResources />
        <DiscoverMore  />
    </div>
  )
}

export default page