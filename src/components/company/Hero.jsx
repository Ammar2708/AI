import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight, MdViewList } from "react-icons/md";
import { IoGrid } from "react-icons/io5";
import { GoChevronDown } from "react-icons/go";

const card = [
  {img:"/img21.png", title:"Lenovo ThinkBook 15 G2 ITL Business Notebook", text:"Equipped with Intel Core i3-1115G4 processor HD 720p camera with", text3:" privacy shutter, and Wi-Fi 6 connectivity. Features a non-backlit", text4:" keyboard, 45Wh battery, and integrated fingerprint reader for security", text2:"Availability: In Stock", price:"AED 900", button1:" Add To Cart", button2:"Add To Wishlist" },
  {img:"/img21.png", title:"Lenovo ThinkBook 15 G2 ITL Business Notebook", text:"Equipped with Intel Core i3-1115G4 processor HD 720p camera with", text3:" privacy shutter, and Wi-Fi 6 connectivity. Features a non-backlit", text4:" keyboard, 45Wh battery, and integrated fingerprint reader for security", text2:"Availability: In Stock", price:"AED 900", button1:" Add To Cart", button2:"Add To Wishlist" },
  {img:"/img21.png", title:"Lenovo ThinkBook 15 G2 ITL Business Notebook", text:"Equipped with Intel Core i3-1115G4 processor HD 720p camera with", text3:" privacy shutter, and Wi-Fi 6 connectivity. Features a non-backlit", text4:" keyboard, 45Wh battery, and integrated fingerprint reader for security", text2:"Availability: In Stock", price:"AED 900", button1:" Add To Cart", button2:"Add To Wishlist" }
];

const Hero = () => {
  return (
    <div className='p-5 sm:p-5 md:pl-16 md:pr-16'>
      {/* nav */}
      <div className='h-10 flex gap-x-3 border pl-5 pt-2 border-[#e0d9e0] flex-wrap'>
        <p className='cursor-pointer'>Home</p>
        <p className='text-[#e0d9e0]'>/</p>
        <p className='text-[#c7c0c7]'>Laptops</p>
      </div>

      {/* dropdown */}
      <div className='mt-5   sm:grid-cols-1 md:flex gap-10 w-full'> 
        {/* sidebar */}
        <div className='w-full md:w-50 mb-10'>
          <div className='border border-[#e0d9e0] h-auto'>
            <div className='flex text-white bg-[#E7000B] pl-3 p-2 cursor-pointer'>
              <p className='pt-1 pr-1'><FaChevronDown /></p>
              <p className='font-semibold'>Laptops</p>
            </div>
            {["Dell", "Hp", "Lenovo", "Acer", "Apple", "Asus", "MSI"].map((brand, i) => (
              <p key={i} className='ml-3 p-2 mr-3 border-b last:border-none border-[#e0d9e0] cursor-pointer hover:text-[#E7000B]'>{brand} laptops</p>
            ))}
          </div>
        </div>

        {/* main content */}
        <div className='w-full'>
          <p className='text-3xl font-semibold text-[#E7000B]'>Laptops</p>
          <p className='text-[14px] pt-3 border-b pb-3 border-[#e0d9e0]'>Shop a wide selection of Laptops in UAE including 2 in 1 and traditional laptops at ALAM COMPUTER</p>

          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 pt-5 text-[14px] gap-3'>
            <div>Showing 1 - 10 of 138 Results</div>
            <div className='flex border justify-between border-[#e0d9e0] rounded-lg flex-wrap'>
              <p className='border-[#e0d9e0] pl-2 pt-2 cursor-pointer'><MdKeyboardDoubleArrowLeft /></p>
              {[1,2,3,4,5].map((num) => (
                <p key={num} className='border-l border-[#e0d9e0] pl-4 pt-1 cursor-pointer'>{num}</p>
              ))}
              <p className='border-l border-[#e0d9e0] pl-3 pr-2 pt-2 cursor-pointer '><MdKeyboardDoubleArrowRight /></p>
            </div>
            <div>
              <p className='flex flex-wrap sm:pl-0 md:pl-28'>Results Per Page: 
                <div className='bg-[#F5F6F6] flex border ml-3 p-1 rounded-md border-[#e0d9e0] cursor-pointer'>10
                  <p className='pt-1 pl-3'><GoChevronDown /></p>
                </div>
              </p>
            </div>
          </div>

          <div className='flex flex-wrap justify-between pt-5 border-b pb-5 border-[#e0d9e0] gap-3'>
            <div className='flex gap-2'>
              <p className='border w-10 p-3 rounded-md border-[#e0d9e0] bg-[#F5F6F6] cursor-pointer'><IoGrid /></p>
              <p className='border w-10 p-2 rounded-md border-[#e0d9e0] bg-[#F5F6F6] cursor-pointer text-2xl'><MdViewList /></p>
            </div>
            <div className='bg-[#F5F6F6] flex border ml-3 p-1 rounded-md border-[#e0d9e0] cursor-pointer'> Price Low-High
              <p className='pt-1 pl-3'><GoChevronDown /></p>
            </div>
          </div>
          
          {/* list */}
          <div className='space-y-5'>
            {card.map ((product, index) => (
              <ul key={index} className='flex flex-col md:flex-row  border  p-3  border-[#e0d9e0] pt-10 pb-10 md:space-x-5'>
                <img src={product.img} className='w-full md:w-auto' />
                <div className='space-y-3'>
                  <p className='text-xl font-medium cursor-pointer hover:text-[#E7000B]'>{product.title}</p>
                  <p className='text-xs'>{product.text} <br /> {product.text3} <br />{product.text4}</p>
                </div>
                <div className='space-y-3 mt-3 md:mt-0'>
                  <p className='text-xs'>{product.text2}</p>
                  <p className='text-xl font-medium'>{product.price}</p>
                  <button className='cursor-pointer border w-full md:w-40 bg-[#E7000B] text-white rounded-md h-10 hover:bg-[#FF0000]'>  {product.button1}</button>
                  <button className='cursor-pointer border w-full md:w-40 bg-[#CCCCCC] text-white rounded-md h-10 hover:bg-white hover:text-black'>{product.button2}</button>
                </div>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
