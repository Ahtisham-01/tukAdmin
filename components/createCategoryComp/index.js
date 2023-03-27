import { useGetAllUiKitsQuery } from '../../features/api/dataApiSlice'
import React, { useEffect, useState } from 'react'
import { DeleteModal } from '../modal/deleteModal'
import NoDataToShow from '../reusableUi/noDataToShow'
const Index = ({ setAddCategory, setCategoryItem, allCategory }) => {
    //Delete Modal show and hide
    const [deleteModal, setDeleteModal] = useState(false)
    const [modalObj, setModalObj] = useState({})
    const [categoryData, setCategoryData] = useState([])
    const [matchItem1, setMatchItem1] = useState("")
    const { data: allKits } = useGetAllUiKitsQuery()

    return (
        <React.Fragment>
            <div className="w-full pb-[56px] ">
                <div className="overflow-x-auto py-2 px-[8px] border border-zinc-200 rounded-xl bg-white lg:overflow-x-clip">
                    <table className="table-auto border-collapse w-full  ">
                        <thead>
                            <tr className="flex jutify-between  h-[63px] items-center">
                                {/* <th className="max-w-[63px] min-w-[63px] w-full text-start font-semibold text-base leading-[150%] py-4"></th> */}
                                <th className=" w-full  text-center font-semibold text-base leading-[150%] py-4  px-[16px]">
                                    {/* <div className="flex items-center gap-x-3"> */}
                                    Name
                                    {/* </div>{" "} */}
                                </th>
                                <th className="w-full  text-center font-semibold text-base leading-[150%] py-4  px-[16px]">
                                    {/* <div className="flex items-center gap-x-3"> */}
                                    UI-kit
                                    {/* </div>{" "} */}
                                </th>
                                <th className="w-full  text-center font-semibold text-base leading-[150%] py-4  px-[16px]">
                                    {/* <div className="flex items-center gap-x-3"> */}
                                    Actions
                                    {/* </div>{" "} */}
                                </th>

                            </tr>
                        </thead>
                        {/* DATA */}
                        <tbody className="flex flex-col max-w-[1124px] ">
                            {allCategory?.length ? (
                                allCategory?.slice().reverse()?.map((item, index) => {
                                    if (item?._all) return
                                    return (
                                        <tr
                                            key={index * Math.random() * 1000}
                                            className="flex jutify-between w-full border-black border-opacity-[0.06] border-t "
                                        >
                                            {/* <td className="max-w-[63px] min-w-[63px] w-full text-start px-[16px] font-normal text-sm leading-[14px] py-4 ">
                                                    {index + 1}
                                                </td> */}
                                            <td className=" w-full  flex justify-center items-center font-normal text-sm leading-[150%] px-[16px] ">
                                                {item?.name ? item?.name : "N/A"}
                                            </td>
                                            <td className=" justify-center  w-full  font-normal text-[12px] leading-[150%] px-4 py-4 flex  items-center">
                                                {allKits?.map((it, i) => item?.kitsId == it?.id ? it?.name : "")
                                                }
                                            </td>
                                            <td className="w-full flex items-center text-start font-normal text-sm leading-[14px] py-4 px-[16px]">
                                                <div className="flex justify-center items-center w-full">
                                                    <button
                                                        onClick={() => {
                                                            setCategoryItem(
                                                                item
                                                            )
                                                            setAddCategory(
                                                                true
                                                            )
                                                        }}
                                                        className=""
                                                    >
                                                        <img src="/images/edit.svg"></img>
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setModalObj(item)
                                                            setDeleteModal(true)
                                                        }}
                                                        className="pl-[12px]"
                                                    >
                                                        <img src="/images/delete.svg"></img>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            ) : (
                                <div className="text-center my-4">
                                    <NoDataToShow />
                                </div>
                            )}
                        </tbody>
                    </table>
                </div>



                {/** Pagination design */}

                {/* <div className="flex justify-end space-x-3 pt-6">
                    <div className="flex justify-center items-center pr-1 cursor-pointer">
                        <svg
                            width={6}
                            height={10}
                            viewBox="0 0 6 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.33398 1.66675L1.00065 5.00008L4.33398 8.33341"
                                stroke="#CBD5E1"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <p className="text-sm text-zinc-300 leading-[17px] font-medium pl-3">Previous</p>
                    </div>

                    <div className="border rounded-lg bg-zinc-900 cursor-pointer">
                        <p className="text-sm leading-[14px] font-medium text-white py-[10px] px-[11px]">
                            1
                        </p>
                    </div>

                    <div className="border rounded-lg bg-white cursor-pointer">
                        <p className="text-sm leading-[14px] font-medium text-black py-[10px] px-[11px]">
                            2
                        </p>
                    </div>

                    <div className="border rounded-lg bg-white cursor-pointer">
                        <p className="text-sm leading-[14px] font-medium text-black py-[10px] px-[11px]">
                            3
                        </p>
                    </div>

                    <div className="border rounded-lg bg-white cursor-pointer">
                        <p className="text-sm leading-[14px] font-medium text-black py-[10px] px-[11px]">
                            4
                        </p>
                    </div>

                    <div className="border rounded-lg bg-white cursor-pointer">
                        <p className="text-sm leading-[14px] font-medium text-black py-[10px] px-[11px]">
                            ...
                        </p>
                    </div>

                    <div className="border rounded-lg bg-white cursor-pointer">
                        <p className="text-sm leading-[14px] font-medium text-black py-[10px] px-[11px]">
                            12
                        </p>
                    </div>

                    <div className="flex justify-center items-center pl-1 cursor-pointer">
                        <p className="text-sm text-zinc-600 leading-[17px] font-medium pr-3">Next</p>
                        <svg
                            width={6}
                            height={10}
                            viewBox="0 0 6 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.66602 1.66675L4.99935 5.00008L1.66602 8.33341"
                                stroke="#475569"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div> */}
            </div>

            {deleteModal && (
                <DeleteModal
                    deleteType={"category"}
                    modalObj={modalObj}
                    setDeleteModal={(status) => setDeleteModal(status)}
                />
            )}
        </React.Fragment>
    )
}

export default Index