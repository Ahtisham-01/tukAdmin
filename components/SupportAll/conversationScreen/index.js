import { useCreateConversationMutation, useGetAllTicketQuery, useGetTicketbyIDQuery, useUpdateTicketMutation } from '../../../features/api/dataApiSlice'
import BlackSpinner from '../../../components/reusableUi/blackSpinner'
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode"
import { skipToken } from '@reduxjs/toolkit/dist/query'


const Index = ({ setModalDetail, detailsData, setDetailsData }) => {
  const diagonsisData = [{
    rma: "RMA-0001"
  }]
  const statusData = [{
    name: "Open"

  }]
  const [status, setStatus] = useState("")
  const [memberId, setMemberId] = useState(-1)
  const [updateTicket] = useUpdateTicketMutation()
  const [loader, setLoader] = useState(false)
  const [Message, setMessage] = useState("")
  const [conversation, setConversation] = useState("")
  const [createConversation] = useCreateConversationMutation()
  const [token, setToken] = useState("")
  const [userId, setUserID] = useState("")
  const { data: allTickets } = useGetAllTicketQuery()
  // const convID = useGetTicketbyIDQuery(1)
  const [conversationByID, setConversationByID] = useState()
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("auth")
      if (token) {
        setToken(token)
      }
      let decoded = jwt_decode(token)
      setUserID(decoded.sub)
    }
  }, [token, conversationByID])
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
  //create status
  const submitHandler = async (e) => {
    setLoader(true)
    e.preventDefault()
    const data = {
      usersId: userId,
      ticketsId: detailsData?.id,
      message: conversation


    }
    const res = await createConversation(data)

    if (res && res?.error) {
      setMessage(res?.error?.data?.message)
      setLoader(false)
      setTimeout(() => {
        setMessage("")
      }, [1000])
    } else {
      setConversation("")
      setMessage("License Created Successfully!")
      setLoader(false)
      setTimeout(() => {
        setConversation("")
        setMessage("")
      }, [1000])
    }
  }
  //update status
  const updateHandler = async (e) => {
  
    e.preventDefault()
    const updateTicketBody = {
      status: e.target.value,

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
      setLoader(false)

    }
  }
  useEffect(() => {
    if (detailsData) {
      setStatus(detailsData?.status)
      setMemberId(detailsData?.id)
    }
  }, [detailsData?.id])

  useEffect(() => {
    if (detailsData == false) {
      setMemberId(-1)
    }
  }, [detailsData.status])
  return (
    <>

      <div
        onClick={(event) => {
          event.stopPropagation();
          setModalDetail(false)
        }}
        className={`fixed inset-0 bg-black bg-opacity-40 bg-blur z-[70]`}
      ></div>


      <div
        className="m-auto bg-white w-full max-w-[1280px] h-full max-h-[900px]  absolute   inset-0    z-[71] overflow-y-auto overflow-x-hidden scroll-smooth rounded-[12px]"
        id="journal-scroll"
      >

        <div
          className={` w-full  overflow-auto rounded-xl p-8 flex flex-col gap-6 relative z-50`}
        >
          <div
            onClick={() => {
              setModalDetail(false)
            }}
            className={`absolute top-6 right-6 cursor-pointer`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13.5909 12L18.0441 7.54687C18.2554 7.3359 18.3743 7.04962 18.3745 6.75099C18.3748 6.45237 18.2564 6.16587 18.0455 5.95453C17.8345 5.74319 17.5482 5.62431 17.2496 5.62404C16.951 5.62378 16.6645 5.74215 16.4531 5.95312L12 10.4062L7.54687 5.95312C7.33553 5.74178 7.04888 5.62305 6.75 5.62305C6.45111 5.62305 6.16447 5.74178 5.95312 5.95312C5.74178 6.16447 5.62305 6.45111 5.62305 6.75C5.62305 7.04888 5.74178 7.33553 5.95312 7.54687L10.4062 12L5.95312 16.4531C5.74178 16.6645 5.62305 16.9511 5.62305 17.25C5.62305 17.5489 5.74178 17.8355 5.95312 18.0469C6.16447 18.2582 6.45111 18.3769 6.75 18.3769C7.04888 18.3769 7.33553 18.2582 7.54687 18.0469L12 13.5937L16.4531 18.0469C16.6645 18.2582 16.9511 18.3769 17.25 18.3769C17.5489 18.3769 17.8355 18.2582 18.0469 18.0469C18.2582 17.8355 18.3769 17.5489 18.3769 17.25C18.3769 16.9511 18.2582 16.6645 18.0469 16.4531L13.5909 12Z"
                fill="black"
              />
            </svg>
          </div>
          <h3
            className={`text-2xl leading-none font-bold tracking-[0.03em] text-center`}
          >
            Support
          </h3>
          <div
            className={`flex flex-row w-full justify-between items-center`}
          >
            <p
              className={`text-xl leading-none gap-1 font-light flex tracking-[-0.03em] `}
            >
              Subject :
              <p className="font-extrabold ">
                {" "}
                {detailsData?.subject}
              </p>
            </p>


            <select
              name="type"
              // defaultValue={"resolved"}
              // value={status}
              onChange={(e) => {
                setStatus(e.target.value);
                updateHandler(e)

              }}

              className={`
                ${detailsData?.status ==
                  "open" || status == "open"
                  ? "bg-red-50 text-red-700 border border-red-700"
                  : detailsData?.status ==
                    "resolved" || status == "resolved"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-700"

                    : ""
                }
                outline-none border border-zinc-200 rounded-md  placeholder-zinc-600 text-zinc-900 text-sm font-normal max-w-[202px] w-full px-4 py-[13px] icon-change`}
            >

              {
                statusList?.map(item => {
                  return (
                    <option
                      selected={item.name == detailsData.status}
                      value={item.name} key={item.id}
                    >
                      {item.name}
                    </option>
                  )
                })
              }
            </select>

          </div>
          <>
            <div
              className={`flex flex-col gap-4 items-start p-4 bg-zinc-50 rounded-lg border border-zinc-200`}
            >
              <p
                className={`text-lg leading-[27px] font-bold`}
              >
                {detailsData?.subject}
              </p>
              <div
                className={`w-full flex flex-col`}
              >

                <div
                  className={`mt-2 outline-none border bg-white border-zinc-200 rounded-md placeholder-zinc-600  text-zinc-700 w-2/4 text-xs leading-[150%] font-normal py-[14px] px-[14px] `}
                >
                  {detailsData?.description}
                </div>
              </div>


            </div>
            <form

              className={`flex flex-col gap-6`}
            >
              <div className={`w-full flex flex-col h-full max-h-[600px]`}>
                <label className="text-xs font-semibold leading-[150%] text-black">
                  Reply to Issue
                </label>
                <textarea
                  onChange={(e) => { setConversation(e.target.value) }}
                  className={`mt-2 outline-none border  bg-white border-zinc-200 rounded-md m placeholder-zinc-600  text-zinc-700 max-w-[628px] break-words  w-full text-xs text-top font-normal py-5 px-5 `}
                  type="text-area"
                  value={conversation}
                  placeholder="Write your comment here...."
                  autoComplete="off"
                  rows="8" cols="50"
                />
              </div>
              <div>
                <div
                  className={`flex  gap-3 mt-3 w-full items-center justify-end max-w-[620px]`}
                >

                  <div
                    onClick={() => {
                      setModalDetail(false)
                    }}
                    className={`cursor-pointer text-xs leading-[18px] font-semibold py-2 px-3 text-rose-600 rounded-md border border-rose-600`}
                  >
                    Cancel
                  </div>
                  <div
                    onClick={(e) => {
                      submitHandler(e)
                    }}
                    className={` cursor-pointer py-2 border text-white ${loader ? "bg-white" : "bg-black"}  border-black rounded-md`}
                  >
                    {loader ? (
                      <div className="flex w-[92px] items-center justify-center">
                        <BlackSpinner
                          width="20"
                          height="20"
                        />
                      </div>
                    ) : (
                      <>

                        <p
                          className={`text-xs leading-[18px] text-center px-8 font-semibold`}
                        >
                          Post
                        </p>
                      </>
                    )}
                  </div>


                </div>

                {allTickets[0]?.conversations?.length ? <div className="my-10 w-full rounded-xl border px-4 py-6 text-gray-700">
                  <div className="mb-5">
                    <div className="flex items-center">
                      <div class="h-10 w-10 rounded-full border border-black object-cover flex items-center justify-center" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user x2l:w-[21px] x2l:h-[21px] w-[15.75px] h-[15.75px]" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx={12} cy={7} r={4} />
                          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                      </div>



                      <p className="ml-4 w-56">
                        <strong className="block font-medium text-gray-700">Admin</strong>
                        <span className="truncate text-sm text-gray-400">Replied to <a href="#" class="font-medium text-blue-600">{detailsData?.subject}</a></span>
                      </p>
                    </div>
                  </div>
                  <div className="mb-3">{detailsData?.subject}</div>

                  {allTickets[0].conversations.map((item) => {
                    return (
                      <div className={`flex ${item.role == "ADMIN" ? "justify-start" : "justify-start flex-row-reverse"}  `}>
                        <div class="h-10 w-10 rounded-full border border-black object-cover flex items-center justify-center mx-2" >
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user x2l:w-[21px] x2l:h-[21px] w-[15.75px] h-[15.75px]" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx={12} cy={7} r={4} />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                          </svg>
                        </div>
                        <div className={`rounded-lg w-fit ${item.role=="ADMIN"? "bg-black text-white":"bg-gray-50"} py-2 px-4 mb-4`}>
                          <strong className={`block font-medium  ${item.role=="ADMIN"? " text-white":"text-gray-700"}`}>{item.role=="ADMIN"?"Admin":"User"}</strong>

                          <p className="">{item.message}.</p>
                          <p className="mb-2 text-gray-500">You commented on Sep 4</p>
                        </div>
                      </div>
                    )
                  })}

                </div> : ""}

              </div>
            </form>
          </>
        </div>
      </div>
    </>
  )
}

export default Index