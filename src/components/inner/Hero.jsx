import { FaChevronDown } from "react-icons/fa";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight, MdViewList } from "react-icons/md";
import { IoGrid } from "react-icons/io5";
import { GoChevronDown } from "react-icons/go";

const card = [
  {
    img: "/img41.png",
    title: "'Samsung 19' S33A Full HD Monitor",
    text: "Compact 19-inch display with vivid color support and smooth",
    text3: "visuals, featuring Eye Saver Mode, Flicker Free technology,",
    text4: "and Game Mode for comfortable viewing and optimized gaming.",
    text2: "Availability: In Stock",
    price: "AED 1200",
    button1: "Add To Cart",
    button2: "Add To Wishlist",
  },
  {
    img: "/img41.png",
    title: "'Samsung 19' S33A Full HD Monitor",
    text: "Compact 19-inch display with vivid color support and smooth",
    text3: "visuals, featuring Eye Saver Mode, Flicker Free technology,",
    text4: "and Game Mode for comfortable viewing and optimized gaming.",
    text2: "Availability: In Stock",
    price: "AED 1200",
    button1: "Add To Cart",
    button2: "Add To Wishlist",
  },
  {
    img: "/img41.png",
    title: "'Samsung 19' S33A Full HD Monitor",
    text: "Compact 19-inch display with vivid color support and smooth",
    text3: "visuals, featuring Eye Saver Mode, Flicker Free technology,",
    text4: "and Game Mode for comfortable viewing and optimized gaming.",
    text2: "Availability: In Stock",
    price: "AED 1200",
    button1: "Add To Cart",
    button2: "Add To Wishlist",
  },
];

const Hero = () => {
  return (
    <div className="p-5 md:pl-16 md:pr-16">
      {/* nav */}
      <div className="h-10 flex gap-x-3 border pl-5 pt-2 border-[#e0d9e0] text-sm sm:text-base">
        <p className="cursor-pointer">Home</p>
        <p className="text-[#e0d9e0]">/</p>
        <p className="text-[#c7c0c7]">Monitor</p>
      </div>

      {/* dropdown + main grid */}
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:w-[400px] w-full">
        {/* left category list */}
        <div className="lg:w-auto w-full">
          <div className="border border-[#e0d9e0] lg:h-[490px]">
            <div className="flex text-white bg-[#E7000B] pl-3 p-2 cursor-pointer">
              <p className="pt-1 pr-1">
                <FaChevronDown />
              </p>
              <p className="font-semibold">Monitor</p>
            </div>

            {[
              "ViewSonic",
              "Lenovo",
              "Samsung",
              "Asus",
              "HP",
              "DELL",
              "MSI Monitor",
              "Xiaomi",
              "DHP",
              "AOC",
              "GAMEON",
            ].map((brand) => (
              <p
                key={brand}
                className="ml-3 p-2 mr-3 border-b border-[#e0d9e0] cursor-pointer hover:text-[#E7000B]"
              >
                {brand}
              </p>
            ))}
          </div>
        </div>

        {/* right content */}
        <div className="lg:w-[900px] w-full">
          <p className="text-2xl md:text-3xl font-semibold text-[#E7000B]">
            Monitor
          </p>
          <p className="text-sm md:text-[14px] pt-3 border-b pb-3 border-[#e0d9e0]">
            Shop a wide selection of Monitor in UAE including Gaming,
            Professional, Portable, and Everyday displays at ALAM COMPUTER
          </p>

          {/* top filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 pt-5 text-sm md:text-[14px] gap-3">
            <div>Showing 1 - 10 of 77 Results</div>

            <div className="flex border justify-between border-[#e0d9e0] rounded-lg text-sm">
              <p className="border-[#e0d9e0] pl-2 pt-2 cursor-pointer">
                <MdKeyboardDoubleArrowLeft />
              </p>
              {[1, 2, 3, 4, 5].map((num) => (
                <p
                  key={num}
                  className="border-l border-[#e0d9e0] pl-4 pt-1 cursor-pointer"
                >
                  {num}
                </p>
              ))}
              <p className="border-l border-[#e0d9e0] pl-3 pr-2 pt-2 cursor-pointer">
                <MdKeyboardDoubleArrowRight />
              </p>
            </div>

            <div className="flex justify-start md:justify-end">
              <p className="flex items-center">
                Results Per Page:
                <div className="bg-[#F5F6F6] flex border ml-3 p-1 rounded-md border-[#e0d9e0] cursor-pointer">
                  10
                  <p className="pt-1 pl-3">
                    <GoChevronDown />
                  </p>
                </div>
              </p>
            </div>
          </div>

          {/* layout + sorting */}
          <div className="flex flex-col md:flex-row justify-between pt-5 border-b pb-5 border-[#e0d9e0] gap-3">
            <div className="flex gap-2 justify-center md:justify-start">
              <p className="border w-10 p-3 rounded-md border-[#e0d9e0] bg-[#F5F6F6] cursor-pointer">
                <IoGrid />
              </p>
              <p className="border w-10 p-2 rounded-md border-[#e0d9e0] bg-[#F5F6F6] cursor-pointer text-2xl">
                <MdViewList />
              </p>
            </div>
            <div className="bg-[#F5F6F6] flex border p-1 rounded-md border-[#e0d9e0] cursor-pointer justify-center md:justify-start">
              Price Low-High
              <p className="pt-1 pl-3">
                <GoChevronDown />
              </p>
            </div>
          </div>

          {/* products list */}
          <div className="space-y-5 ">
            {card.map((product, i) => (
              <ul
                key={i}
                className="flex flex-col md:flex-row md:items-center border p-1 border-[#e0d9e0] pt-10 space-y-5 md:space-y-0 md:space-x-5 pb-10 md:pl-4 "
              >
                <p className="flex justify-center md:block">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-[150px] md:w-auto"
                  />
                </p>
                <div className="space-y-3 text-center md:text-left">
                  <p className="text-lg md:text-xl font-medium cursor-pointer hover:text-[#E7000B]">
                    {product.title}
                  </p>
                  <p className="text-xs">
                    {product.text}
                    <br /> {product.text3}
                    <br />
                    {product.text4}
                  </p>
                </div>
                <div className="space-y-3 text-center md:text-left">
                  <p className="text-xs">{product.text2}</p>
                  <p className="text-lg md:text-xl font-medium">
                    {product.price}
                  </p>
                  <div className="flex flex-col items-center md:items-start gap-2">
                    <button className="cursor-pointer border w-40 bg-[#E7000B] text-white rounded-md h-10 hover:bg-[#FF0000]">
                      {product.button1}
                    </button>
                    <button className="cursor-pointer border w-40 bg-[#CCCCCC] text-white rounded-md h-10 hover:bg-white hover:text-black">
                      {product.button2}
                    </button>
                  </div>
                </div>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
