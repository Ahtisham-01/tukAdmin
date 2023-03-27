import React, { useState } from 'react'
import { DeleteModal } from '../modal/deleteModal'
import NoDataToShow from '../reusableUi/noDataToShow'
const CreateUserLicense = ({ setAddUsers, setUsersItem, allUsers }) => {
    //Delete Modal show and hide
    const [deleteModal, setDeleteModal] = useState(false)
    const [modalObj, setModalObj] = useState({})

    return (
        <React.Fragment>
            <div className="w-full pb-[56px] ">
                <div className="overflow-x-auto py-2 px-[8px] border border-zinc-200 rounded-xl bg-white lg:overflow-x-clip">
                    <table className="table-auto border-collapse w-full  ">
                        <thead>
                            <tr className="flex jutify-between  h-[63px] items-center">
                                {/* <th className="max-w-[63px] min-w-[63px] w-full text-start font-semibold text-base leading-[150%] py-4"></th> */}
                                <th className=" w-full max-w-[224px] min-w-[224px] text-start font-semibold text-base leading-[150%] py-4  px-[16px]">
                                    {/* <div className="flex items-center gap-x-3"> */}
                                    Name
                                    {/* </div>{" "} */}
                                </th>
                                <th className="w-full  max-w-[224px] min-w-[224px] text-start font-semibold text-base leading-[150%] py-4  px-[16px]">
                                    {/* <div className="flex items-center gap-x-3"> */}
                                    Role
                                    {/* </div>{" "} */}
                                </th>
                                <th className=" w-full text-start font-semibold text-base leading-[150%] py-4 px-[16px]">
                                    {/* <div className="flex items-center gap-x-3"> */}
                                    Email
                                    {/* </div>{" "} */}
                                </th>
                                <th className=" w-full max-w-[96px] min-w-[96px] text-start font-semibold text-base leading-[150%] py-4 px-[16px]">
                                    {/* <div className="flex items-center gap-x-3"> */}
                                    Actions
                                    {/* </div>{" "} */}
                                </th>
                            </tr>
                        </thead>
                        {/* DATA */}
                        <tbody className="flex flex-col max-w-[1124px] ">
                            <>
                                {allUsers?.length ? (
                                    allUsers?.slice().reverse()?.map((item, index) => {
                                        return (
                                            <tr
                                                key={index * Math.random() * 1000}
                                                className="flex jutify-between  border-black border-opacity-[0.06] border-t "
                                            >

                                                <td className=" w-full max-w-[224px] min-w-[224px] text-start flex items-center font-normal text-sm leading-[150%] px-[16px] ">
                                                    {item?.name ? item?.name : "N/A"}
                                                </td>
                                                <td className="  text-start  max-w-[224px] min-w-[224px]  font-normal text-[12px] leading-[150%] px-4 py-4 flex  items-center">
                                                    {item?.role
                                                        ? item?.role
                                                        : "N/A"}
                                                </td>
                                                <td className=" w-full flex items-center text-start font-normal text-sm leading-[14px]  px-[16px]">
                                                    {item?.email

                                                        ?
                                                        item?.email
                                                        : "N/A"}
                                                </td>
                                                <td className="w-full min-w-[100px] max-w-[100px] flex items-center text-start font-normal text-sm leading-[14px] py-4 px-[16px]">
                                                    <div className="flex justify-center items-center w-full">
                                                        {/* <button
                                                            onClick={() => {
                                                                setUsersItem(
                                                                    item
                                                                )
                                                                setAddUsers(
                                                                    true
                                                                )
                                                            }}
                                                            className=""
                                                        >
                                                            <img src="/images/edit.svg"></img>
                                                        </button> */}
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
                            </>
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
                    deleteType={"users"}
                    modalObj={modalObj}
                    setDeleteModal={(status) => setDeleteModal(status)}
                />
            )}
        </React.Fragment>
    )
}

export default CreateUserLicense