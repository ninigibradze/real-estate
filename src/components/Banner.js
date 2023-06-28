import React from 'react';
import Image from './../assets/img/house-banner.png';
import Search from './../components/Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col 
        items-center lg:items-start text-center lg:text-left
        justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold 
          leading-none mb-6 '>
            <span className='text-violet-700'>Rent</span> Your Dream House With Us.
          </h1>
          <p className='max-w-[480px] mb-8'>
          Lorem ipsum odor amet, consectetuer adipiscing elit. 
          Ac purus in massa egestas mollis varius; dignissim elementum. 
          Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
          Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. 
          Mollis elit sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
          </p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end '>
          <img src={Image} alt='bannerimage' />
        </div>
      </div>
      <Search />
    </section>
  )
};

export default Banner;
