import React, { useEffect, useState } from "react"
import Input from "../../reusableUi/inputLogin"
import Spinner from "../../reusableUi/spinner"


// for UI kit
import { useCreateLicenseMutation, useCreateUiKitsMutation, useUpdateLicenseMutation, useUpdateUiKitsMutation } from "../../../features/api/dataApiSlice"

function Index({ setaddUIKit, addUiKit, uiKitItem, allLicense, setUiKitItem }) {
    // license info states
    const [name, setName] = useState("")
    const [description, setdescription] = useState("")
    const [loader, setLoader] = useState(false)
    const [licensesId, setLicensesId] = useState("")
    //Create license
    const [createUiKits] = useCreateUiKitsMutation()
    const [Message, setMessage] = useState("")
    //update license
    const [updateUiKits] = useUpdateUiKitsMutation()
    // checking live data in inputs whether its filled or not
    const validateForm = () => {
        if (
            name === "" ||
            licensesId === "" ||
            description === ""
        ) {
            return true
        } else return false
    }
    useEffect(() => {
        validateForm()
    }, [
        licensesId,
        name,
        description,
    ])
    const submitHandler = async (e) => {
        e.preventDefault()
        setLoader(true)
        const data = {
            name: name,
            description: description,
            licensesId: licensesId,
        }
        const res = await createUiKits(data)
        if (res && res?.error) {
            setMessage(res?.error?.data?.message)
            setLoader(false)
            setTimeout(() => {
                setMessage("")
            }, [1000])
        } else {
            setName("")
            setdescription("")
            setMessage("License Created Successfully!")
            setLicensesId('')
            setLoader(false)
            setTimeout(() => {
                setaddUIKit(false)
                setUiKitItem("")
                setMessage("")
            }, [1000])
        }
    }
    const updateHandler = async (e) => {
        setLoader(true)
        e.preventDefault()
        const payload = {
            name: name,
            description: description,
            licensesId: licensesId,
        }
        const res = await updateUiKits({
            payload,
            id: uiKitItem?.id
        })
        if (res && res?.error) {
            setMessage(res?.error?.data?.message)
            setLoader(false)
            setTimeout(() => {
                setMessage("")
            }, [1000])
        } else {
            setMessage("License Updated Successfully!")
            setName("")
            setdescription("")
            setLicensesId('')
            setLoader(false)
            setTimeout(() => {
                setaddUIKit(false)
                setUiKitItem("")
                setMessage("")
            }, [1000])
        }
    }
    useEffect(() => {
        if (uiKitItem) {
            setName(uiKitItem?.name)
            setdescription(uiKitItem?.description)
            setLicensesId(uiKitItem?.licensesId)
        } else {
            setUiKitItem({})
        }
    }, [uiKitItem?.id])

    useEffect(() => {
        if (addUiKit == false) {
            setName("")
            setLicensesId("")
            setdescription("")
            setTimeout(() => {
                setUiKitItem({})
            }, [1000])
        }
    }, [addUiKit])

    return (
        <>
            <main className="bg-white flex xl:flex-nowrap flex-col  flex-wrap pt-0 pb-7 gap-8">
                <div className="flex items-center  justify-end">
                    <button
                        onClick={() => {
                            setTimeout(() => {
                                setUiKit("")
                            }, [1000])
                            setaddUIKit(false)
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
                        Object.keys(uiKitItem).length === 0 ? submitHandler(e) : updateHandler(e)
                    }}
                >
                    <div className="rounded-md w-full">
                        <div className="w-full pb-4 flex flex-col gap-2 border-b border-zinc-200">
                            <p className="text-xl font-extrabold leading-[20px]">
                                {Object.keys(uiKitItem).length === 0
                                    ? "Create Ui Kit"
                                    : "Update Ui Kit"}
                            </p>
                        </div>
                        <div className="mt-5">
                            <Input
                                label="Name"
                                changeHandler={(e) =>
                                    setName(e.target.value)
                                }
                                value={name}
                                placeholder="name"
                                maxLength={40}
                                required={true}
                                type={"text"}
                                autoComplete={"off"}
                                inputHeight={"h-[42px]"}
                            />
                        </div>
                        <div className="mt-5">
                            <Input
                                label="description"
                                changeHandler={(e) =>
                                    setdescription(e.target.value)
                                }
                                value={description}
                                placeholder="description"
                                maxLength={40}
                                required={true}
                                type={"text"}
                                autoComplete={"off"}
                                inputHeight={"h-[42px]"}
                            />
                        </div>
                        <div className="mt-5">
                            <label htmlFor="licensesId" className="pt-5 text-[#27272A] text-sm font-semibold leading-tight tracking-normal mb-2">Select Licenses</label>
                            <select name="type"
                                value={licensesId ? licensesId : ""}
                                onChange={(event) => setLicensesId(event.target.value)}
                                className="mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-500 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow cursor-pointer">
                                <option value="" disabled hidden selected>Select Licenses</option>
                                {
                                    allLicense?.map(item => {
                                        return (
                                            <option value={item.id} key={item.id}>{item.type}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

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
                            type={"submit"}
                            // className={` px-5 py-3 mt-6 rounded-md text-white  transform duration-300  ease-in-out text-sm leading-[150%] font-medium`}
                            className={`${validateForm()
                                ? "bg-zinc-500"
                                : "bg-zinc-900 hover:bg-zinc-700  text-zinc-50"
                                } px-5 py-3 mt-6 rounded-md text-white  transform duration-300  ease-in-out text-sm leading-[150%] font-medium`}
                        >
                            {loader ? (
                                <Spinner height={"20px"} />
                            ) : (
                                (Object.keys(uiKitItem).length === 0 && "Create Ui Kit") ||
                                (Object.keys(uiKitItem).length > 0 && "Update Ui Kit")
                            )}
                        </button>
                        <div
                            onClick={() => {
                                setTimeout(() => {
                                    setUiKitItem({})
                                }, 400)
                                setaddUIKit(false)
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
