import React from "react"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {
    useDeleteCategoryMutation,
    useDeleteComponentMutation,
    useDeleteIntegrationMutation,
    useDeleteLicenseMutation,
    useDeleteSubCategoryMutation,
    useDeleteTemplatesMutation,
    useDeleteTicketMutation,
    useDeleteUiKitsMutation,
    useDeleteUsersMutation
} from "../../features/api/dataApiSlice"
import Spinner from "../reusableUi/spinner"
export const DeleteModal = ({ setDeleteModal, modalObj, deleteType }) => {
    // Loading State
    const [loader, setLoader] = useState(false)

    // Delete License
    const [deleteLicense] = useDeleteLicenseMutation()
    //Delete Category
    const [deleteCategory] = useDeleteCategoryMutation()
    //Delete Component
    const [deleteComp] = useDeleteComponentMutation()
    const [deleteSubCate] = useDeleteSubCategoryMutation()
    const [deleteUser] = useDeleteUsersMutation()
    const [deleteTemplate] = useDeleteTemplatesMutation()
    const [deleteIntegration] = useDeleteIntegrationMutation()
    const [deleteSupport] = useDeleteTicketMutation()




    const deleteLicenseById = async (id) => {
        setLoader(true)
        if (deleteType === 'License') {
            const del = await deleteLicense(id)
            if (del && del?.data) {
                setLoader(false)
                setDeleteModal(false)
            }
        }
        if (deleteType === 'addComponent') {
            const del = await deleteComp(id)
            if (del && del?.data) {
                setLoader(false)
                setDeleteModal(false)
            }
        }
        if (deleteType === 'category') {
            const del = await deleteCategory(id)
            if (del && del?.data) {
                setLoader(false)
                setDeleteModal(false)
            }
        }
        if (deleteType === 'uiKit') {
            const del = await deleteUiKits(id)
            if (del && del?.data) {
                setLoader(false)
                setDeleteModal(false)
            }
        }
        if (deleteType === 'subCategory') {
            const del = await deleteSubCate(id)
            if (del && del?.data) {
                setLoader(false)
                setDeleteModal(false)
            }
        }
        if (deleteType === 'users' || deleteType === 'admin') {
            const del = await deleteUser(id)
            if (del && del?.data) {
                setLoader(false)
                setDeleteModal(false)
            }
        }
        if (deleteType === 'addTemplates') {
            const del = await deleteTemplate(id)
            if (del && del?.data) {
                setLoader(false)
                setDeleteModal(false)
            }
        }
        if (deleteType === 'integrations') {
            const del = await deleteIntegration(id)
            if (del && del?.data) {
                setLoader(false)
                setDeleteModal(false)
            }
        }
        if (deleteType === 'support') {
            const del = await deleteSupport(id)
            if (del && del?.data) {
                setLoader(false)
                setDeleteModal(false)
            }
        }
    }

    const notify = () =>
        toast.success("Deleted Successfully", {
            icon: ({ theme, type }) => <img src="/images/toastertick.svg" />
        })

    return (
        <>
            {/* <div>
                <ToastContainer
                    position="top-right"
                    autoClose={false}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable={false}
                    pauseOnHover={false}
                    theme="light"
                />
            </div>
            <div
                className="relative z-50"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
            >
                <div onClick={()=>setDeleteModal(false)} className="fixed inset-0 bg-zinc-500 bg-opacity-70 transition-opacity"></div>
                <div className="fixed inset-0   overflow-y-auto">
                    <div className="flex min-h-full  items-center justify-center p-4 text-center  ">
                        <div className="  w-full max-w-[481px] transform  overflow-hidden rounded-lg bg-white  shadow-xl transition-all ">
                            <div className="relative px-[32px]  py-[24px]">
                                <div className="flex flex-col max-w-[417px] items-center justify-center w-full">
                                    <div className="bg-[#FFF1F2] rounded-full w-[48px] h-[48px] flex justify-center items-center">
                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_593_17664)">
                                                <path
                                                    d="M4 7H20"
                                                    stroke="#E11D48"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M10 11V17"
                                                    stroke="#E11D48"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M14 11V17"
                                                    stroke="#E11D48"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7"
                                                    stroke="#E11D48"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7"
                                                    stroke="#E11D48"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_593_17664">
                                                    <rect
                                                        width={24}
                                                        height={24}
                                                        fill="white"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>

                                    <h1 className="pt-4 text-[#262626] text-[18px] font-semibold font-Manrope leading-[100%]">
                                        Confirm Delete?
                                    </h1>
                                    <p className="text-[#525252] pt-2 font-normal text-sm leading-[150%] text-center font-Manrope">
                                        This action is irreversible and can’t be
                                        undone. Do you wish to proceed?
                                    </p>
                                </div>
                                <div
                                    onClick={() => setDeleteModal(false)}
                                    className="absolute top-[16px] cursor-pointer right-[16px]"
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.3259 9.99967L15.0369 6.28874C15.213 6.11293 15.3121 5.87435 15.3123 5.6255C15.3125 5.37665 15.2139 5.1379 15.0381 4.96178C14.8622 4.78566 14.6237 4.6866 14.3748 4.68638C14.126 4.68616 13.8872 4.7848 13.7111 4.96061L10.0002 8.67155L6.28922 4.96061C6.1131 4.78449 5.87423 4.68555 5.62516 4.68555C5.37609 4.68555 5.13722 4.78449 4.9611 4.96061C4.78498 5.13673 4.68604 5.3756 4.68604 5.62467C4.68604 5.87374 4.78498 6.11262 4.9611 6.28874L8.67204 9.99967L4.9611 13.7106C4.78498 13.8867 4.68604 14.1256 4.68604 14.3747C4.68604 14.6237 4.78498 14.8626 4.9611 15.0387C5.13722 15.2149 5.37609 15.3138 5.62516 15.3138C5.87423 15.3138 6.1131 15.2149 6.28922 15.0387L10.0002 11.3278L13.7111 15.0387C13.8872 15.2149 14.1261 15.3138 14.3752 15.3138C14.6242 15.3138 14.8631 15.2149 15.0392 15.0387C15.2153 14.8626 15.3143 14.6237 15.3143 14.3747C15.3143 14.1256 15.2153 13.8867 15.0392 13.7106L11.3259 9.99967Z"
                                            fill="#18181B"
                                        />
                                    </svg>
                                </div>
                                <div className=" px-4 pt-[36px] flex items-center justify-center ">
                                    <button
                                        onClick={() => setDeleteModal(false)}
                                        type="button"
                                        className="text-sm inline-flex justify-center hover:border-1 hover:border-rose-600 hover:text-rose-600 rounded-md border border-[#18181B] bg-white px-[18px] py-[10px] font-medium text-zinc-700  hover:bg-zinc-50 focus:outline-none "
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={() => {
                                            deleteType == "License"
                                                ? deleteLicenseById(
                                                    modalObj?.id
                                                )
                                                : deleteType === 'addComponent'
                                                    ? deleteLicenseById(
                                                        modalObj?.id
                                                    )
                                                    : deleteType === 'category'
                                                        ? deleteLicenseById(
                                                            modalObj?.id
                                                        ) : deleteType === 'uiKit'
                                                            ? deleteLicenseById(
                                                                modalObj?.id
                                                            ) :
                                                            deleteType === 'subCategory'
                                                                ? deleteLicenseById(
                                                                    modalObj?.id
                                                                ) :
                                                                deleteType === 'users'
                                                                    ? deleteLicenseById(
                                                                        modalObj?.id
                                                                    ) :
                                                                    deleteType === 'admin'
                                                                        ? deleteLicenseById(
                                                                            modalObj?.id
                                                                        ) :
                                                                        deleteType === 'addTemplates'
                                                                            ? deleteLicenseById(
                                                                                modalObj?.id
                                                                            ) :
                                                                            console.log(
                                                                                "Delete Type Not Found"
                                                                            )
                                        }}
                                        type="button"
                                        className="text-sm inline-flex ml-4 leading-[150%] justify-center rounded-md border border-transparent bg-rose-600 px-6 py-3 font-medium text-white shadow-sm focus:outline-none  "
                                    >
                                        {loader ? (
                                            <Spinner width="20" height="20" />
                                        ) : (
                                            <span>Yes, Delete Now</span>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}



            <div
                onClick={(event) => {
                    event.stopPropagation();
                    setDeleteModal(false)
                }}
                className={`fixed inset-0 bg-black bg-opacity-40 bg-blur z-[70]`}
            ></div>
            <div className="m-auto fixed w-full max-w-[472px] h-full max-h-[250px] inset-0 z-[71] ">
                <div className="">
                    <div className="pb-6 pt-8 pr-8 pl-8 bg-white max-w-[545px] flex items-start rounded-t-md ">
                        {/* <div className="bg-red-50 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                            <SVGBin />
                        </div> */}
                        <div className="ml-4">
                            <h1 className="text-2xl font-semibold leading-[140%] text-slate-800">
                                Confirm Delete?
                            </h1>
                            <p className="text-sm leading-[150%] mt-3 text-gray-600 w-full max-w-[363px]">
                                {/* Please confirm if you wanted to delete the{" "}
                                {name} ? This action will remove this user from
                                the organization.  */}
                                This action is irreversible and can’t be undone.
                                Do you wish to proceed?
                            </p>
                        </div>
                    </div>
                    <div className="pt-5 pl-8 pb-8 pr-8 bg-white gap-x-4 flex items-center justify-end rounded-b-md">
                        <button
                            onClick={() => setDeleteModal(false)}
                            type="button"
                            className="text-sm inline-flex justify-center hover:border-1 hover:border-rose-600 hover:text-rose-600 rounded-md border border-[#18181B] bg-white px-[18px] py-[10px] font-medium text-zinc-700  hover:bg-zinc-50 focus:outline-none "
                        >
                            Cancel
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                deleteType == "License"
                                    ? deleteLicenseById(
                                        modalObj?.id
                                    )
                                    : deleteType === 'addComponent'
                                        ? deleteLicenseById(
                                            modalObj?.id
                                        )
                                        : deleteType === 'category'
                                            ? deleteLicenseById(
                                                modalObj?.id
                                            ) : deleteType === 'uiKit'
                                                ? deleteLicenseById(
                                                    modalObj?.id
                                                ) :
                                                deleteType === 'subCategory'
                                                    ? deleteLicenseById(
                                                        modalObj?.id
                                                    ) :
                                                    deleteType === 'users'
                                                        ? deleteLicenseById(
                                                            modalObj?.id
                                                        ) :
                                                        deleteType === 'admin'
                                                            ? deleteLicenseById(
                                                                modalObj?.id
                                                            ) :
                                                            deleteType === 'addTemplates'
                                                                ? deleteLicenseById(
                                                                    modalObj?.id
                                                                ) :
                                                                deleteType === 'integrations'
                                                                    ? deleteLicenseById(
                                                                        modalObj?.id
                                                                    ) :
                                                                    deleteType === 'support'
                                                                        ? deleteLicenseById(
                                                                            modalObj?.id
                                                                        ) :
                                                                        console.log(
                                                                            "Delete Type Not Found"
                                                                        )
                            }}
                            className="inline-flex items-center justify-center px-5 py-3 bg-rose-600 rounded-md"
                        >
                            <p className="text-base font-semibold leading-normal text-white">
                                {loader ? (
                                    <Spinner width="20" height="20" />
                                ) : (
                                    <span>Yes, Delete Now</span>
                                )}
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
