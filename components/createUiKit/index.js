import React, { useState } from 'react'
import { DeleteModal } from '../modal/deleteModal'
import NoDataToShow from '../reusableUi/noDataToShow'
const index = ({ setUiKit, setaddUIKit, allKits, allLicense }) => {
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
                                    Description
                                    {/* </div>{" "} */}
                                </th>
                                <th className="w-full  max-w-[224px] min-w-[224px] text-start font-semibold text-base leading-[150%] py-4  px-[16px]">
                                    {/* <div className="flex items-center gap-x-3"> */}
                                    Licenses
                                    {/* </div>{" "} */}
                                </th>
                                <th className=" w-full text-start font-semibold text-base leading-[150%] py-4 px-[16px]">
                                    {/* <div className="flex items-center gap-x-3"> */}
                                    Kits
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
                            {allKits?.length ? (
                                allKits?.map((item, index) => {
                                    return (
                                        <tr
                                            key={index}
                                            className="flex jutify-between  border-black border-opacity-[0.06] border-t "
                                        >
                                            {/* <td className="max-w-[63px] min-w-[63px] w-full text-start px-[16px] font-normal text-sm leading-[14px] py-4 ">
                                                    {index + 1}
                                                </td> */}
                                            <td className="  text-start  max-w-[224px] min-w-[224px]  font-normal text-[12px] leading-[150%] px-4 py-4 flex  items-center">
                                                {item?.name
                                                    ?
                                                    item?.name
                                                    : "N/A"}
                                            </td>
                                            <td className="  text-start  max-w-[224px] min-w-[224px]  font-normal text-[12px] leading-[150%] px-4 py-4 flex  items-center">
                                                {item?.description
                                                    ?
                                                    item?.description
                                                    : "N/A"}
                                            </td>
                                            <td className="  text-start  max-w-[224px] min-w-[224px]  font-normal text-[12px] leading-[150%] px-6 py-4 flex  items-center">
                                                {item?.licensesId
                                                    ?
                                                    allLicense !== undefined && allLicense[index]?.type
                                                    : "N/A"}
                                            </td>
                                            {item?.category?.length > 0 ?
                                                item?.category?.map((td, i) => {
                                                    return <td key={i} className=" max-w-[150px] min-w-[150px]  font-normal text-[12px] leading-[150%] px-6 py-4 flex  items-center">
                                                        {td?.name}
                                                    </td>
                                                }) : <td className="   max-w-[150px] min-w-[150px]  font-normal text-[12px] leading-[150%] px-6 py-4 flex  items-center">
                                                    N/A
                                                </td>
                                            }

                                            <td className="w-full flex items-center text-start font-normal text-sm leading-[14px] py-4 px-5">
                                                <div className="flex justify-end items-center w-full">
                                                    <button
                                                        onClick={() => {
                                                            setUiKit(
                                                                item
                                                            )
                                                            setaddUIKit(true)
                                                            // setaddLicense(
                                                            //     true
                                                            // )
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
            </div>

            {deleteModal && (
                <DeleteModal
                    deleteType={"uiKit"}
                    modalObj={modalObj}
                    setDeleteModal={(status) => setDeleteModal(status)}
                />
            )}
        </React.Fragment>
    )
}

export default index