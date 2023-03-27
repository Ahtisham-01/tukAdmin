import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
const base = process.env.NEXT_PUBLIC_BASE_URL
export const authProfile = createApi({
    reducerPath: "authProfile",
    baseQuery: fetchBaseQuery({
        baseUrl: base
    }),
    tagTypes: ["login"],
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (loginParams) => ({
                url: `auth/login`,
                method: "POST",
                body: loginParams
            }),
            invalidatesTags: ["login"]
        }),
        //Social log in

        // getSocialLogin: builder.mutation({
        //     query: (loginParams) => ({
        //         url: `/auth/session`,
        //         method: "POST",
        //         body: loginParams
        //     })
        // }),

        // getSocialTwitterLogin: builder.mutation({
        //     query: (loginParams) => ({
        //         url: `/auth/socialLogin`,
        //         method: "POST",
        //         body: loginParams
        //     })
        // })
    })
})
export const {
    // useLazyGetProfileQuery,
    useLoginUserMutation,
    // useGetSocialLoginMutation,
    // useGetSocialTwitterLoginMutation,
} = authProfile