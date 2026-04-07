"use client";
import React from 'react';
import InnerHeader from '@/components/InnerHeader';
import HomeAbout from '@/components/home/HomeAbout';

const Page = () => {
  return (
    <>
      <InnerHeader title="Meet the Doctor" />
      <HomeAbout /> 
    </>
  );
};

export default Page;