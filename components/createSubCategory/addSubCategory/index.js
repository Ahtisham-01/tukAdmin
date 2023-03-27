import React, { useEffect, useState } from "react"
import Input from "../../reusableUi/inputLogin"
import Spinner from "../../reusableUi/spinner"

import { useCreateSubCategoryMutation, useUpdateSubCategoryMutation, } from "../../../features/api/dataApiSlice"

function Index({ setAddSubCategory, addSubCategory, allCategory, setSubcategoryItem, subcategoryItem }) {
    // license info states
    const [name, setName] = useState("")
    const [categoryId, setCategoryId] = useState("")
    const [description, setDescription] = useState("")
    const [loader, setLoader] = useState(false)
    //Create license
    const [Message, setMessage] = useState("")
    const [createSubcategory] = useCreateSubCategoryMutation()
    const [updateSubcategory] = useUpdateSubCategoryMutation()
    //update license
    // checking live data in inputs whether its filled or not
    const validateForm = () => {
        if (
            name === "" ||
            categoryId === "" ||
            description === ""
        ) {
            return true
        } else return false
    }
    useEffect(() => {
        validateForm()
    }, [
        categoryId,
        name,
        description
    ])

    const submitHandler = async (e) => {
        setLoader(true)
        e.preventDefault()
        const data = {
            name: name,
            categoryId: categoryId,
            description: description,
        }
        const res = await createSubcategory(data)

        if (res && res?.error) {
            setMessage(res?.error?.data?.message)
            setLoader(false)
            setAddSubCategory(false)
            setTimeout(() => {
                setMessage("")
            }, [1000])
        } else {
            setName("")
            setCategoryId("")
            setDescription("")
            setMessage("SubCategory Created Successfully!")
            setLoader(false)
            setTimeout(() => {
                setMessage("")
            }, [1000])
        }
    }

    const updateHandler = async (e) => {
        setLoader(true)
        e.preventDefault()
        const updateSubCategoryBody = {
            name: name,
            categoryId: categoryId,
            description: description,
        }
        const res = await updateSubcategory({
            updateSubCategoryBody,
            id: subcategoryItem?.id

        })

        if (res && res?.error) {
            setMessage(res?.error?.data?.message)
            setLoader(false)
            setTimeout(() => {
                setMessage("")
            }, [1000])
        } else {
            setMessage("Subcategory Updated Successfully!")
            setName("")
            setCategoryId("")
            setDescription("")
            setLoader(false)
            setTimeout(() => {
                setMessage("")
            }, [1000])
        }
    }

    useEffect(() => {
        if (subcategoryItem) {
            setName(subcategoryItem?.name)
            setCategoryId(subcategoryItem?.categoryId)
            setDescription(subcategoryItem.description)
        } else {
            setSubcategoryItem({})
        }
    }, [subcategoryItem?.id])

    useEffect(() => {
        if (addSubCategory == false) {
            setName("")
            setCategoryId("")
            setDescription("")
            setTimeout(() => {
                setSubcategoryItem({})
            }, [1000])
        }
    }, [addSubCategory])

    return (
        <>
            <main className="bg-white flex xl:flex-nowrap flex-col  flex-wrap pt-0 pb-7 gap-8">
                <div className="flex items-center  justify-end">
                    <button
                        onClick={() => {
                            setTimeout(() => {
                                setSubcategoryItem("")
                            }, [1000])
                            setAddSubCategory(false)
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
                        !subcategoryItem ? submitHandler(e) : updateHandler(e)
                    }}
                >
                    <div className="rounded-md w-full">
                        <div className="w-full pb-4 flex flex-col gap-2 border-b border-zinc-200">
                            <p className="text-xl font-extrabold leading-[20px]">
                                {!subcategoryItem
                                    ? "Create Sub Category"
                                    : "Update Sub Category"}
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
                            <label htmlFor="categoryId" className="pt-5 text-[#27272A] text-sm font-semibold leading-tight tracking-normal mb-2">Select Category Id</label>
                            <select name="type"
                                value={categoryId ? categoryId : ""}
                                onChange={(event) => setCategoryId(event.target.value)}
                                className="mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-500 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow cursor-pointer">
                                <option value="" disabled hidden selected>Select Category</option>
                                {
                                    allCategory?.map(item => {
                                        return (
                                            <option value={item.id} key={item.id}>{item.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="mt-5">
                            <Input
                                label="Description"
                                changeHandler={(e) =>
                                    setDescription(e.target.value)
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
                                (!subcategoryItem && "Create Sub Category") ||
                                (subcategoryItem && "Update Sub Category")
                            )}
                        </button>
                        <div
                            onClick={() => {
                                setTimeout(() => {
                                    setSubcategoryItem("")
                                }, [400])
                                setAddSubCategory(false)
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
