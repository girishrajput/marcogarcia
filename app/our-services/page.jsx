"use client";
import React from 'react';
import InnerHeader from '@/components/InnerHeader';
import CareServices from '@/components/home/CareServices';

const Page = () => {
  return (
    <>
      <InnerHeader title="Our Services" />
      <CareServices items={[]} /> 
    </>
  );
};

export default Page;