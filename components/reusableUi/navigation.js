import React, { useEffect, useState } from "react"

import Link from "next/link"
import { useRouter } from "next/router"
// import { logout } from "../../features/authSlice";

const Navigation = ({ nav }) => {
    const router = useRouter()
    const [sideBar, setsideBar] = useState(true)
    // let TicketResolved = (data?.totalResolvedTickets / data?.totalTickets) * 100

    const routes = [
        {
            svg: (
                <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_103_121)">
                        <path
                            d="M8.59663 6H7.40329C6.99644 6 6.66663 6.32982 6.66663 6.73667V13.2633C6.66663 13.6702 6.99644 14 7.40329 14H8.59663C9.00348 14 9.33329 13.6702 9.33329 13.2633V6.73667C9.33329 6.32982 9.00348 6 8.59663 6Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M13.2634 2H12.07C11.6632 2 11.3334 2.32982 11.3334 2.73667V13.2633C11.3334 13.6702 11.6632 14 12.07 14H13.2634C13.6702 14 14 13.6702 14 13.2633V2.73667C14 2.32982 13.6702 2 13.2634 2Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M3.33333 13.9999C4.06971 13.9999 4.66667 13.403 4.66667 12.6666C4.66667 11.9302 4.06971 11.3333 3.33333 11.3333C2.59695 11.3333 2 11.9302 2 12.6666C2 13.403 2.59695 13.9999 3.33333 13.9999Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_103_121">
                            <rect width={16} height={16} fill="currentColor" />
                        </clipPath>
                    </defs>
                </svg>

            ),
            link: `/analytics`,
            linkName: `Analytics`

        },
        {
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx={9} cy={7} r={4} />
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                </svg>
            ),
            link: `/users/adminUsers`,
            linkName: `Admin`,
        },
        {
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx={9} cy={7} r={4} />
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                </svg>
            ),
            link: `/users/allUsers`,
            linkName: `Users`,

        },
        {
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-certificate" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#e5e7eb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5" />
                    <circle cx={6} cy={14} r={3} />
                    <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5" />
                </svg>

            ),
            link: `/license`,
            linkName: `License`,

        },
        {
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-pagekit" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#e5e7eb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12.077 20h-5.077v-16h11v14h-5.077" />
                </svg>
            ),
            link: `/ui-kit`,
            linkName: `UI Kit`
        },
        {
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" /><line x1={9} y1={15} x2={15} y2={9} /><circle cx="9.5" cy="9.5" r=".5" fill="currentColor" /><circle cx="14.5" cy="14.5" r=".5" fill="currentColor" /><path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" /></svg>


            ),
            link: `/createCategory`,
            linkName: `Category`

        },
        {
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" /><line x1={9} y1={15} x2={15} y2={9} /><circle cx="9.5" cy="9.5" r=".5" fill="currentColor" /><circle cx="14.5" cy="14.5" r=".5" fill="currentColor" /><path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" /></svg>


            ),
            link: `/createSubCategory`,
            linkName: `Sub-Category`

        },

        {
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-components" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#e5e7eb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 12l3 3l3 -3l-3 -3z" />
                    <path d="M15 12l3 3l3 -3l-3 -3z" />
                    <path d="M9 6l3 3l3 -3l-3 -3z" />
                    <path d="M9 18l3 3l3 -3l-3 -3z" />
                </svg>

            ),
            link: `/createComponent`,
            linkName: `Components`,

        },
        {
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-pagekit" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#e5e7eb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12.077 20h-5.077v-16h11v14h-5.077" />
                </svg>

            ),
            link: `/templates`,
            linkName: `Templates`,

        },
        {
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layers-union" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#e5e7eb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2v-2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2" />
                </svg>


            ),
            link: `/integration`,
            linkName: `Integration`,

        },
        {
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lifebuoy" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#e5e7eb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx={12} cy={12} r={4} />
                    <circle cx={12} cy={12} r={9} />
                    <line x1={15} y1={15} x2="18.35" y2="18.35" />
                    <line x1={9} y1={15} x2="5.65" y2="18.35" />
                    <line x1="5.65" y1="5.65" x2={9} y2={9} />
                    <line x1="18.35" y1="5.65" x2={15} y2={9} />
                </svg>
            ),
            link: `/support`,
            linkName: `Support`,

        },



    ]

    return (
        <div className="h-screen z-30 relative">
            {/* Vertical navigation starts */}
            {nav && (
                <div className="w-[260px] sm:ml-6 lg:ml-0 fixed sm:fixed bg-zinc-900 border-r sm:h-full flex-col justify-between hidden lg:flex">
                    <div className="overflow-y-auto">
                        <div className="w-full flex justify-center items-center px-4 lg:mt-6 md:mt-4">
                            {" "}
                            {/* h-16 */}
                            <Link href={"/analytics"} passHref>

                                <div
                                    aria-label="logo"
                                    className="flex gap-2 items-center"
                                >
                                    <svg width={86} height={58} viewBox="0 0 86 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M42.4701 4.49449H47.7911V0H42.4701V4.49449Z" fill="#E2E2E2" />
                                        <path d="M47.7914 4.49449H53.1124V0H47.7914V4.49449Z" fill="#FF3565" />
                                        <path d="M42.4701 8.98912H47.7911V4.49463H42.4701V8.98912Z" fill="#FF3565" />
                                        <path d="M47.7914 8.98912H53.1124V4.49463H47.7914V8.98912Z" fill="#E2E2E2" />
                                        <path d="M75.0956 23.7122L86.0001 8.98898H73.2641L65.5874 20.8944V0H55.0228V39.1479H65.5874V32.7501L67.6415 29.9918L72.5134 39.1479H85.485L75.0956 23.7122Z" fill="white" />
                                        <path d="M42.5478 28.2899C42.5421 28.2956 42.5356 28.3021 42.5307 28.3086C42.4859 30.6529 40.5794 32.5423 38.2237 32.5423C35.8403 32.5423 33.9085 30.6105 33.9085 28.2271V0H23.4141V29.1628C23.4141 36.1931 29.8909 39.143 34.7815 39.143C39.7708 39.143 41.1133 37.9766 42.5478 36.7026V39.1479H53.1124V10.7993H42.5478V28.2899Z" fill="#FF3565" />
                                        <path d="M42.4704 28.8132C42.1827 30.9153 40.4058 32.5423 38.2237 32.5423C35.8403 32.5423 33.9085 30.6105 33.9085 28.2271V0H23.4141V29.1628C23.4141 36.1931 29.8909 39.143 34.7815 39.143C39.6811 39.143 41.0644 38.0173 42.4704 36.7702V28.8132Z" fill="white" />
                                        <path d="M42.5479 39.1481H53.1124V38.0273H42.5479V39.1481Z" fill="#FF3565" />
                                        <path d="M42.4701 39.1479H53.1121V10.7993H42.4701V39.1479Z" fill="#FF3565" />
                                        <path d="M0 0V9.76985H10.5059V39.1479H21.6851V9.78371H23.4139V10.3298H33.9084V0H0Z" fill="white" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.6109 49.089C16.6109 49.6367 16.1675 50.0801 15.6198 50.0801C15.085 50.0801 14.6416 49.6367 14.6416 49.089C14.6416 48.5412 15.085 48.1108 15.6198 48.1108C16.1675 48.1108 16.6109 48.5412 16.6109 49.089ZM4.73414 49.9888V57.0574H2.86918V49.9888H0.32605V48.3586H7.26423V49.9888H4.73414ZM11.4745 56.2489C10.9789 56.8749 10.3007 57.2139 9.53129 57.2139C7.95324 57.2139 6.74037 56.0141 6.74037 53.9014C6.74037 51.8538 7.92716 50.6018 9.53129 50.6018C10.2747 50.6018 10.9659 50.9148 11.4745 51.5669V50.7583H13.1438V57.0574H11.4745V56.2489ZM10.0532 55.7402C9.10112 55.7402 8.44903 54.9969 8.44903 53.9013C8.44903 52.8189 9.10112 52.0755 10.0532 52.0755C10.6009 52.0755 11.2008 52.3885 11.4747 52.8058V55.0229C11.2008 55.4403 10.6009 55.7402 10.0532 55.7402ZM16.4546 57.0574V50.7583H14.7983V57.0574H16.4546ZM21.265 56.8096C21.0172 57.0314 20.5608 57.2139 19.8826 57.2139C18.7219 57.2139 18.1089 56.614 18.1089 55.4794V48.3586H19.7652V55.036C19.7652 55.4403 19.9739 55.7402 20.3391 55.7402C20.5869 55.7402 20.8216 55.6489 20.9129 55.5446L21.265 56.8096ZM24.8752 57.0574L26.2055 52.7667L27.5357 57.0574H29.3094L31.2265 50.7583H29.492L28.3182 54.9969L26.9358 50.7583H25.4621L24.0797 54.9969L22.9059 50.7583H21.1844L23.1016 57.0574H24.8752ZM33.8718 49.089C33.8718 49.6367 33.4284 50.0801 32.8807 50.0801C32.346 50.0801 31.9025 49.6367 31.9025 49.089C31.9025 48.5412 32.346 48.1108 32.8807 48.1108C33.4284 48.1108 33.8718 48.5412 33.8718 49.089ZM33.7155 57.0574V50.7583H32.0592V57.0574H33.7155ZM37.0257 52.8059V57.0574H35.3694V50.7583H37.0257V51.5669C37.43 51.0974 38.2125 50.6018 39.2298 50.6018C40.6252 50.6018 41.2904 51.3843 41.2904 52.6102V57.0574H39.621V53.2493C39.621 52.3755 39.1646 52.0755 38.4603 52.0755C37.8082 52.0755 37.3126 52.4407 37.0257 52.8059ZM45.3183 57.2139C46.0878 57.2139 46.766 56.8749 47.2616 56.2489V57.0574H48.9309V48.3586H47.2616V51.5669C46.766 50.9148 46.0617 50.6018 45.3183 50.6018C43.7142 50.6018 42.5274 51.8538 42.5274 53.9014C42.5274 56.0141 43.7403 57.2139 45.3183 57.2139ZM44.2357 53.9013C44.2357 54.9969 44.8878 55.7402 45.8398 55.7402C46.3876 55.7402 46.9875 55.4403 47.2613 55.0229V52.7928C46.9875 52.3755 46.3876 52.0755 45.8398 52.0755C44.8878 52.0755 44.2357 52.8189 44.2357 53.9013ZM57.9127 57.2139C60.5601 57.2139 61.8382 55.7272 61.8382 53.5753V48.3586H59.9472V53.5231C59.9472 54.736 59.256 55.5707 57.9127 55.5707C56.5694 55.5707 55.8651 54.736 55.8651 53.5231V48.3586H53.9871V53.5753C53.9871 55.7272 55.2652 57.2139 57.9127 57.2139ZM65.4225 48.3586V57.0574H63.5706V48.3586H65.4225ZM72.1346 57.0574V55.4403L72.891 54.6317L74.5604 57.0574H76.634L74.0648 53.6144L76.5557 50.7583H74.5212L72.1346 53.5623V48.3586H70.4783V57.0574H72.1346ZM79.2923 49.089C79.2923 49.6367 78.8489 50.0801 78.3012 50.0801C77.7665 50.0801 77.3231 49.6367 77.3231 49.089C77.3231 48.5412 77.7665 48.1108 78.3012 48.1108C78.8489 48.1108 79.2923 48.5412 79.2923 49.089ZM79.136 57.0574V50.7583H77.4797V57.0574H79.136ZM84.2856 56.8096C84.0378 57.0313 83.5944 57.2139 82.9031 57.2139C81.7424 57.2139 81.1295 56.614 81.1295 55.4794V52.2059H80.0861V50.7583H81.1295V49.0368H82.7858V50.7583H84.0639V52.2059H82.7858V55.036C82.7858 55.4403 82.9944 55.7402 83.3596 55.7402C83.6074 55.7402 83.8421 55.6489 83.9334 55.5446L84.2856 56.8096Z" fill="white" />
                                    </svg>



                                </div>

                            </Link>
                        </div>

                        <ul className="mt-12 px-4 space-y-2">
                            {routes.map((item, idx) => {
                                return (
                                    <Link
                                        key={idx * Math.random() * 1000}
                                        href={item.link}
                                    >
                                        <li
                                            className={`${item.link === router.pathname
                                                ? "bg-zinc-700 text-white"
                                                : "text-zinc-400 hover:bg-zinc-700 rounded-lg hover:text-white"
                                                }  max-w-[228px]  rounded-lg  cursor-pointer px-4 py-3`}
                                        >
                                            <p className="flex items-center rounded focus:outline-none  space-x-2">
                                                {item.svg}

                                                <span className="text-base  leading-4 font-normal manrope_font -tracking-[0.015em]">
                                                    {item.linkName}
                                                </span>
                                            </p>
                                            {/* <p className={`flex items-center rounded focus:outline-none pl-6  space-x-2  ${item?.subUnit ? 'block' : "hidden"}`}>
                                                {item.subUnit.map((sub, idx) => {
                                                    {
                                                        console.log(sub
                                                        )
                                                    }
                                                    return <Link key={idx} href={sub.link} className="text-base   font-normal manrope_font">
                                                        <p>
                                                            {sub.linkName}
                                                        </p>
                                                    </Link>

                                                })}
                                            </p> */}

                                        </li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>

                    {/* {Resolved bar} */}
                    <div className=" px-8 pb-11">
                        {/* <div className="relative bg-[#27272A] rounded-xl w-[180x] h-[180px]">
                            <img
                                className="absolute top-[-68px] left-[14px] right-0"
                                src="./images/manPic.svg"
                            />

                            <div className="px-4 pt-24">
                                <p className="text-white text-lg leading-[18px] font-semibold manrope_font -tracking-[0.03em] pb-4 pl-1">
                                    Tickets Resolved
                                </p>

                                <div>
                                    <div className="w-full bg-zinc-200 rounded-full h-1.5 mb-2 dark:bg-zinc-700">
                                        <div
                                            className={` h-1.5 rounded-full ${
                                                (data?.percentageComplete <=
                                                    10 &&
                                                    "bg-[#F43F5E] w-[10%]") ||
                                                (data?.percentageComplete <=
                                                    25 &&
                                                    "bg-[#F59E0B] w-[25%]") ||
                                                (data?.percentageComplete <=
                                                    50 &&
                                                    "bg-[#EAB308] w-[50%]") ||
                                                (data?.percentageComplete <=
                                                    75 &&
                                                    "bg-[#3B82F6] w-[75%]") ||
                                                (data?.percentageComplete <=
                                                    100 &&
                                                    "bg-[#10B981] w-[100%]")
                                            } `}
                                        />
                                      
                                    </div>
                                </div>

                                <div className="flex justify-between items-center pb-6">
                                    <p
                                        className={`text-zinc-400 text-xs leading-3 font-normal manrope_font `}
                                    >
                                        {(data?.percentageComplete <= 10 &&
                                            "Attention required") ||
                                            (data?.percentageComplete <= 25 &&
                                                "Below average") ||
                                            (data?.percentageComplete <= 50 &&
                                                "Satisfactory") ||
                                            (data?.percentageComplete <= 75 &&
                                                "Looks Good") ||
                                            (data?.percentageComplete <= 100 &&
                                                "Excellent!")}
                                    </p>
                                    <p className="text-white text-xs leading-3 font-semibold manrope_font">
                                        {data?.percentageComplete}%
                                    </p>
                                </div>
                            </div>
                        </div> */}
                        <div className="w-full max-w-[288] min-w-[288] mt-[24px] bg-zinc-700 h-[2px]"></div>
                        <button
                            onClick={() => {
                                localStorage.clear()
                                router.push("/")
                            }}
                            className={` text-zinc-400 w-full hover:bg-zinc-700 hover:text-white cursor-pointer font-bold py-3 px-4 gap-2 mt-[24px] rounded-lg inline-flex items-center`}
                        >
                            <svg
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="none">
                                    <path
                                        d="M9.33333 5.33335V4.00002C9.33333 3.6464 9.19286 3.30726 8.94281 3.05721C8.69276 2.80716 8.35362 2.66669 8 2.66669H3.33333C2.97971 2.66669 2.64057 2.80716 2.39052 3.05721C2.14048 3.30726 2 3.6464 2 4.00002V12C2 12.3536 2.14048 12.6928 2.39052 12.9428C2.64057 13.1929 2.97971 13.3334 3.33333 13.3334H8C8.35362 13.3334 8.69276 13.1929 8.94281 12.9428C9.19286 12.6928 9.33333 12.3536 9.33333 12V10.6667"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M4.66675 8H14.0001L12.0001 6M12.0001 10L14.0001 8"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_612_608">
                                        <rect
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            )
            }

            <nav className="sticky top-0 ...">
                {true && (
                    <div
                        className={
                            sideBar
                                ? "fixed w-full h-full transform -translate-x-full transition duration-500 z-40 lg:hidden"
                                : "fixed w-full h-full transform translate-x-0 transition duration-500 z-40 lg:hidden"
                        }
                    >
                        <div className="w-full  z-40 fixed   top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
                            <div className="h-full ">
                                <div className="flex flex-col justify-between h-full w-full">
                                    <div className="overflow-y-auto">
                                        <div className="w-full flex justify-center items-center px-4 lg:mt-6 md:mt-4">
                                            {" "}
                                            <Link href={"/"} passHref>

                                                <div
                                                    aria-label="logo"
                                                    className="flex gap-2 items-center"
                                                >
                                                    <svg
                                                        width={80}
                                                        height={64}
                                                        viewBox="0 0 80 64"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M68.7558 10.6254C67.3721 11.4158 65.1464 12.001 61.9035 12.427C59.9088 12.6892 56.8331 12.7976 49.2532 12.8731C40.454 12.9608 39.0311 13.0209 37.5312 13.3684C34.2731 14.123 31.5589 15.7317 29.6416 18.0444C28.3329 19.623 28.1404 19.991 26.776 23.5223L25.6723 26.3794L23.6284 26.5282C21.0132 26.7187 19.4795 27.0378 18.134 27.6719C16.0677 28.6456 14.7456 30.4512 14.2511 32.9743C13.9256 34.6348 14.3241 36.1554 15.4221 37.443C16.2657 38.4322 16.5731 38.5549 16.5731 37.9029C16.5731 37.0714 17.1717 36.2803 18.0937 35.8934C18.8656 35.5694 19.8382 35.5 24.7459 35.4196C30.2855 35.3288 30.4887 35.3396 30.3538 35.7199C30.1472 36.3017 29.623 36.8538 28.9076 37.2434C28.425 37.5065 27.4533 37.6144 24.8138 37.698L21.3528 37.8076L20.0518 41.2996C17.3895 48.4456 15.734 50.6959 11.4898 52.9376L10 53.7246L10.8092 53.8588C12.3441 54.1134 18.1677 54.0042 19.9716 53.687C25.7621 52.669 29.9239 49.8333 32.1668 45.3776C32.532 44.6523 33.5623 42.1286 34.4565 39.7693L36.0823 35.4797L42.6149 35.3571C49.8792 35.2206 50.6344 35.0991 53.7672 33.5621C56.6054 32.1693 59.5468 29.4439 60.7663 27.0767L61.0709 26.4852H50.3129C42.3195 26.4852 39.5546 26.4224 39.5546 26.2408C39.5546 26.1064 39.9358 25.6323 40.4017 25.1875C41.6455 23.9998 42.7245 23.7676 47.6719 23.6227C52.2066 23.49 55.1792 23.1408 57.6159 22.4544C62.9704 20.9463 66.6624 18.2038 68.6204 14.2801C69.285 12.9483 70.2169 9.95936 69.9546 10.0004C69.8751 10.0129 69.3356 10.2942 68.7558 10.6254ZM20.9931 29.6504C21.4985 29.9715 21.017 30.9744 20.1538 31.3992C18.6372 32.1452 17.9149 31.2432 19.087 30.0667C19.7072 29.4441 20.422 29.2879 20.9931 29.6504Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </div>

                                            </Link>
                                        </div>

                                        <ul className="mt-12 px-4 space-y-2">
                                            <Link href={"/"} passHref>
                                                <li className="max-w-[228px] hover:bg-zinc-700 rounded-lg hover:text-white text-zinc-300 cursor-pointer px-4 py-3">
                                                    <span className="flex items-center rounded focus:outline-none  space-x-2">
                                                        <svg
                                                            width={16}
                                                            height={16}
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_103_121)">
                                                                <path
                                                                    d="M8.59663 6H7.40329C6.99644 6 6.66663 6.32982 6.66663 6.73667V13.2633C6.66663 13.6702 6.99644 14 7.40329 14H8.59663C9.00348 14 9.33329 13.6702 9.33329 13.2633V6.73667C9.33329 6.32982 9.00348 6 8.59663 6Z"
                                                                    stroke="white"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M13.2634 2H12.07C11.6632 2 11.3334 2.32982 11.3334 2.73667V13.2633C11.3334 13.6702 11.6632 14 12.07 14H13.2634C13.6702 14 14 13.6702 14 13.2633V2.73667C14 2.32982 13.6702 2 13.2634 2Z"
                                                                    stroke="white"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M3.33333 13.9999C4.06971 13.9999 4.66667 13.403 4.66667 12.6666C4.66667 11.9302 4.06971 11.3333 3.33333 11.3333C2.59695 11.3333 2 11.9302 2 12.6666C2 13.403 2.59695 13.9999 3.33333 13.9999Z"
                                                                    stroke="white"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_103_121">
                                                                    <rect
                                                                        width={
                                                                            16
                                                                        }
                                                                        height={
                                                                            16
                                                                        }
                                                                        fill="white"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                        <span className="text-base  leading-4 font-normal manrope_font -tracking-[0.015em]">
                                                            Analytics
                                                        </span>
                                                    </span>
                                                </li>
                                            </Link>

                                            <Link href={"/"} passHref>
                                                <li className="max-w-[228px]  hover:bg-zinc-700 rounded-lg hover:text-white text-zinc-300 cursor-pointer px-4 py-3">
                                                    <span className="flex items-center rounded focus:outline-none  space-x-2">
                                                        <svg
                                                            width={16}
                                                            height={16}
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_103_129)">
                                                                <path
                                                                    d="M10 3.33325V4.66659"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M10 7.33325V8.66659"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M10 11.3333V12.6666"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M3.33333 3.33325H12.6667C13.0203 3.33325 13.3594 3.47373 13.6095 3.72378C13.8595 3.97382 14 4.31296 14 4.66659V6.66659C13.6464 6.66659 13.3072 6.80706 13.0572 7.05711C12.8071 7.30716 12.6667 7.6463 12.6667 7.99992C12.6667 8.35354 12.8071 8.69268 13.0572 8.94273C13.3072 9.19278 13.6464 9.33325 14 9.33325V11.3333C14 11.6869 13.8595 12.026 13.6095 12.2761C13.3594 12.5261 13.0203 12.6666 12.6667 12.6666H3.33333C2.97971 12.6666 2.64057 12.5261 2.39052 12.2761C2.14048 12.026 2 11.6869 2 11.3333V9.33325C2.35362 9.33325 2.69276 9.19278 2.94281 8.94273C3.19286 8.69268 3.33333 8.35354 3.33333 7.99992C3.33333 7.6463 3.19286 7.30716 2.94281 7.05711C2.69276 6.80706 2.35362 6.66659 2 6.66659V4.66659C2 4.31296 2.14048 3.97382 2.39052 3.72378C2.64057 3.47373 2.97971 3.33325 3.33333 3.33325"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_103_129">
                                                                    <rect
                                                                        width={
                                                                            16
                                                                        }
                                                                        height={
                                                                            16
                                                                        }
                                                                        fill="white"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                        <span className="text-base  leading-4 font-normal manrope_font -tracking-[0.015em]">
                                                            Tickets
                                                        </span>
                                                    </span>
                                                </li>
                                            </Link>

                                            <Link href={"/"} passHref>
                                                <li className="max-w-[228px]  hover:bg-zinc-700 rounded-lg hover:text-white text-zinc-300 cursor-pointer px-4 py-3">
                                                    <span className="flex items-center rounded focus:outline-none  space-x-2">
                                                        <svg
                                                            width={16}
                                                            height={16}
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_103_138)">
                                                                <path
                                                                    d="M6.00004 7.33333C7.4728 7.33333 8.66671 6.13943 8.66671 4.66667C8.66671 3.19391 7.4728 2 6.00004 2C4.52728 2 3.33337 3.19391 3.33337 4.66667C3.33337 6.13943 4.52728 7.33333 6.00004 7.33333Z"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M2 14V12.6667C2 11.9594 2.28095 11.2811 2.78105 10.781C3.28115 10.281 3.95942 10 4.66667 10H7.33333C8.04058 10 8.71885 10.281 9.21895 10.781C9.71905 11.2811 10 11.9594 10 12.6667V14"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M10.6666 2.08667C11.2402 2.23354 11.7487 2.56714 12.1117 3.03488C12.4748 3.50262 12.6719 4.07789 12.6719 4.67C12.6719 5.26212 12.4748 5.83739 12.1117 6.30513C11.7487 6.77287 11.2402 7.10647 10.6666 7.25334"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M14 14.0001V12.6668C13.9966 12.0782 13.7986 11.5073 13.4368 11.043C13.0751 10.5788 12.5699 10.2472 12 10.1001"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_103_138">
                                                                    <rect
                                                                        width={
                                                                            16
                                                                        }
                                                                        height={
                                                                            16
                                                                        }
                                                                        fill="white"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                        <span className="text-base  leading-4 font-normal manrope_font -tracking-[0.015em] ">
                                                            Team
                                                        </span>
                                                    </span>
                                                </li>
                                            </Link>

                                            <Link href={"/"} passHref>
                                                <li className="max-w-[228px]  hover:bg-zinc-700 rounded-lg hover:text-white text-zinc-300 cursor-pointer px-4 py-3">
                                                    <span className="flex items-center rounded focus:outline-none  space-x-2">
                                                        <svg
                                                            width={16}
                                                            height={16}
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_103_147)">
                                                                <path
                                                                    d="M6.88333 2.878C7.16733 1.70733 8.83267 1.70733 9.11667 2.878C9.15928 3.05387 9.24281 3.21719 9.36047 3.35467C9.47813 3.49215 9.62659 3.5999 9.79377 3.66916C9.96094 3.73843 10.1421 3.76723 10.3225 3.75325C10.5029 3.73926 10.6775 3.68287 10.832 3.58867C11.8607 2.962 13.0387 4.13933 12.412 5.16867C12.3179 5.3231 12.2616 5.49756 12.2477 5.67785C12.2337 5.85814 12.2625 6.03918 12.3317 6.20625C12.4009 6.37333 12.5085 6.52172 12.6458 6.63937C12.7831 6.75702 12.9463 6.8406 13.122 6.88333C14.2927 7.16733 14.2927 8.83267 13.122 9.11667C12.9461 9.15928 12.7828 9.24281 12.6453 9.36047C12.5079 9.47813 12.4001 9.62659 12.3308 9.79377C12.2616 9.96094 12.2328 10.1421 12.2468 10.3225C12.2607 10.5029 12.3171 10.6775 12.4113 10.832C13.038 11.8607 11.8607 13.0387 10.8313 12.412C10.6769 12.3179 10.5024 12.2616 10.3222 12.2477C10.1419 12.2337 9.96082 12.2625 9.79375 12.3317C9.62667 12.4009 9.47828 12.5085 9.36063 12.6458C9.24298 12.7831 9.1594 12.9463 9.11667 13.122C8.83267 14.2927 7.16733 14.2927 6.88333 13.122C6.84072 12.9461 6.75719 12.7828 6.63953 12.6453C6.52187 12.5079 6.37341 12.4001 6.20623 12.3308C6.03906 12.2616 5.85789 12.2328 5.67748 12.2468C5.49706 12.2607 5.3225 12.3171 5.168 12.4113C4.13933 13.038 2.96133 11.8607 3.588 10.8313C3.68207 10.6769 3.73837 10.5024 3.75232 10.3222C3.76628 10.1419 3.7375 9.96082 3.66831 9.79375C3.59913 9.62667 3.49151 9.47828 3.35418 9.36063C3.21686 9.24298 3.05371 9.1594 2.878 9.11667C1.70733 8.83267 1.70733 7.16733 2.878 6.88333C3.05387 6.84072 3.21719 6.75719 3.35467 6.63953C3.49215 6.52187 3.5999 6.37341 3.66916 6.20623C3.73843 6.03906 3.76723 5.85789 3.75325 5.67748C3.73926 5.49706 3.68287 5.3225 3.58867 5.168C2.962 4.13933 4.13933 2.96133 5.16867 3.588C5.83533 3.99333 6.69933 3.63467 6.88333 2.878Z"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_103_147">
                                                                    <rect
                                                                        width={
                                                                            16
                                                                        }
                                                                        height={
                                                                            16
                                                                        }
                                                                        fill="white"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                        <span className="text-base  leading-4 font-normal manrope_font -tracking-[0.015em]">
                                                            Settings
                                                        </span>
                                                    </span>
                                                </li>
                                            </Link>

                                            <Link href={"/"} passHref>
                                                <li className="max-w-[228px]  hover:bg-zinc-700 rounded-lg hover:text-white text-zinc-300 cursor-pointer px-4 py-3">
                                                    <span className="flex items-center rounded focus:outline-none  space-x-2">
                                                        <svg
                                                            width={16}
                                                            height={16}
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_103_147)">
                                                                <path
                                                                    d="M6.88333 2.878C7.16733 1.70733 8.83267 1.70733 9.11667 2.878C9.15928 3.05387 9.24281 3.21719 9.36047 3.35467C9.47813 3.49215 9.62659 3.5999 9.79377 3.66916C9.96094 3.73843 10.1421 3.76723 10.3225 3.75325C10.5029 3.73926 10.6775 3.68287 10.832 3.58867C11.8607 2.962 13.0387 4.13933 12.412 5.16867C12.3179 5.3231 12.2616 5.49756 12.2477 5.67785C12.2337 5.85814 12.2625 6.03918 12.3317 6.20625C12.4009 6.37333 12.5085 6.52172 12.6458 6.63937C12.7831 6.75702 12.9463 6.8406 13.122 6.88333C14.2927 7.16733 14.2927 8.83267 13.122 9.11667C12.9461 9.15928 12.7828 9.24281 12.6453 9.36047C12.5079 9.47813 12.4001 9.62659 12.3308 9.79377C12.2616 9.96094 12.2328 10.1421 12.2468 10.3225C12.2607 10.5029 12.3171 10.6775 12.4113 10.832C13.038 11.8607 11.8607 13.0387 10.8313 12.412C10.6769 12.3179 10.5024 12.2616 10.3222 12.2477C10.1419 12.2337 9.96082 12.2625 9.79375 12.3317C9.62667 12.4009 9.47828 12.5085 9.36063 12.6458C9.24298 12.7831 9.1594 12.9463 9.11667 13.122C8.83267 14.2927 7.16733 14.2927 6.88333 13.122C6.84072 12.9461 6.75719 12.7828 6.63953 12.6453C6.52187 12.5079 6.37341 12.4001 6.20623 12.3308C6.03906 12.2616 5.85789 12.2328 5.67748 12.2468C5.49706 12.2607 5.3225 12.3171 5.168 12.4113C4.13933 13.038 2.96133 11.8607 3.588 10.8313C3.68207 10.6769 3.73837 10.5024 3.75232 10.3222C3.76628 10.1419 3.7375 9.96082 3.66831 9.79375C3.59913 9.62667 3.49151 9.47828 3.35418 9.36063C3.21686 9.24298 3.05371 9.1594 2.878 9.11667C1.70733 8.83267 1.70733 7.16733 2.878 6.88333C3.05387 6.84072 3.21719 6.75719 3.35467 6.63953C3.49215 6.52187 3.5999 6.37341 3.66916 6.20623C3.73843 6.03906 3.76723 5.85789 3.75325 5.67748C3.73926 5.49706 3.68287 5.3225 3.58867 5.168C2.962 4.13933 4.13933 2.96133 5.16867 3.588C5.83533 3.99333 6.69933 3.63467 6.88333 2.878Z"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_103_147">
                                                                    <rect
                                                                        width={
                                                                            16
                                                                        }
                                                                        height={
                                                                            16
                                                                        }
                                                                        fill="white"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                        <span className="text-base  leading-4 font-normal manrope_font -tracking-[0.015em]">
                                                            Customers
                                                        </span>
                                                    </span>
                                                </li>
                                            </Link>

                                            <Link href={"/"} passHref>
                                                <li className="max-w-[228px]  hover:bg-zinc-700 rounded-lg hover:text-white text-zinc-300 cursor-pointer px-4 py-3">
                                                    <span className="flex items-center rounded focus:outline-none  space-x-2">
                                                        <svg
                                                            width={16}
                                                            height={16}
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_103_147)">
                                                                <path
                                                                    d="M6.88333 2.878C7.16733 1.70733 8.83267 1.70733 9.11667 2.878C9.15928 3.05387 9.24281 3.21719 9.36047 3.35467C9.47813 3.49215 9.62659 3.5999 9.79377 3.66916C9.96094 3.73843 10.1421 3.76723 10.3225 3.75325C10.5029 3.73926 10.6775 3.68287 10.832 3.58867C11.8607 2.962 13.0387 4.13933 12.412 5.16867C12.3179 5.3231 12.2616 5.49756 12.2477 5.67785C12.2337 5.85814 12.2625 6.03918 12.3317 6.20625C12.4009 6.37333 12.5085 6.52172 12.6458 6.63937C12.7831 6.75702 12.9463 6.8406 13.122 6.88333C14.2927 7.16733 14.2927 8.83267 13.122 9.11667C12.9461 9.15928 12.7828 9.24281 12.6453 9.36047C12.5079 9.47813 12.4001 9.62659 12.3308 9.79377C12.2616 9.96094 12.2328 10.1421 12.2468 10.3225C12.2607 10.5029 12.3171 10.6775 12.4113 10.832C13.038 11.8607 11.8607 13.0387 10.8313 12.412C10.6769 12.3179 10.5024 12.2616 10.3222 12.2477C10.1419 12.2337 9.96082 12.2625 9.79375 12.3317C9.62667 12.4009 9.47828 12.5085 9.36063 12.6458C9.24298 12.7831 9.1594 12.9463 9.11667 13.122C8.83267 14.2927 7.16733 14.2927 6.88333 13.122C6.84072 12.9461 6.75719 12.7828 6.63953 12.6453C6.52187 12.5079 6.37341 12.4001 6.20623 12.3308C6.03906 12.2616 5.85789 12.2328 5.67748 12.2468C5.49706 12.2607 5.3225 12.3171 5.168 12.4113C4.13933 13.038 2.96133 11.8607 3.588 10.8313C3.68207 10.6769 3.73837 10.5024 3.75232 10.3222C3.76628 10.1419 3.7375 9.96082 3.66831 9.79375C3.59913 9.62667 3.49151 9.47828 3.35418 9.36063C3.21686 9.24298 3.05371 9.1594 2.878 9.11667C1.70733 8.83267 1.70733 7.16733 2.878 6.88333C3.05387 6.84072 3.21719 6.75719 3.35467 6.63953C3.49215 6.52187 3.5999 6.37341 3.66916 6.20623C3.73843 6.03906 3.76723 5.85789 3.75325 5.67748C3.73926 5.49706 3.68287 5.3225 3.58867 5.168C2.962 4.13933 4.13933 2.96133 5.16867 3.588C5.83533 3.99333 6.69933 3.63467 6.88333 2.878Z"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                                                                    stroke="white"
                                                                    strokeOpacity="0.6"
                                                                    strokeWidth="0.75"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_103_147">
                                                                    <rect
                                                                        width={
                                                                            16
                                                                        }
                                                                        height={
                                                                            16
                                                                        }
                                                                        fill="white"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                        <span className="text-base  leading-4 font-normal manrope_font -tracking-[0.015em]">
                                                            Hardware
                                                        </span>
                                                    </span>
                                                </li>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
            {/* Vertical navigation ends */}
        </div >
    )
}

export default Navigation
