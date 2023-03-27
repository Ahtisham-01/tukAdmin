import React, { useState } from 'react'
import { DeleteModal } from '../modal/deleteModal';
import NoDataToShow from '../reusableUi/noDataToShow'


const CreateTemplates = ({ seteditTemplateDetails, setaddTemplates, setIsEdit, allTemplates }) => {
    const [del, setDel] = useState(false)
    const [modalObj, setModalObj] = useState(false)
    const date = new Date()
    return (
        <div className="overflow-x-auto py-2 px-[8px] border border-zinc-200 rounded-xl bg-white lg:overflow-x-clip">
            {false ? (
                <div className="w-full flex flex-col space-y-5">
                    <div className="w-full h-16 bg-gray-300 animate-pulse"></div>
                    <div className="w-full h-16 bg-gray-200 animate-pulse"></div>
                    <div className="w-full h-16 bg-gray-200 animate-pulse"></div>
                    <div className="w-full h-16 bg-gray-200 animate-pulse"></div>
                    <div className="w-full h-16 bg-gray-200 animate-pulse"></div>
                    <div className="w-full h-16 bg-gray-200 animate-pulse"></div>
                    <div className="w-full h-16 bg-gray-200 animate-pulse"></div>
                </div>
            ) : (
                <>
                    <table className="w-full whitespace-nowrap ">
                        {allTemplates?.length <= 0 || allTemplates == undefined ? <thead>
                            {/* {true ? <thead> */}
                            <tr className="flex jutify-between  h-[63px] items-center">
                                {/* <th className="max-w-[63px] min-w-[63px] w-full text-start font-semibold text-base leading-[150%] py-4"></th> */}
                                <th className=" w-full max-w-[224px] min-w-[224px] text-start font-semibold text-base leading-[150%] py-4  px-[16px]">
                                    {/* <div className="flex items-center gap-x-3"> */}
                                    Name
                                    {/* </div>{" "} */}
                                </th>
                                <th className="w-full  max-w-[224px] min-w-[224px] text-start font-semibold text-base leading-[150%] py-4  px-[16px]">
                                    {/* <div className="flex items-center gap-x-3"> */}
                                    Thumbnail
                                    {/* </div>{" "} */}
                                </th>
                                <th className=" w-full text-start font-semibold text-base leading-[150%] py-4 px-[16px]">
                                    {/* <div className="flex items-center gap-x-3"> */}
                                    Date
                                    {/* </div>{" "} */}
                                </th>
                                <th className=" w-full text-right  font-semibold text-base leading-[150%] py-4 px-[16px]">
                                    {/* <div className="flex items-center gap-x-3"> */}
                                    Actions
                                    {/* </div>{" "} */}
                                </th>
                            </tr>
                        </thead> :
                            <thead
                                className={
                                    "border-b border-slate-100"
                                }
                            >
                                <tr >
                                    <th className="text-base font-medium leading-none text-slate-900 text-left py-6 px-4  ">
                                        Name
                                    </th>
                                    <th className=" text-base font-medium leading-none text-slate-900 text-left py-6 px-4  ">
                                        Thumbnail
                                    </th>

                                    <th className="text-base font-medium leading-none text-slate-900 text-left py-6 px-6">
                                        Date
                                    </th>
                                    <th className="text-base font-medium leading-none text-slate-900 text-right py-6 px-6">
                                        Actions
                                    </th>
                                </tr>
                            </thead>}
                        <tbody>
                            {allTemplates?.length > 0
                                &&
                                allTemplates != undefined
                                ? (
                                    // {false ? (
                                    allTemplates?.slice().reverse().map((item, i) => {
                                        return (
                                            <tr
                                                key={i}
                                                // onClick={() => {
                                                //   router.push(`/skins/${item.id}`);
                                                // }}
                                                className={`w-full border-black border-opacity-[0.06] border-t text-sm `}
                                            >
                                                <td className="w-full max-w-[224px] min-w-[224px] text-start flex items-center font-normal text-sm leading-[150%] px-[16px] ">
                                                    {item?.name}
                                                </td>
                                                <td
                                                    className={`w-full max-w-[150px] min-w-[150px] text-start font-normal text-sm leading-[150%] px-[16px] `}
                                                >
                                                    <img
                                                        src={
                                                            item?.templatesPicture
                                                        }
                                                        className="w-[75px] h-[25px]"
                                                    />
                                                </td>
                                                <td className="w-full max-w-[224px] min-w-[224px] text-start font-normal text-sm leading-[150%] px-[16px] ">
                                                    {date.toString().slice(0, 15)}
                                                </td>
                                                {/* <td className="flex items-center justify-end space-x-3 p-6">
                        <div>
                          <svg
                           
                            className="cursor-pointer"
                            width={
                              25
                            }
                            height={
                              24
                            }
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.5 10.5V19.125C18.5 19.3712 18.4515 19.615 18.3573 19.8425C18.263 20.07 18.1249 20.2767 17.9508 20.4508C17.7767 20.6249 17.57 20.763 17.3425 20.8573C17.115 20.9515 16.8712 21 16.625 21H5.375C4.87772 21 4.40081 20.8025 4.04917 20.4508C3.69754 20.0992 3.5 19.6223 3.5 19.125V7.875C3.5 7.37772 3.69754 6.90081 4.04917 6.54917C4.40081 6.19754 4.87772 6 5.375 6H13.2256"
                              stroke="#1E293B"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M22.0598 2.49629C21.9913 2.42103 21.9082 2.36044 21.8157 2.31817C21.7231 2.27591 21.6229 2.25286 21.5212 2.2504C21.4194 2.24795 21.3183 2.26615 21.2238 2.3039C21.1292 2.34165 21.0434 2.39817 20.9713 2.47004L20.3915 3.04707C20.3212 3.11739 20.2817 3.21273 20.2817 3.31215C20.2817 3.41156 20.3212 3.50691 20.3915 3.57723L20.9231 4.10785C20.9579 4.14286 20.9993 4.17063 21.0449 4.18959C21.0905 4.20854 21.1394 4.2183 21.1888 4.2183C21.2382 4.2183 21.2871 4.20854 21.3327 4.18959C21.3784 4.17063 21.4198 4.14286 21.4546 4.10785L22.0199 3.54535C22.3059 3.25988 22.3326 2.79488 22.0598 2.49629Z"
                              fill="#1E293B"
                            />
                            <path
                              d="M19.2186 4.2186L10.7568 12.6655C10.7055 12.7166 10.6682 12.78 10.6485 12.8497L10.2571 14.0155C10.2477 14.0471 10.247 14.0807 10.2551 14.1127C10.2633 14.1446 10.2799 14.1738 10.3032 14.1972C10.3265 14.2205 10.3557 14.2371 10.3877 14.2452C10.4197 14.2533 10.4532 14.2527 10.4849 14.2433L11.6497 13.8519C11.7194 13.8322 11.7828 13.7949 11.8339 13.7436L20.2808 5.28079C20.359 5.20181 20.4028 5.09518 20.4028 4.98407C20.4028 4.87296 20.359 4.76634 20.2808 4.68735L19.8144 4.2186C19.7353 4.13974 19.6282 4.09546 19.5165 4.09546C19.4048 4.09546 19.2977 4.13974 19.2186 4.2186Z"
                              fill="#1E293B"
                            />
                          </svg>
                        </div>
                        <div>
                          <svg
                           
                            className="cursor-pointer"
                            width={
                              25
                            }
                            height={
                              24
                            }
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.75 5.25L6.6875 20.25C6.73203 21.1167 7.3625 21.75 8.1875 21.75H16.8125C17.6408 21.75 18.2595 21.1167 18.3125 20.25L19.25 5.25"
                              stroke="#1E293B"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4.25 5.25H20.75"
                              stroke="#1E293B"
                              strokeMiterlimit={
                                10
                              }
                              strokeLinecap="round"
                            />
                            <path
                              d="M9.5 5.24991V3.37491C9.49957 3.22705 9.52838 3.08057 9.58476 2.94388C9.64114 2.8072 9.72399 2.683 9.82854 2.57845C9.9331 2.4739 10.0573 2.39105 10.194 2.33467C10.3307 2.27828 10.4771 2.24948 10.625 2.24991H14.375C14.5229 2.24948 14.6694 2.27828 14.806 2.33467C14.9427 2.39105 15.0669 2.4739 15.1715 2.57845C15.276 2.683 15.3589 2.8072 15.4153 2.94388C15.4716 3.08057 15.5005 3.22705 15.5 3.37491V5.24991"
                              stroke="#1E293B"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12.5 8.25V18.75"
                              stroke="#1E293B"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.125 8.25L9.5 18.75"
                              stroke="#1E293B"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15.875 8.25L15.5 18.75"
                              stroke="#1E293B"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </td> */}
                                                <td className="w-full min-w-[200px] max-w-[200px] flex items-center text-start font-normal text-sm leading-[14px] py-4 px-5">
                                                    <div className="flex justify-end items-center w-full">
                                                        <button
                                                            onClick={() => {
                                                                setIsEdit(true)
                                                                setaddTemplates(true)
                                                                seteditTemplateDetails(item)
                                                            }}
                                                            className=""
                                                        >
                                                            <img src="/images/edit.svg"></img>
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                setDel(true)
                                                                setModalObj(item)
                                                                seteditTemplateDetails(item)
                                                            }}
                                                            className="pl-[12px]"
                                                        >
                                                            <img src="/images/delete.svg"></img>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <div className="text-center my-4">
                                        <NoDataToShow />
                                    </div>
                                )}
                        </tbody>
                    </table>
                </>
            )}
            {
                del &&
                <DeleteModal
                    setDeleteModal={setDel}
                    modalObj={modalObj}
                    deleteType={`addTemplates`}
                />
            }
        </div>
    )
}

export default CreateTemplates