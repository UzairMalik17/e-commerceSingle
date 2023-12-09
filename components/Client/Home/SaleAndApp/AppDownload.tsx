import NextImage from "@/components/Shared/Image/NextImage";
const AppDownload = () => {
  return (
    <div className="w-full py-10">
      <div className="w-full h-[500px] sm:h-[450px] bg-[url('/Assets/Home/SaleAndApp/download-app-cover.png')] bg-cover bg-center bg-no-repeat px-8 py-4 lg:py-8">
        <div className="w-full flex flex-col gap-8 items-start justify-between">
          <p className="text-sm font-semibold">MOBILE APP VERSION</p>
          <div className="text-3xl text-black font-semibold">
            <div className="pb-2">
              <span>Get Our </span>
              <span className="text-lavaRed decoration-lavaRed underline underline-offset-8">
                Mobile App
              </span>
            </div>
            <p>It’s Make easy for you life !</p>
          </div>
          <div className="w-full flex flex-row gap-2 sm:gap-4 justify-start items-center">
            <NextImage
              imageSrc="/Assets/Home/SaleAndApp/play-store.png"
              containerStyle="w-[135px] h-[135px] sm:w-[170px] sm:h-[70px]"
              imageStyle="object-contain"
            />
            <NextImage
              imageSrc="/Assets/Home/SaleAndApp/apple-store.png"
              containerStyle="w-[135px] h-[135px] sm:w-[170px] sm:h-[70px]"
              imageStyle="object-contain"
            />
          </div>
          <NextImage
            imageSrc="/Assets/Home/SaleAndApp/app-screen.png"
            containerStyle="w-full h-[80px] sm:h-[130px]"
            imageStyle="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
