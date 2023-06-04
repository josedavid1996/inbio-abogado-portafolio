/* eslint-disable comma-dangle */
import { useState, useEffect } from 'react'
import { BgNegroTransparente } from './bgNegroTransparente'
import { useInView } from 'react-intersection-observer'
import { DataNumber, IDataNumber } from '@mock/dataNumber'
import AnimedCount from '@components/shared/AnimedCount'

export const Numbers = () => {
  const [isEffect, setIsEffect] = useState<boolean>(false)

  const { ref, inView } = useInView({
    threshold: 0
  })

  const Item = ({ count, tittle }: IDataNumber) => (
    <div className=" flex flex-col items-center ">
      <h4 className="text-[32px] text-white font-semibold">
        {inView && <AnimedCount n={count || 1000} />}
      </h4>
      <span className="text-[12px] text-custon4">{tittle}</span>
    </div>
  )
  useEffect(() => {
    if (inView) setIsEffect(true)
    else setIsEffect(false)
  }, [inView])

  return (
    <div
      className="bg-[url('/images/bgnumbers.webp')] w-full h-[547px] md:h-[272px] aspect-square bg-cover bg-center relative flex items-center justify-center"
      ref={ref}
    >
      <BgNegroTransparente isReverse light />
      <div className="flex flex-col md:flex-row w-[90%] max-w-[1240px] justify-around items-center gap-4">
        {DataNumber?.map((obj, k) => (
          <Item {...obj} key={k} />
        ))}
        {/* <div className=" flex flex-col items-center ">
          <h4 className="text-[32px] text-white font-semibold">
            {isEffect && <CountUp end={8240} duration={1} />}
          </h4>
          <span className="text-[12px]">HOURS OF WORKS</span>
        </div>
        <div className=" flex flex-col items-center ">
          <h4 className="text-[32px] text-white font-semibold">
            {isEffect && <CountUp end={315} duration={1} />}
          </h4>
          <span className="text-[12px]">CASES DONE</span>
        </div>
        <div className=" flex flex-col items-center ">
          <h4 className="text-[32px] text-white font-semibold">
            {isEffect && <CountUp end={250} duration={1} />}
          </h4>
          <span className="text-[12px]">SATISFIED CUSTOMERS</span>
        </div>
        <div className=" flex flex-col items-center ">
          <h4 className="text-[32px] text-white font-semibold">
            {isEffect && <CountUp end={32} duration={1} />}
          </h4>
          <span className="text-[12px]">AWARDS WINNING</span>
        </div> */}
      </div>
      <BgNegroTransparente light />
    </div>
  )
}
