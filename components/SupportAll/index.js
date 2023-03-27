import { useGetAllLicenseQuery } from '../../features/api/dataApiSlice'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { DeleteModal } from '../modal/deleteModal'
import NoDataToShow from '../reusableUi/noDataToShow'
import DetailModal from "../SupportAll/conversationScreen"
const Index = ({ setAddSupport, setSupportItem, filterValue }) => {
    //Delete Modal show and hide
    const [deleteModal, setDeleteModal] = useState(false)
    const [modalObj, setModalObj] = useState({})
    const [detailsData, setDetailsData] = useState("")
    const [modalDetail, setModalDetail] = useState(false)
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
                                    Type
                                    {/* </div>{" "} */}
                                </th>
                                <th className=" w-full max-w-[174px] min-w-[174px] text-start font-semibold text-base leading-[150%] py-4 px-[16px]">
                                    {/* <div className="flex items-center gap-x-3"> */}
                                    Status
                                    {/* </div>{" "} */}
                                </th>
                                <th className=" w-full truncate text-start font-semibold text-base leading-[150%] py-4 px-[16px]">
                                    {/* <div className="flex items-center gap-x-3"> */}
                                    Description
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

                                {filterValue?.length ? (
                                    filterValue?.slice().reverse()?.map((item, index) => {
                                        return (
                                            <tr
                                                key={index}
                                                className="flex justify-between  border-black border-opacity-[0.06] border-t "
                                            >

                                                <td
                                                    onClick={() => { setDetailsData(item), setModalDetail(true) }}
                                                    className=" w-full cursor-pointer max-w-[224px] min-w-[224px] text-start flex items-center font-normal text-sm leading-[150%] px-[16px] ">
                                                    {item.subject ? item.subject : "N/A"}
                                                </td>


                                                <td className="  text-start  max-w-[224px] min-w-[224px]  font-normal text-[12px] leading-[150%] px-4 py-4 flex  items-center">
                                                    {item.type
                                                        ? item.type
                                                        : "N/A"}
                                                </td>
                                                {/* <td className={` ${item?.status ==
                                                    "open"
                                                    ? "bg-red-50 text-red-700 cursor-not-allowed border border-red-700"
                                                    : item?.status ==
                                                        "resolved"
                                                        ? "bg-emerald-50 text-emerald-700 cursor-not-allowed border border-emerald-700"

                                                        : ""
                                                    } w-full max-w-[174px] min-w-[174px] flex items-center text-start font-normal text-sm leading-[14px]  px-[16px]`}>
                                                    {item?.status

                                                        ?
                                                        item?.status
                                                        : "N/A"}
                                                </td> */}
                                                <td className=' w-full max-w-[174px] min-w-[174px] flex items-center text-start font-normal text-sm leading-[14px]  px-[16px]'>
                                                    <button

                                                        className={`
                                                            ${item?.status ==
                                                                "open"
                                                                ? "bg-red-50 text-red-700 cursor-not-allowed border border-red-700"
                                                                : item?.status ==
                                                                    "resolved"
                                                                    ? "bg-emerald-50 text-emerald-700 cursor-not-allowed border border-emerald-700"

                                                                    : ""
                                                            }
                                                            group relative inline-flex items-center text-[10px] justify-center py-1  border rounded-md  px-4 `}
                                                    >
                                                        {item?.status.toUpperCase()}
                                                    </button>
                                                </td>
                                                <td className=" w-full  flex items-center text-start font-normal text-sm leading-[14px]  px-[16px]">
                                                    {item?.description

                                                        ?
                                                        item?.description
                                                        : "N/A"}

                                                </td>
                                                <td className="w-full flex items-center text-start font-normal text-sm leading-[14px] py-4 px-[16px]">
                                                    <span className="flex justify-end items-center w-full">
                                                        <button
                                                            onClick={() => {
                                                                setSupportItem(
                                                                    item
                                                                )
                                                                setAddSupport(
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
                                                    </span>
                                                </td>
                                            </tr>
                                        )
                                    })
                                ) : (
                                    <tr className="text-center my-4">
                                        <NoDataToShow />
                                    </tr>
                                )}
                            </>
                        </tbody>
                    </table>
                </div>

            </div>
            {modalDetail && <DetailModal
                detailsData={detailsData}
                setModalDetail={setModalDetail}
                setDetailsData={setDetailsData}
            />}
            {deleteModal && (
                <DeleteModal
                    deleteType={"support"}
                    modalObj={modalObj}
                    setDeleteModal={(status) => setDeleteModal(status)}
                />
            )}
        </React.Fragment>
    )
}

export default Index