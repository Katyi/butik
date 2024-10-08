import Image from 'next/image';

const Banner = () => {
  return (
    <div>
      {/* banner1 */}
      <div className="w-screen h-[calc(100vh-64px)] relative flex justify-center overflow-hidden">
        <Image
          src="/banner1.avif"
          alt="Banner Image"
          width={2000}
          height={1000}
          className="absolute h-full object-cover"
        />
        <div className="relative z-40 h-52 flex flex-col items-center mt-[50vh] gap-5">
          <p className="text-white text-heading2-bold sm:text-heading1-bold md:text-heading-bold uppercase">
            осень 2024
          </p>
          <p className="text-white text-small-medium sm:text-base-bold md:text-heading4-bold uppercase">
            новые поступления
          </p>
        </div>
      </div>
      {/* video 1*/}
      {/* <div className="w-screen h-[calc(100vh-64px)] relative flex justify-center overflow-hidden">
        <video
          src="/video1.webm"
          autoPlay={true}
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-[calc(100vh-64px)] max-w-none"
        ></video>
        <div className="relative z-40 h-52 flex flex-col items-center mt-[50vh] gap-5">
          <p className="text-white text-heading2-bold sm:text-heading1-bold md:text-heading-bold uppercase text-center">
            верхняя одежда
          </p>
          <p className="text-white text-small-medium sm:text-base-bold md:text-heading4-bold uppercase">
            для нее
          </p>
        </div>
      </div> */}
      {/* banner 2 */}
      {/* <div className="w-screen h-[calc(100vh-64px)] relative flex justify-center overflow-hidden">
        <Image
          src="/banner2.avif"
          alt="Banner Image"
          width={2000}
          height={1000}
          className="absolute h-full object-cover"
        />
        <div className="relative z-40 h-52 flex flex-col items-center mt-[50vh] gap-5">
          <p className="text-white text-heading2-bold sm:text-heading1-bold md:text-heading-bold uppercase text-center">
            вечная классика
          </p>
          <p className="text-white text-small-medium sm:text-base-bold md:text-heading4-bold uppercase">
            для него
          </p>
        </div>
      </div> */}
      {/* video 2 */}
      {/* <div className="w-screen h-[calc(100vh-64px)] relative flex justify-center overflow-hidden">
        <video
          src="/video2.webm"
          autoPlay={true}
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-[calc(100vh-64px)] max-w-none"
        ></video>
        <div className="relative z-40 h-52 flex flex-col items-center mt-[50vh] gap-5">
          <p className="text-white text-heading2-bold sm:text-heading1-bold md:text-heading-bold uppercase text-center">
            и в школе и дома
          </p>
          <p className="text-white text-small-medium sm:text-base-bold md:text-heading4-bold uppercase">
            для детей
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
