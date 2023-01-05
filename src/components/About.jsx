export default function About(){

return (

<div class="bg-black py-24 sm:py-32 lg:py-40">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="sm:text-center">
      <p class="mt-2 font-bold tracking-tight text-white text-5xl">Need help with fitness? <span class="text-orange-btn">Gimmie Jimmy!</span></p>
      <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
    </div>

    <div class="mt-20 max-w-lg sm:mx-auto md:max-w-none">
      <div class="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
        <div class="relative flex flex-col gap-6">
          <div class="flex h-14 w-14 p-2 items-center mx-auto justify-center rounded-xl bg-orange-btn text-white sm:shrink-0">
            <img src="/assets/images/diet.png" />
          </div>
          <div class="sm:min-w-0 sm:flex-1 text-center">
            <p class="text-lg font-semibold leading-8 text-white">Exercise plans</p>
            <p class="mt-2 text-base leading-7 text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
          </div>
        </div>

        <div class="relative flex flex-col gap-6">
          <div class="flex h-14 w-14 p-2 items-center mx-auto justify-center rounded-xl bg-orange-btn text-white sm:shrink-0">
            <img src="/assets/images/yoga-pose.png" />
          </div>
          <div class="sm:min-w-0 sm:flex-1 text-center">
            <p class="text-lg font-semibold leading-8 text-white">Yoga</p>
            <p class="mt-2 text-base leading-7 text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
          </div>
        </div>

        <div class="relative flex flex-col gap-6">
          <div class="flex h-14 w-14 p-2 items-center mx-auto justify-center rounded-xl bg-orange-btn text-white sm:shrink-0">
            <img src="/assets/images/weightlifter.png" />
          </div>
          <div class="sm:min-w-0 sm:flex-1 text-center">
            <p class="text-lg font-semibold leading-8 text-white">Weightlifting</p>
            <p class="mt-2 text-base leading-7 text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
          </div>
        </div>

        <div class="relative flex flex-col gap-6">
          <div class="flex h-14 w-14 p-2 items-center mx-auto justify-center rounded-xl bg-orange-btn text-white sm:shrink-0">
            <img src="/assets/images/healthy-food.png" />
          </div>
          <div class="sm:min-w-0 sm:flex-1 text-center">
            <p class="text-lg font-semibold leading-8 text-white">Diet plans</p>
            <p class="mt-2 text-base leading-7 text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)}