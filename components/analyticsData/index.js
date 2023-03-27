import dynamic from "next/dynamic"
import React, { useState } from "react"
// import Layout from "../layout"
const Layout = dynamic(() => import('../layout'), {
    ssr: false,
    // loading: () => <h1>loading</h1>
})
import AnalyticsCard from "./analyticsCard"
import AnalyticsCardStats from "./analyticsCardStats"
import Header from "../header"
import BlackSpinner from "../reusableUi/blackSpinner"
import { useGetAnalyticsReportQuery } from "../..//features/api/dataApiSlice"

const Index = () => {
    const { data: analytics } = useGetAnalyticsReportQuery()
    const cardData1 = [
        {
            number: "0",
            // url: "./images/ticket-outline.svg",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-report-analytics" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#e5e7eb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                    <rect x={9} y={3} width={6} height={4} rx={2} />
                    <path d="M9 17v-5" />
                    <path d="M12 17v-1" />
                    <path d="M15 17v-3" />
                </svg>

            ),
            title: "Sales"
        },
        {
            number: "0",
            // url: "./images/speedometer-outline.svg",
            svg: (
                <svg width={32} height={32} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_679_2984)">
                        <path d="M4.66665 4.66667C5.40303 4.66667 5.99998 4.06971 5.99998 3.33333C5.99998 2.59695 5.40303 2 4.66665 2C3.93027 2 3.33331 2.59695 3.33331 3.33333C3.33331 4.06971 3.93027 4.66667 4.66665 4.66667Z" stroke="#FAFAFA" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.33335 14.6663V11.333L2.66669 10.6663V7.99967C2.66669 7.82286 2.73693 7.65329 2.86195 7.52827C2.98697 7.40325 3.15654 7.33301 3.33335 7.33301H6.00002C6.17683 7.33301 6.3464 7.40325 6.47142 7.52827C6.59645 7.65329 6.66669 7.82286 6.66669 7.99967V10.6663L6.00002 11.333V14.6663" stroke="#FAFAFA" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11.3333 4.66667C12.0697 4.66667 12.6667 4.06971 12.6667 3.33333C12.6667 2.59695 12.0697 2 11.3333 2C10.597 2 10 2.59695 10 3.33333C10 4.06971 10.597 4.66667 11.3333 4.66667Z" stroke="#FAFAFA" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 14.6663V11.9997H8.66669L10 7.99967C10 7.82286 10.0703 7.65329 10.1953 7.52827C10.3203 7.40325 10.4899 7.33301 10.6667 7.33301H12C12.1768 7.33301 12.3464 7.40325 12.4714 7.52827C12.5964 7.65329 12.6667 7.82286 12.6667 7.99967L14 11.9997H12.6667V14.6663" stroke="#FAFAFA" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_679_2984">
                            <rect width={16} height={16} fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            ),
            title: "Users"
        },

        {
            number: "0",
            // url: "./images/speedometer-outline.svg",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-components" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#e5e7eb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 12l3 3l3 -3l-3 -3z" />
                    <path d="M15 12l3 3l3 -3l-3 -3z" />
                    <path d="M9 6l3 3l3 -3l-3 -3z" />
                    <path d="M9 18l3 3l3 -3l-3 -3z" />
                </svg>
            ),
            title: "Components"
        },
        {
            number: "0",
            // url: "./images/speedometer-outline.svg",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-pagekit" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#e5e7eb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12.077 20h-5.077v-16h11v14h-5.077" />
                </svg>

            ),
            title: "Ui Kits"
        },
        {
            number: "0",
            // url: "./images/ticket-outline.svg",
            svg: (
                <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M17.1585 6.84375C16.7686 6.45366 16.5403 5.93075 16.5192 5.37958C16.4982 4.8284 16.686 4.28961 17.0451 3.87094C17.0748 3.83612 17.0902 3.79136 17.0883 3.74563C17.0864 3.69991 17.0673 3.65659 17.0348 3.62438L14.9662 1.55344C14.932 1.51926 14.8856 1.50006 14.8373 1.50006C14.7889 1.50006 14.7426 1.51926 14.7084 1.55344L11.4112 4.85063C11.2895 4.97225 11.1979 5.12054 11.1435 5.28375V5.28375C11.0894 5.44733 10.9978 5.59605 10.8762 5.7181C10.7546 5.84015 10.6062 5.93217 10.4428 5.98688V5.98688C10.2794 6.0413 10.131 6.13292 10.0092 6.25453L1.55338 14.7084C1.5192 14.7426 1.5 14.789 1.5 14.8373C1.5 14.8857 1.5192 14.9321 1.55338 14.9663L3.62197 17.0348C3.65419 17.0673 3.6975 17.0865 3.74323 17.0884C3.78895 17.0903 3.83371 17.0749 3.86853 17.0452C4.28711 16.6857 4.82603 16.4976 5.37739 16.5185C5.92875 16.5394 6.45187 16.7678 6.84203 17.1579C7.23218 17.5481 7.46057 18.0712 7.48148 18.6226C7.50239 19.1739 7.31427 19.7128 6.95478 20.1314C6.92508 20.1662 6.90964 20.211 6.91155 20.2567C6.91347 20.3024 6.93259 20.3458 6.9651 20.378L9.03369 22.4466C9.06788 22.4807 9.11425 22.4999 9.1626 22.4999C9.21094 22.4999 9.25731 22.4807 9.2915 22.4466L17.7478 13.9908C17.8694 13.8689 17.961 13.7205 18.0154 13.5572V13.5572C18.0696 13.3936 18.1611 13.2449 18.2827 13.1228C18.4044 13.0008 18.5528 12.9088 18.7162 12.8541V12.8541C18.8794 12.7997 19.0277 12.7081 19.1493 12.5864L22.4465 9.28922C22.4807 9.25503 22.4999 9.20866 22.4999 9.16031C22.4999 9.11197 22.4807 9.0656 22.4465 9.03141L20.3779 6.96281C20.3457 6.93031 20.3024 6.91118 20.2567 6.90927C20.2109 6.90736 20.1662 6.9228 20.1313 6.9525C19.7133 7.31221 19.1748 7.50084 18.6236 7.48067C18.0725 7.46051 17.5492 7.23304 17.1585 6.84375V6.84375Z"
                        stroke="#FAFAFA"
                        strokeMiterlimit={10}
                    />
                    <path
                        d="M11.7422 6.58311L10.9683 5.8092M13.8056 8.64655L13.2895 8.13092M15.869 10.7105L15.3534 10.1944M18.1908 13.0317L17.4169 12.2578"
                        stroke="#FAFAFA"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                </svg>
            ),
            title: "Total Tickets"
        },
        {
            number: "0",
            // url: "./images/speedometer-outline.svg",
            svg: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-checks"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#FAFAFA"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 12l5 5l10 -10" />
                    <path d="M2 12l5 5m5 -5l5 -5" />
                </svg>
            ),
            title: "Resolved"
        },
        {
            number: "0",
            // url: "./images/speedometer-outline.svg",
            svg: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chart-arcs-3"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#FAFAFA"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="1" />
                    <path d="M7 12a5 5 0 1 0 5 -5" />
                    <path d="M6.29 18.957a9 9 0 1 0 5.71 -15.957" />
                </svg>
            ),
            title: "In-progress"
        },

    ]
    return (
        <>
            <Layout nav={true}>
                {/* {isLoading ? (
                    <div className="flex w-full h-screen my-auto items-center justify-center">
                        <BlackSpinner width="60" height="60" />
                    </div>
                ) :
                
                ( */}
                <main>
                    <Header
                        title={"Analytics"}

                    />
                    <div className="w-full mx-auto px-2 max-w-[1124px]">
                        <div className=" mt-[24px] ">
                            <div className="inline-flex items-center w-full background-dashboard mb-[28px]  justify-start  h-[96px] p-5 rounded-xl">
                                <div className="inline-flex flex-col space-y-4 items-start justify-start">
                                    <p className="text-2xl font-extrabold leading-normal text-white">
                                        Welcome Back
                                    </p>
                                    <p className="text-base font-medium leading-none f-f-m text-gray-50 text-opacity-60">
                                        Get an Overview of all the stats
                                        from this page
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div></div>
                        <div className=" grid grid-cols-4 gap-5 2xl:justify-between  ">
                            <AnalyticsCard
                                cardData1={cardData1}
                                analyticsData={analytics}
                            // analyticsData={data}
                            />
                        </div>
                        <div className="">
                            <AnalyticsCardStats
                                analyticsData={analytics}
                            />
                        </div>

                    </div>
                </main>
                {/* )} */}
            </Layout>
        </>
    )
}

export default Index
