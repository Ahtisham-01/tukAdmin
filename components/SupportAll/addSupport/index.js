import React, { useEffect, useState } from "react"
import Input from "../../reusableUi/inputLogin"
import Spinner from "../../reusableUi/spinner"

import { useCreateLicenseMutation, useUpdateTicketMutation } from "../../../features/api/dataApiSlice"

function Index({ setAddSupport, addSupport, setSupportItem, supportItem }) {
    // license info states
    const [status, setStatus] = useState("")
    const [loader, setLoader] = useState(false)
    //Create license
    const [createLicense] = useCreateLicenseMutation()
    const [Message, setMessage] = useState("")
    //update license
    const [updateTicket] = useUpdateTicketMutation()
    const [memberId, setMemberId] = useState(-1)
    const statusList = [
        {
            id: 1,
            name: "open"
        },
        {
            id: 2,
            name: "resolved"
        }
    ]
    // checking live data in inputs whether its filled or not
    const validateForm = () => {
        if (
            status === ""
        ) {
            return true
        } else return false
    }
    useEffect(() => {
        validateForm()
    }, [
        status
    ])

    const submitHandler = async (e) => {
        setLoader(true)
        e.preventDefault()
        const data = {
            status: status,
        }
        const res = await createLicense(data)

        if (res && res?.error) {
            setMessage(res?.error?.data?.message)
            setLoader(false)
            setTimeout(() => {
                setMessage("")
            }, [1000])
        } else {
            setStatus("")
            setMessage("Status Created Successfully!")
            setMemberId(-1)
            setLoader(false)
            setTimeout(() => {
                setAddSupport(false)
                setSupportItem("")
                setMessage("")
            }, [1000])
        }
    }

    const updateHandler = async (e) => {
        setLoader(true)
        e.preventDefault()
        const updateTicketBody = {
            status: status.toLowerCase(),

        }
        const res = await updateTicket({
            updateTicketBody,
            id: memberId

        })

        if (res && res?.error) {
            setMessage(res?.error?.data?.message)
            setLoader(false)
            setTimeout(() => {
                setMessage("")
            }, [1000])
        } else {
            setMessage("Status Updated Successfully!")
            setMemberId(-1)
            setStatus("")
            setLoader(false)
            setTimeout(() => {
                setAddSupport(false)
                setSupportItem("")
                setMessage("")
            }, [1000])
        }
    }

    useEffect(() => {
        if (supportItem) {
            setStatus(supportItem?.status)
            setMemberId(supportItem?.id)
        } else {
            setSupportItem("")
        }
    }, [supportItem?.id])

    useEffect(() => {
        if (addSupport == false) {
            setMemberId(-1)
            setStatus("")
            setTimeout(() => {
                setSupportItem("")
            }, [1000])
        }
    }, [addSupport])

    return (
        <>
            <main className="bg-white flex xl:flex-nowrap flex-col  flex-wrap pt-0 pb-7 gap-8">
                <div className="flex items-center  justify-end">
                    <button
                        onClick={() => {
                            setTimeout(() => {
                                setSupportItem("")
                            }, [1000])
                            setAddSupport(false)
                        }}
                        className=""
                    >
                        <svg
                            className="mt-1 "
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.64645 16.6464C6.45118 16.8417 6.45118 17.1583 6.64645 17.3536C6.84171 17.5488 7.15829 17.5488 7.35355 17.3536L6.64645 16.6464ZM12.3536 12.3536C12.5488 12.1583 12.5488 11.8417 12.3536 11.6464C12.1583 11.4512 11.8417 11.4512 11.6464 11.6464L12.3536 12.3536ZM11.6464 11.6464C11.4512 11.8417 11.4512 12.1583 11.6464 12.3536C11.8417 12.5488 12.1583 12.5488 12.3536 12.3536L11.6464 11.6464ZM17.3536 7.35355C17.5488 7.15829 17.5488 6.84171 17.3536 6.64645C17.1583 6.45118 16.8417 6.45118 16.6464 6.64645L17.3536 7.35355ZM12.3536 11.6464C12.1583 11.4512 11.8417 11.4512 11.6464 11.6464C11.4512 11.8417 11.4512 12.1583 11.6464 12.3536L12.3536 11.6464ZM16.6464 17.3536C16.8417 17.5488 17.1583 17.5488 17.3536 17.3536C17.5488 17.1583 17.5488 16.8417 17.3536 16.6464L16.6464 17.3536ZM11.6464 12.3536C11.8417 12.5488 12.1583 12.5488 12.3536 12.3536C12.5488 12.1583 12.5488 11.8417 12.3536 11.6464L11.6464 12.3536ZM7.35355 6.64645C7.15829 6.45118 6.84171 6.45118 6.64645 6.64645C6.45118 6.84171 6.45118 7.15829 6.64645 7.35355L7.35355 6.64645ZM7.35355 17.3536L12.3536 12.3536L11.6464 11.6464L6.64645 16.6464L7.35355 17.3536ZM12.3536 12.3536L17.3536 7.35355L16.6464 6.64645L11.6464 11.6464L12.3536 12.3536ZM11.6464 12.3536L16.6464 17.3536L17.3536 16.6464L12.3536 11.6464L11.6464 12.3536ZM12.3536 11.6464L7.35355 6.64645L6.64645 7.35355L11.6464 12.3536L12.3536 11.6464Z"
                                fill="#475569"
                            />
                        </svg>
                    </button>
                </div>

                <form
                    onSubmit={(e) => {
                        !supportItem ? submitHandler(e) : updateHandler(e)
                    }}
                >
                    <div className="rounded-md w-full">
                        <div className="w-full pb-4 flex flex-col gap-2 border-b border-zinc-200">
                            <p className="text-xl font-extrabold leading-[20px]">
                                {!supportItem
                                    ? "Create Support"
                                    : "Update Status"}
                            </p>
                        </div>

                        <label htmlFor="status" className="pt-5 text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2"> status</label>

                        <select name="type"
                            onChange={(e) => setStatus(e.target.value)}
                            className="text-gray-600  focus:outline-none focus:border focus:border-indigo-500 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow cursor-pointer">

                            {
                                statusList?.map(item => {
                                    return (
                                        <option
                                            selected={item.name == supportItem.status}
                                            value={item.name} key={item.id}
                                        >
                                            {item.name}
                                        </option>
                                    )
                                })
                            }
                        </select>

                    </div>





                    {/* Divider */}
                    <div className="border-b-[1px] border-zinc-200 my-6" />

                    {/* Message */}
                    <p className="text-zinc-900 text-sm font-semibold text-700">
                        {Message && Message}
                    </p>

                    {/* Add/Update and Cancel Buttons */}
                    <div className="flex flex-col gap-2">
                        <button
                            disabled={validateForm()}
                            status={"submit"}
                            // className={` px-5 py-3 mt-6 rounded-md text-white  transform duration-300  ease-in-out text-sm leading-[150%] font-medium`}
                            className={`${validateForm()
                                ? "bg-zinc-500"
                                : "bg-zinc-900 hover:bg-zinc-700  text-zinc-50"
                                } px-5 py-3 mt-6 rounded-md text-white  transform duration-300  ease-in-out text-sm leading-[150%] font-medium`}
                        >
                            {loader ? (
                                <Spinner height={"20px"} />
                            ) : (
                                (!supportItem && "Create Status") ||
                                (supportItem && "Update Status")
                            )}
                        </button>
                        <div
                            onClick={() => {
                                setTimeout(() => {
                                    setSupportItem("")
                                }, [400])
                                setAddSupport(false)
                            }}
                            className="py-3 border text-center cursor-pointer border-zinc-400 hover:border-1 hover:border-rose-600 hover:text-rose-600 text-black rounded-[6px] font-medium text-sm leading-[150%]"
                        >
                            Cancel
                        </div>
                    </div>
                </form>
            </main>
        </>
    )
}

export default Index
