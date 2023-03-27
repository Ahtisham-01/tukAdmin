import Head from 'next/head'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import Analytics from '../components/analyticsData'
import userAccess from "../helper/access"
import BlackSpinner from '../components/reusableUi/blackSpinner'
const analytics = () => {
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
    return (
        <>
            <Head>
                <title>TUK Analytics</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width "
                />
                <meta
                    property="og:title"
                    content="TUK ADMIN PANEL"
                />
            </Head>
            {loading ? (
                <div className="w-full mx-auto flex justify-center items-center h-screen">
                    <BlackSpinner width="60" height="60" />
                </div>
            ) : access ? (
                <Analytics />
            ) : (
                <div className="w-screen h-screen flex items-center justify-center">
                    <h2 className="text-4xl text-zinc-800 font-semibold">
                        You are not authorized to access this page!
                    </h2>
                </div>
            )}
        </>
    )
}

export default analytics