import Link from "next/link"
import React from "react"
const Index=({ title })=> {
    return (
        <>
            <div className="flex justify-between sticky top-0 z-[10] items-center border-b bg-white border-[#E4E4E7] py-5 px-6">
                {
                    title !== "page"
                        ?
                        <p className="text-black text-2xl leading-6 font-extrabold manrope_font -tracking-[0.03em]">
                            {title}
                        </p>
                        :
                        <div className="flex items-center gap-4">
                            <Link href={"/tickets"} passHref>
                                <button className="flex items-center gap-2 leading-5 text-zinc-900 font-medium">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-backspace"
                                        width={22}
                                        height={22}
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M20 6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-11l-5 -5a1.5 1.5 0 0 1 0 -2l5 -5z" />
                                        <path d="M12 10l4 4m0 -4l-4 4" />
                                    </svg>
                                    Back
                                </button>
                            </Link>
                        </div>
                }
               
            </div>
        </>
    )
}
export default Index
