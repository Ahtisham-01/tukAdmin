import dynamic from 'next/dynamic'
import React, { useState, useEffect } from 'react'
import Header from "../components/header"
// import Layout from '../components/Layout'
const Layout = dynamic(() => import('../components/layout'), {
  ssr: false,
  // loading: () => <h1>loading</h1>
})
import Category from '../components/createCategoryComp'
import AddCategory from "../components/createCategoryComp/addCategory"
import { useGetAllCategoryQuery } from '../features/api/dataApiSlice'
import Head from 'next/head'
import userAccess from "../helper/access"
import BlackSpinner from '../components/reusableUi/blackSpinner'
const createCategory = () => {
  const [textSearch, setTextSearch] = useState()
  const [filterValue, setFilterValue] = useState("")
  const [addCategory, setAddCategory] = useState(false)
  const [allCategory, setAllCategory] = useState([])
  const [categoryItem, setCategoryItem] = useState("")
  const { data: allCategories, isLoading } = useGetAllCategoryQuery()

  const [access, setAccess] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setAccess(
      userAccess({
        accessRoles: ["admin"],
        userRole: localStorage.getItem("role")
      })
    )
    setLoading(false)
  }, [])

  useEffect(() => {
    if (textSearch?.length > 0) {
      const filterData = allCategories?.filter((item) => item?.name?.toLowerCase().includes(textSearch?.toLowerCase()))
      if (filterData && filterData !== undefined) {
        setAllCategory([...filterData])
      }
    } else {
      setAllCategory(allCategories)
    }
  }, [textSearch, isLoading])


  return (
    <div>
      <Head>
        <title>TUK Create Category</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width "
        />
        <meta
          property="og:title"
          content="TUK ADMIN PANEL"
        />
      </Head>
      {
        loading ? (
          <div className="w-full mx-auto flex justify-center items-center h-screen">
            <BlackSpinner width="60" height="60" />
          </div>
        ) : access ?
          <Layout nav={true}>
            <Header
              title={"Category"}

            />
            <div className="max-w-[1124px] w-full container mx-auto">
              <div className="w-full flex justify-between mt-8 mb-[17.5px]">
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setAddCategory(true)
                    }}
                    type="button"
                    className="py-3 px-6 bg-zinc-900 hover:bg-zinc-700  text-zinc-50 rounded-[8px]"
                  >
                    Create Category
                  </button>
                </div>

                <div className="relative z-0 max-w-[356px] w-full group">
                  <input
                    value={textSearch}
                    onChange={(e) => {
                      setTextSearch(e.target.value)
                    }}
                    // onClick={() => {
                    //     setTextSearch("")
                    // }}
                    className="text-sm max-w-[356px] h-[56px] text-left z-0 relative px-4 py-4 w-full border rounded-md text-zinc-400 leading-[100%] border-zinc-200 outline-none"
                    type="text"
                    placeholder="Search component"
                  />
                  <svg
                    className="absolute right-4  top-5 cursor-pointer"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.90906 2C5.93814 2 4.98903 2.28791 4.18174 2.82733C3.37444 3.36674 2.74524 4.13343 2.37368 5.03045C2.00213 5.92746 1.90491 6.91451 2.09433 7.86677C2.28375 8.81904 2.75129 9.69375 3.43783 10.3803C4.12438 11.0668 4.99909 11.5344 5.95135 11.7238C6.90362 11.9132 7.89067 11.816 8.78768 11.4444C9.6847 11.0729 10.4514 10.4437 10.9908 9.63639C11.5302 8.8291 11.8181 7.87998 11.8181 6.90906C11.818 5.60712 11.3008 4.35853 10.3802 3.43792C9.45959 2.51731 8.211 2.00008 6.90906 2V2Z"
                      stroke="#18181B"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M10.5718 10.5715L14.0002 14"
                      stroke="#18181B"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <Category
                addCategory={addCategory}
                setAddCategory={setAddCategory}
                setCategoryItem={setCategoryItem}
                categoryItem={categoryItem}
                allCategory={allCategory}
              />
            </div>
            <>
              <div
                onClick={() => {
                  setAddCategory(false)
                  setTimeout(() => {
                    setCategoryItem("")
                  }, 400)
                }}
                className={`${addCategory
                  ? `z-[50] opacity-1 visible `
                  : "invisible opacity-0 z-0 "
                  } fixed inset-0 w-full h-full transform  transition-all duration-500 ease-in-out bg-zinc-600 bg-opacity-80`}
              ></div>

              <div
                className={`bg-white fixed inset-0 h-full max-w-[384px] transition-all duration-700 ease-in-out z-[500] m-auto ${addCategory ? "mr-0" : "mr-[-100%]"
                  } w-full p-6 overflow-y-auto min-h-screen`}
              >
                <AddCategory
                  addCategory={addCategory}
                  setAddCategory={setAddCategory}
                  setCategoryItem={setCategoryItem}
                  categoryItem={categoryItem}
                />
              </div>
            </>
          </Layout> : <div className="w-screen h-screen flex items-center justify-center">
            <h2 className="text-4xl text-zinc-800 font-semibold">
              You are not authorized to access this page!
            </h2>
          </div>}
    </div>
  )
}

export default createCategory