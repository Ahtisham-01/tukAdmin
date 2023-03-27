import Link from "next/link"
import React, { useState, useEffect } from "react"
import Input from "../reusableUi/inputLogin"
import { useRouter } from "next/router"
import Spinner from "../reusableUi/spinner"
// import { Axios } from "../../helpers/config"
import jwt_decode from "jwt-decode"
import { useLoginUserMutation } from "../../features/authSlice"
import { useDispatch, useSelector } from "react-redux"
import { setRole, setToken } from "../../features/dataSlice"
import { useGetAnalyticsReportQuery } from "../../features/api/dataApiSlice"

const LoginForm = () => {
    const [logincreds] = useLoginUserMutation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const { token } = useSelector(({ dataSlice }) => dataSlice)
    const dispatch = useDispatch()
    const router = useRouter()
    console.log(token, 'sadas')

    // Form Submissions Handler
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError("")
        const payload = {
            email: email,
            password: password
        }
        logincreds(payload).then((res) => {
            if (res?.data?.access_token) {
                dispatch(setToken(res?.data?.access_token))
                dispatch(setRole("admin"))
                localStorage.setItem("auth", res?.data?.access_token)
                localStorage.setItem("role", "admin")
                router.push("/analytics")
            }
            if (res?.error?.status == 401)
                setError("Invalid Credentials please try again")
            setLoading(false)
        })
            .catch((err) => {
                console.error(err, "0000000000000")
                // setError(err?.error?.data?.message)
                setLoading(false)
                dispatch(setToken(null))
            })
        // try {
        //     const res = await Axios.post("/auth/login", {
        //         userEmail: email,
        //         password
        //     })

        //     if (res.status === 200) {
        //         // console.log("res", res)
        //         const decoded = jwt_decode(res.data.token)
        //         localStorage.setItem(
        //             "auth",
        //             JSON.stringify({
        //                 token: res.data.token
        //             })
        //         )
        //         console.log("decoded", decoded.user)
        //         localStorage.setItem("role", decoded?.user?.role)
        //         localStorage.setItem("UID", decoded?.user?.id)
        //         localStorage.setItem("mail", decoded?.user?.userEmail)
        //         dispatch(
        //             login({
        //                 token: res.data.token
        //             })
        //         )
        //         router.push("/analytics")
        //         setTimeout(() => {
        //             setLoading(false)
        //         }, 500)
        //     }
        // } catch (error) {
        //     setLoading(false)
        //     if (error.message === "Request failed with status code 401") {
        //         setError("Invalid Credentials. Please try again.")
        //     }
        //     if (error.message === "Network Error") {
        //         setError("Internet not found. Please check your connection")
        //     }
        //     setTimeout(() => {
        //         setError("")
        //     }, 4000)
        // }
    }

    return (
        <>
            <main className="">
                <div className="w-full flex h-full ">
                    <div className="bg-zinc-50 w-[50%] px-10 2xl:px-24">
                        <div className="flex flex-col justify-center items-center ">
                            <div className="pt-[291px]">
                                <div className="pb-[34px]">
                                    <svg className=" w-full  items-center dark:text-white" xmlns="http://www.w3.org/2000/svg" width="86" height="58" viewBox="0 0 86 58" fill="none"><path d="M42.4701 4.49449H47.7911V0H42.4701V4.49449Z" fill="#E2E2E2"></path><path d="M47.7914 4.49449H53.1124V0H47.7914V4.49449Z" fill="#FF3565"></path><path d="M42.4701 8.98888H47.7911V4.49438H42.4701V8.98888Z" fill="#FF3565"></path><path d="M47.7914 8.98888H53.1124V4.49438H47.7914V8.98888Z" fill="#E2E2E2"></path><path d="M75.0956 23.7122L86.0001 8.98898H73.2641L65.5874 20.8944V0H55.0228V39.1479H65.5874V32.7501L67.6415 29.9918L72.5134 39.1479H85.485L75.0956 23.7122Z" fill="currentColor"></path><path d="M42.5478 28.2899C42.5421 28.2956 42.5356 28.3021 42.5307 28.3086C42.4859 30.6529 40.5794 32.5423 38.2237 32.5423C35.8403 32.5423 33.9085 30.6105 33.9085 28.2271V0H23.4141V29.1628C23.4141 36.1931 29.8909 39.143 34.7815 39.143C39.7708 39.143 41.1133 37.9766 42.5478 36.7026V39.1479H53.1124V10.7993H42.5478V28.2899Z" fill="#FF3565"></path><path d="M42.4704 28.8132C42.1827 30.9153 40.4058 32.5423 38.2237 32.5423C35.8403 32.5423 33.9085 30.6105 33.9085 28.2271V0H23.4141V29.1628C23.4141 36.1931 29.8909 39.143 34.7815 39.143C39.6811 39.143 41.0644 38.0173 42.4704 36.7702V28.8132Z" fill="currentColor"></path><path d="M42.5479 39.1479H53.1124V38.0271H42.5479V39.1479Z" fill="#FF3565"></path><path d="M42.4701 39.1479H53.1121V10.7993H42.4701V39.1479Z" fill="#FF3565"></path><path d="M0 0V9.76985H10.5059V39.1479H21.6851V9.78371H23.4139V10.3298H33.9084V0H0Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M16.6109 49.089C16.6109 49.6367 16.1675 50.0801 15.6198 50.0801C15.085 50.0801 14.6416 49.6367 14.6416 49.089C14.6416 48.5412 15.085 48.1108 15.6198 48.1108C16.1675 48.1108 16.6109 48.5412 16.6109 49.089ZM4.73414 49.9888V57.0574H2.86918V49.9888H0.32605V48.3586H7.26423V49.9888H4.73414ZM11.4745 56.2489C10.9789 56.8749 10.3007 57.2139 9.53129 57.2139C7.95324 57.2139 6.74037 56.0141 6.74037 53.9014C6.74037 51.8538 7.92716 50.6018 9.53129 50.6018C10.2747 50.6018 10.9659 50.9148 11.4745 51.5669V50.7583H13.1438V57.0574H11.4745V56.2489ZM10.0532 55.7402C9.10112 55.7402 8.44903 54.9969 8.44903 53.9013C8.44903 52.8189 9.10112 52.0755 10.0532 52.0755C10.6009 52.0755 11.2008 52.3885 11.4747 52.8058V55.0229C11.2008 55.4403 10.6009 55.7402 10.0532 55.7402ZM16.4546 57.0574V50.7583H14.7983V57.0574H16.4546ZM21.265 56.8096C21.0172 57.0314 20.5608 57.2139 19.8826 57.2139C18.7219 57.2139 18.1089 56.614 18.1089 55.4794V48.3586H19.7652V55.036C19.7652 55.4403 19.9739 55.7402 20.3391 55.7402C20.5869 55.7402 20.8216 55.6489 20.9129 55.5446L21.265 56.8096ZM24.8752 57.0574L26.2055 52.7667L27.5357 57.0574H29.3094L31.2265 50.7583H29.492L28.3182 54.9969L26.9358 50.7583H25.4621L24.0797 54.9969L22.9059 50.7583H21.1844L23.1016 57.0574H24.8752ZM33.8718 49.089C33.8718 49.6367 33.4284 50.0801 32.8807 50.0801C32.346 50.0801 31.9025 49.6367 31.9025 49.089C31.9025 48.5412 32.346 48.1108 32.8807 48.1108C33.4284 48.1108 33.8718 48.5412 33.8718 49.089ZM33.7155 57.0574V50.7583H32.0592V57.0574H33.7155ZM37.0257 52.8059V57.0574H35.3694V50.7583H37.0257V51.5669C37.43 51.0974 38.2125 50.6018 39.2298 50.6018C40.6252 50.6018 41.2904 51.3843 41.2904 52.6102V57.0574H39.621V53.2493C39.621 52.3755 39.1646 52.0755 38.4603 52.0755C37.8082 52.0755 37.3126 52.4407 37.0257 52.8059ZM45.3183 57.2139C46.0878 57.2139 46.766 56.8749 47.2616 56.2489V57.0574H48.9309V48.3586H47.2616V51.5669C46.766 50.9148 46.0617 50.6018 45.3183 50.6018C43.7142 50.6018 42.5274 51.8538 42.5274 53.9014C42.5274 56.0141 43.7403 57.2139 45.3183 57.2139ZM44.2357 53.9013C44.2357 54.9969 44.8878 55.7402 45.8398 55.7402C46.3876 55.7402 46.9875 55.4403 47.2613 55.0229V52.7928C46.9875 52.3755 46.3876 52.0755 45.8398 52.0755C44.8878 52.0755 44.2357 52.8189 44.2357 53.9013ZM57.9127 57.2139C60.5601 57.2139 61.8382 55.7272 61.8382 53.5753V48.3586H59.9472V53.5231C59.9472 54.736 59.256 55.5707 57.9127 55.5707C56.5694 55.5707 55.8651 54.736 55.8651 53.5231V48.3586H53.9871V53.5753C53.9871 55.7272 55.2652 57.2139 57.9127 57.2139ZM65.4225 48.3586V57.0574H63.5706V48.3586H65.4225ZM72.1346 57.0574V55.4403L72.891 54.6317L74.5604 57.0574H76.634L74.0648 53.6144L76.5557 50.7583H74.5212L72.1346 53.5623V48.3586H70.4783V57.0574H72.1346ZM79.2923 49.089C79.2923 49.6367 78.8489 50.0801 78.3012 50.0801C77.7665 50.0801 77.3231 49.6367 77.3231 49.089C77.3231 48.5412 77.7665 48.1108 78.3012 48.1108C78.8489 48.1108 79.2923 48.5412 79.2923 49.089ZM79.136 57.0574V50.7583H77.4797V57.0574H79.136ZM84.2856 56.8096C84.0378 57.0313 83.5944 57.2139 82.9031 57.2139C81.7424 57.2139 81.1295 56.614 81.1295 55.4794V52.2059H80.0861V50.7583H81.1295V49.0368H82.7858V50.7583H84.0639V52.2059H82.7858V55.036C82.7858 55.4403 82.9944 55.7402 83.3596 55.7402C83.6074 55.7402 83.8421 55.6489 83.9334 55.5446L84.2856 56.8096Z" fill="currentColor"></path></svg>
                                </div>

                                <div className="mb-8">
                                    <p className="w-full text-black text-[32px] leading-8 font-bold text-center justify-center items-center manrope_font pb-4">
                                        Login to your account
                                    </p>
                                    <p className=" text-zinc-600 text-xs leading-3 font-normal text-center manrope_font">
                                        Please login to get access to the
                                        dashboard.
                                    </p>
                                </div>

                                <div className="">
                                    <form onSubmit={onSubmitHandler}>
                                        <Input
                                            label="Email"
                                            placeholder="Enter your email"
                                            changeHandler={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            value={email}
                                            required={true}
                                            type="email"
                                        />
                                        <div className="mt-[4px]">
                                            <Input
                                                label="Password"
                                                placeholder="Enter your password"
                                                changeHandler={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                                value={password}
                                                type="password"
                                                required={true}
                                            />
                                        </div>
                                        <div className="form-check mb-8 cursor-pointer flex">
                                            <input
                                                className="form-check-input accent-black h-4 w-4 border border-zinc-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 flex  align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="checkbox"
                                                id="flexCheckDefault"
                                            />
                                            <label
                                                className="form-check-label inline-block text-zinc-600 text-sm leading-[14px] pt-[2px] font-normal manrope_font cursor-pointer"
                                                htmlFor="flexCheckDefault"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                        <button
                                            disabled={loading}
                                            type="submit"
                                            className=" w-[308px] md:w-[378px]  xl:w-[395px] rounded-lg bg-zinc-900 text-white text-base leading-6 ibm_fontFont6 py-[10px]  manrope_font transform duration-300  ease-in-out "
                                        >
                                            {loading ? (
                                                <Spinner height={"20px"} />
                                            ) : (
                                                "Login"
                                            )}
                                        </button>
                                        {(
                                            <p className="text-red-600 text-xs font-medium mt-2 text-center">
                                                {error}
                                            </p>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right-side image login page */}
                    <div className="mx-auto container w-[50%] min-h-screen bg-[url('/images/line.png')] bg-zinc-900 z-50 object-cover ">
                        <div className="w-full pt-[130px] pl-[72px]">
                            <p className="w-full text-zinc-50 text-[32px] leading-[42px] font-bold items-center manrope_font pb-4">
                                Tuk Management System
                            </p>
                            <p className=" text-zinc-400 text-base leading-4 font-normal items-center manrope_font pb-16">
                                All the tings you need to manage your business
                            </p>
                        </div>
                        <div className="">
                            <div className="login-rec ">
                                <img
                                    className="w-full h-fit py-[16px] pl-[14px] "
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/moda-bg.png"
                                    alt="login image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default LoginForm
