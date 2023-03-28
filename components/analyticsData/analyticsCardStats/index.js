import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import BlackSpinner from "../../reusableUi/blackSpinner"
import Link from "next/link"
import ProgressBar from "../../analyticsData/progressBarResolvedTicket"

const Index = ({ analyticsData }) => {
    // Base URL
    const base = process.env.NEXT_PUBLIC_BASE_URL

    const [daataTickets, setDataTickets] = useState()
    const [tagsAnalytics, setTagsAnalytics] = useState([])
    const router = useRouter()


    // useEffect(() => {
    //     if (analyticsData) {

    //         let dup = []
    //         analyticsData.tagsWithCount.map((_tag) => {
    //             dup.push({
    //                 label: _tag.name,
    //                 value: _tag.count
    //             })
    //         })
    //         setTagsAnalytics(dup)
    //     }
    // }, [analyticsData])

    return (
        <div className=" w-full h-full  ">
            <div className=" my-[32px]  w-full">
                <div className="flex  items-center w-full justify-start">
                    <p className="text-2xl -tracking-[0.03em]  w-full max-w-[200px] font-extrabold leading-[100%]">
                        Component Stats:
                    </p>
                    <div className="border-zinc-300 w-full ml-5 border" />
                </div>
            </div>

            <div className="flex w-full  justify-center   items-center  gap-[20px]">
                <div className=" w-full ">
                    <div className="flex flex-col h-[316px]  justify-start w-full p-5 bg-white border rounded-xl border-zinc-200">
                        <div className="flex flex-col space-y-4 items-start justify-center">
                            <p className="text-xl font-extrabold leading-[100%] text-zinc-900">
                                Summary
                            </p>
                            <div className="flex flex-col space-y-4  justify-start w-full">
                                <div className="flex flex-col items-start justify-start px-4 py-3 bg-zinc-100 rounded-md">
                                    <div className="flex space-x-24 items-center justify-between w-full">
                                        <p className="text-base font-semibold -tracking-[0.03em] leading-none text-zinc-900">
                                            ReactJS
                                        </p>
                                        <div className="flex items-center justify-center px-2 py-1 hover:bg-white w-8 text-white h-6 hover:text-zinc-800 bg-zinc-900 rounded-[3px]">
                                            <p className="text-base font-semibold leading-none ">
                                                {
                                                    analyticsData?.componentsReact
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start justify-start w-full px-4 py-3 bg-zinc-100 rounded-md">
                                    <div className="flex space-x-24 items-center justify-between w-full">
                                        <p className="text-base font-semibold leading-none text-zinc-900">
                                            AngularJS
                                        </p>
                                        <div className="flex items-center justify-center px-2 py-1 hover:bg-white w-8 h-6 text-white hover:text-zinc-800 bg-zinc-900 rounded-[3px]">
                                            <p className="text-base font-semibold leading-none">
                                                {
                                                    analyticsData?.componentsAngular
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start justify-start w-full px-4 py-3 bg-zinc-100 rounded-md">
                                    <div className="flex space-x-24 items-center justify-between w-full">
                                        <p className="text-base font-semibold leading-none text-zinc-900">
                                            VueJS
                                        </p>
                                        <div className="flex items-center justify-center px-2  py-1 hover:bg-white w-8 h-6 hover:text-zinc-800 text-white bg-zinc-900 rounded-[3px]">
                                            <p className="text-base font-semibold leading-none">
                                                {
                                                    analyticsData?.componentsVue
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start justify-start w-full px-4 py-3 bg-zinc-100 rounded-md">
                                    <div className="flex space-x-24 items-center justify-between w-full">
                                        <p className="text-base font-semibold leading-none text-zinc-900">
                                            HTML: Total
                                        </p>
                                        <div className="flex items-center justify-center px-2 py-1 hover:bg-white w-8 h-6 text-white hover:text-zinc-800 bg-zinc-900 rounded-[3px]">
                                            <p className="text-base font-semibold leading-none ">
                                                {
                                                    analyticsData?.componentsHTML
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* cardResolve */}



                <div className="w-full ">
                    <div className="flex flex-col  w-full h-[316px] justify-start  p-5 bg-white border rounded-xl border-zinc-200">
                        <div className="flex flex-col  justify-center ">
                            <p className="text-xl font-extrabold leading-none text-zinc-900">
                                License
                            </p>
                            <div className="flex flex-col pt-[24px]  w-full justify-start">
                                <div className="flex flex-col items-start h-[170px] mb-[30px] justify-start">
                                    {analyticsData !== undefined && Object.keys(analyticsData)?.length > 0 ? (
                                        [analyticsData]?.map((item, index) => {
                                            return (
                                                <div
                                                    key={
                                                        index *
                                                        Math.random() *
                                                        1000
                                                    }
                                                    className="flex flex-col items-start justify-start w-full px-2.5 py-3.5 border-b border-zinc-200"
                                                >

                                                    <div className="flex mb-4 items-start justify-between w-full">
                                                        <div className="flex space-x-2 items-start justify-start">

                                                            <p className="text-sm truncate w-24 leading-none text-zinc-600 font-extrabold ">
                                                                ID
                                                            </p>
                                                            <p className="text-sm  w-44 leading-none text-zinc-600 font-extrabold ">
                                                                Name
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {item?.licenses?.map((it, id) => {
                                                        return <div key={id} className="flex space-y-2 items-start justify-between w-full">
                                                            <div className="flex space-x-2 items-start justify-start">

                                                                <p className="text-sm truncate w-24 leading-none text-zinc-600 font-extrabold ">
                                                                    {it?.id}
                                                                </p>
                                                                <p className="text-sm  w-44 leading-none text-zinc-600 font-extrabold ">
                                                                    {it?.type}
                                                                </p>
                                                            </div>
                                                            <Link
                                                                href={`/ticket/${item.id}?rma=${item.rma}`}
                                                            >
                                                                <img
                                                                    className="w-3.5  rounded-full cursor-pointer"
                                                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/latestTickets.svg"
                                                                />
                                                            </Link>
                                                        </div>
                                                    })
                                                    }
                                                </div>
                                            )
                                        })
                                    ) : (
                                        <div className="flex w-full justify-center items-center h-full">
                                            <BlackSpinner
                                                className="flex justify-center"
                                                width={48}
                                                height={48}
                                            />
                                        </div>
                                    )}
                                </div>
                                <button
                                    onClick={() => {
                                        router.push("/license")
                                    }}
                                    className="flex cursor-pointer hover:bg-zinc-800 items-center  justify-center w-full  bg-zinc-900 rounded"
                                >
                                    <p className="text-sm font-semibold leading-none py-[10px] text-white">
                                        View All
                                    </p>
                                </button>
                            </div>
                        </div>

                        <div className="relative w-full flex justify-center max-w-[151px] h-[88px]">
                            <div className="w-36 h-24  bg-white  rounded-lg ">
                                <img
                                    className="max-w-36 w-full h-20 absolute object-cover left-0 top-[74px] rounded-full"
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/GaugeIcon.png"
                                />
                            </div>
                            <div className="mt-1">
                                <ProgressBar
                                    percentage={
                                        analyticsData?.percentageComplete
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default Index
