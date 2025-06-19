import Hero from '@/components/layout/Hero'


const Landing = () => {
  return (
    <div className="absolute text-mainTextBlack min-h-dvh w-full flex flex-col justify-start items-start">
        <div className="relative min-h-full w-full flex flex-col justify-start items-start">
              <Hero />
        </div>
    </div>
  )
}

export default Landing