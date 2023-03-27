import React, { useEffect, useRef, useState } from "react"
import Input from "../../reusableUi/inputLogin"
import Spinner from "../../reusableUi/spinner"

//Code editor
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css';
// import "codemirror/mode/javascript/javascript";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from '@prismjs/components/prism-core';
import '@prismjs/components/prism-clike';
import '@prismjs/components/prism-javascript';
import '@prismjs/themes/prism.css';


// import { UnControlled as CodeMirror } from 'react-codemirror2'

import { useCreateIntegrationMutation, useGetAllComponentsQuery, useUpdateIntegrationMutation } from "../../../features/api/dataApiSlice"

const Index = ({ setaddIntegration, addIntegration, customerData, setIntegrationItem, IntegrationItem }) => {
    // license info states
    const [framework, setFramework] = useState("")
    const [componentId, setComponentId] = useState("")
    const [code, setCode] = useState("")
    const [loader, setLoader] = useState(false)
    //Create license
    const [createIntegration] = useCreateIntegrationMutation()
    const [Message, setMessage] = useState("")
    //update license
    const [updateIntegrration] = useUpdateIntegrationMutation()
    const [memberId, setMemberId] = useState(-1)
    const { data: allComponents } = useGetAllComponentsQuery()
    // checking live data in inputs whether its filled or not
    //Code editor
    // const editor = useRef()
    // const wrapper = useRef()
    // const editorWillUnmount = () => {
    //     editor.current.display.wrapper.remove()

    // }

    // const handleChange1 = (editor, data, value) => {
    //     setCode(value);
    // };


    const validateForm = () => {
        if (
            framework === "" ||
            componentId === "" ||
            code === ""
        ) {
            return true
        } else return false
    }
    useEffect(() => {
        validateForm()
    }, [
        framework,
        componentId,
        code
    ])

    const submitHandler = async (e) => {
        setLoader(true)
        e.preventDefault()
        const data = {
            framework: framework.toLowerCase(),
            componentsId: parseInt(componentId),
            code: code,

        }
        const res = await createIntegration(data)

        if (res && res?.error) {
            setMessage(res?.error?.data?.message)
            setLoader(false)
            setTimeout(() => {
                setMessage("")
            }, [1000])
        } else {
            setFramework("")
            setComponentId("")
            setCode("")
            setMessage("Integration Created Successfully!")
            setMemberId(-1)
            setLoader(false)
            setTimeout(() => {
                setaddIntegration(false)
                setIntegrationItem("")
                setMessage("")
            }, [1000])
        }
    }

    const updateHandler = async (e) => {
        setLoader(true)
        e.preventDefault()
        const updateIntegrrationBody = {
            framework: framework,
            componentsId: parseInt(componentId),
            code: code,

        }
        const res = await updateIntegrration({
            updateIntegrrationBody,
            id: memberId

        })

        if (res && res?.error) {
            setMessage(res?.error?.data?.message)
            setLoader(false)
            setTimeout(() => {
                setMessage("")
            }, [1000])
        } else {
            setMessage("Integration Updated Successfully!")
            setMemberId(-1)
            setFramework("")
            setComponentId("")
            setCode("")
            setLoader(false)
            setTimeout(() => {
                setaddIntegration(false)
                setIntegrationItem("")
                setMessage("")
            }, [1000])
        }
    }
    useEffect(() => {
        if (IntegrationItem) {
            setFramework(IntegrationItem?.framework)
            setComponentId(IntegrationItem?.componentsId)
            setCode(IntegrationItem?.code)
            setMemberId(IntegrationItem?.id)
        } else {
            setIntegrationItem("")
        }
    }, [IntegrationItem?.id])

    useEffect(() => {
        if (addIntegration == false) {
            setMemberId(-1)
            setFramework("")
            setComponentId("")
            setCode("")
            setTimeout(() => {
                setIntegrationItem("")
            }, [1000])
        }
    }, [addIntegration])

    return (
        <>
            <main className="bg-white flex xl:flex-nowrap flex-col  flex-wrap pt-0 pb-7 gap-8">
                <div className="flex items-center  justify-end">
                    <button
                        onClick={() => {
                            setTimeout(() => {
                                setIntegrationItem("")
                            }, [1000])
                            setaddIntegration(false)
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
                        !IntegrationItem ? submitHandler(e) : updateHandler(e)
                    }}
                >
                    <div className="rounded-md w-full">
                        <div className="w-full pb-4 flex flex-col gap-2 border-b border-zinc-200">
                            <p className="text-xl font-extrabold leading-[20px]">
                                {!IntegrationItem
                                    ? "Create Integration"
                                    : "Update Integration"}
                            </p>
                        </div>

                        <div className="mt-5">
                            <Input
                                label="framework"
                                changeHandler={(e) =>
                                    setFramework(e.target.value)
                                }
                                value={framework}
                                placeholder="framework"
                                maxLength={40}
                                required={true}
                                framework={"text"}
                                autoComplete={"off"}
                                inputHeight={"h-[42px]"}
                            />
                        </div>
                        <div className="mt-5">
                            <label htmlFor="licensesId" className="pt-5 text-[#27272A] text-sm font-semibold leading-tight tracking-normal mb-2">Select Component</label>
                            <select name="type"
                                value={componentId ? componentId : ""}
                                onChange={(event) => setComponentId(event.target.value)}
                                className="mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-500 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow cursor-pointer">
                                <option value="" disabled hidden selected>Select Component</option>
                                {(allComponents == undefined || allComponents?.length == 0) && <option value="">No Component Exist</option>}

                                {
                                    allComponents?.map(it => {
                                        return (
                                            <option value={it.id} key={it.id}>{it?.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="mt-5">
                            {/* <Input
                                label="code"
                                changeHandler={(e) =>
                                    setCode(e.target.value)
                                }
                                value={code}
                                placeholder="code"
                                maxLength={40}
                                required={true}
                                framework={"text"}
                                autoComplete={"off"}
                                inputHeight={"h-[42px]"}
                                
                            /> */}
                            <label htmlFor="Description" className=" text-zinc-800 text-sm leading-[14px] font-medium manrope_font ">Code</label>
                            {/* <CodeMirror

                                value={code}
                                options={{
                                    mode: 'javascript',
                                    theme: 'default',
                                    lineNumbers: true
                                }}
                                onChange={handleChange1}
                                editorDidMount={(e) => editor.current = e}
                                editorWillUnmount={editorWillUnmount}
                            /> */}
                            <Editor
                                value={code}
                                onValueChange={code => setCode(code)}
                                highlight={code => highlight(code, languages.js)}
                                padding={10}
                                style={{
                                    fontFamily: '"Fira code", "Fira Mono", monospace',
                                    fontSize: 12,
                                }}
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
                            framework={"submit"}
                            // className={` px-5 py-3 mt-6 rounded-md text-white  transform duration-300  ease-in-out text-sm leading-[150%] font-medium`}
                            className={`${validateForm()
                                ? "bg-zinc-500"
                                : "bg-zinc-900 hover:bg-zinc-700  text-zinc-50"
                                } px-5 py-3 mt-6 rounded-md text-white  transform duration-300  ease-in-out text-sm leading-[150%] font-medium`}
                        >
                            {loader ? (
                                <Spinner height={"20px"} />
                            ) : (
                                (!IntegrationItem && "Create Integration") ||
                                (IntegrationItem && "Update Integration")
                            )}
                        </button>
                        <div
                            onClick={() => {
                                setTimeout(() => {
                                    setIntegrationItem("")
                                }, [400])
                                setaddIntegration(false)
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
