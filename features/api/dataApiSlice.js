import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const base = process.env.NEXT_PUBLIC_BASE_URL

const dataApiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: base,
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem("auth")
            if (token) {
                headers.set("Authorization", `Bearer ${token}`)
            }
            headers.set("ngrok-skip-browser-warning", true)
        }
    }),
    tagTypes: [
        "allComponents",
        "subcategories",
        "license",
        "UiKits",
        "category",
        "templates",
        "integrations",
        "users",
        "tickets",
        "admins",
        "conversations",
        "analyticsReport"
    ],

    endpoints: (builder) => ({
        getAllComponents: builder.query({
            query: () => "components/all",
            providesTags: ["allComponents"]
        }),
        getAllUiKits: builder.query({
            query: () => "ui-kits/all",
            providesTags: ["UiKits"]
        }),
        getAllTemplates: builder.query({
            query: () => "templates/all",
            providesTags: ["templates"]
        }),
        getSubcategories: builder.query({
            query: () => "sub-category/all",
            providesTags: ["subcategories"]
        }),
        deleteComponent: builder.mutation({
            query: (compId) => ({
                url: `components/${compId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['allComponents']
        }),
        updateComponent: builder.mutation({
            query: ({ id, payload }) => ({
                url: `components/${id}`,
                method: 'PATCH',
                body: payload
            }),
            invalidatesTags: ['allComponents']
        }),
        createComponents: builder.mutation({
            query: (params) => ({
                url: 'components',
                method: 'POST',
                body: params
            }),
            invalidatesTags: ['allComponents']
        }),
        //Create conversation
        createConversation: builder.mutation({
            query: (params) => ({
                url: '/conversations',
                method: 'POST',
                body: params
            }),
            invalidatesTags: ['conversations', 'tickets']
        }),
        createTemplates: builder.mutation({
            query: (params) => ({
                url: 'templates',
                method: 'POST',
                body: params
            }),
            invalidatesTags: ['templates']
        }),
        updateTemplates: builder.mutation({
            query: ({ payload, id }) => ({
                url: `templates/${id}`,
                method: 'PATCH',
                body: payload
            }),
            invalidatesTags: ['templates']
        }),
        deleteTemplates: builder.mutation({
            query: (id) => ({
                url: `templates/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['templates']
        }),
        //Create license
        createLicense: builder.mutation({
            query: (payload) => ({
                url: `licenses`,
                method: "POST",
                body: payload
            }),
            invalidatesTags: ["license"]

        }),
        //update license
        updateLicense: builder.mutation({
            query: ({ updateLicenseBody, id }) => ({
                url: `licenses/${id}`,
                method: "PATCH",
                body: updateLicenseBody
            }),
            invalidatesTags: ["license"]

        }),
        //Delete license
        deleteLicense: builder.mutation({
            query: (id) => ({
                url: `licenses/${id}`,
                method: "Delete",
            }),
            invalidatesTags: ["license"]

        }),
        //Get all licenses
        getAllLicense: builder.query({
            query: () => "licenses/all",
            providesTags: ["license"]
        }),
        //Get all getAnalyticsReport

        getAnalyticsReport: builder.query({
            query: () => "analytics",
            providesTags: ["analyticsReport"]
        }),
        //Get all Category
        getAllCategory: builder.query({
            query: () => "/category/all",
            providesTags: ["category"]
        }),
        //createCategory
        createCategory: builder.mutation({
            query: (data) => ({
                url: `/category`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["category"]

        }),
        createSubCategory: builder.mutation({
            query: (data) => ({
                url: `sub-category`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["subcategories"]

        }),
        updateSubCategory: builder.mutation({
            query: ({ updateSubCategoryBody, id }) => ({
                url: `sub-category/${id}`,
                method: "PATCH",
                body: updateSubCategoryBody
            }),
            invalidatesTags: ["subcategories"]

        }),
        //update category
        updateCategory: builder.mutation({
            query: ({ updateCategoryBody, id }) => ({
                url: `category/${id}`,
                method: "PATCH",
                body: updateCategoryBody
            }),
            invalidatesTags: ["category"]

        }),
        //Delete cATEGORY
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `category/${id}`,
                method: "Delete",
            }),
            invalidatesTags: ["category"]

        }),
        deleteSubCategory: builder.mutation({
            query: (id) => ({
                url: `sub-category/${id}`,
                method: "Delete",
            }),
            invalidatesTags: ["subcategories"]

        }),
        createUiKits: builder.mutation({
            query: (params) => ({
                url: `ui-kits`,
                method: "POST",
                body: params
            }),
            invalidatesTags: ["UiKits"]
        }),
        updateUiKits: builder.mutation({
            query: ({ id, payload }) => ({
                url: `ui-kits/${id}`,
                method: "PATCH",
                body: payload
            }),
            invalidatesTags: ["UiKits"]
        }),
        deleteUiKits: builder.mutation({
            query: (id) => ({
                url: `ui-kits/${id}`,
                method: "Delete",
            }),
            invalidatesTags: ["UiKits"]
        }),

        //Create Integration
        createIntegration: builder.mutation({
            query: (payload) => ({
                url: `components-integration`,
                method: "POST",
                body: payload
            }),
            invalidatesTags: ["integrations"]

        }),
        //update Integration
        updateIntegration: builder.mutation({
            query: ({ updateIntegrrationBody, id }) => ({
                url: `components-integration/${id}`,
                method: "PATCH",
                body: updateIntegrrationBody
            }),
            invalidatesTags: ["integrations"]

        }),
        //Delete Integration
        deleteIntegration: builder.mutation({
            query: (id) => ({
                url: `/components-integration/${id}`,
                method: "Delete",
            }),
            invalidatesTags: ["integrations"]

        }),
        //Get all integrations
        getAllIntegration: builder.query({
            query: () => "/components-integration/all",
            providesTags: ["integrations"]
        }),
        //Get all getAllUsers

        getAllUsers: builder.query({
            query: () => "users/client/all",
            providesTags: ["users"]
        }),
        //Get all tickets
        getAllTicket: builder.query({
            query: () => "/tickets/all",
            providesTags: ["tickets"]
        })
        ,
        //Update ticket
        updateTicket: builder.mutation({
            query: ({ updateTicketBody, id }) => ({
                url: `tickets/${id}`,
                method: "PATCH",
                body: updateTicketBody
            }),
            invalidatesTags: ["tickets"]

        }),
        deleteTicket: builder.mutation({
            query: (id) => ({
                url: `tickets/${id}`,
                method: "Delete",
            }),
            invalidatesTags: ["tickets"]

        }),
        //delete user deleteUser
        deleteUsers: builder.mutation({
            query: (id) => ({
                url: `users/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["users", "admins"]

        }),
        deleteIntegrations: builder.mutation({
            query: (id) => ({
                url: `components-integration/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["integrations"]

        }),
        //Get all addLicenseToUser
        createAddLicenseToUser: builder.mutation({
            query: (params) => ({
                url: `users/addLicense`,
                method: "POST",
                body: params
            }),
            invalidatesTags: ["users"]

        }),
        // create admin
        createAdminUser: builder.mutation({
            query: (params) => ({
                url: `auth/admin`,
                method: "POST",
                body: params
            }),
            invalidatesTags: ["admins"]

        }),
        // updateUser 
        updateAdminUser: builder.mutation({
            query: ({ payload, id }) => ({
                url: `users/${id}`,
                method: "PATCH",
                body: payload
            }),
            invalidatesTags: ["admins", "users"]

        }),
        //Get all getAllAdmins
        getAllAdmins: builder.query({
            query: () => "users/admin/all",
            providesTags: ["admins"]
        }),
        //Get Conversation by id
        getTicketbyID: builder.query({
            query: (id) => `tickets/${id}`,
            providesTags: ["conversations", "tickets"]
        }),

    }),
})

export const {
    useGetAllComponentsQuery,
    useGetTicketbyIDQuery,
    useCreateAdminUserMutation,
    useUpdateAdminUserMutation,
    useDeleteIntegrationsMutation,
    useGetAllUsersQuery,
    useDeleteUsersMutation,
    useCreateAddLicenseToUserMutation,
    useGetAllAdminsQuery,
    useUpdateUiKitsMutation,
    useDeleteUiKitsMutation,
    useUpdateSubCategoryMutation,
    useCreateSubCategoryMutation,
    useCreateUiKitsMutation,
    useGetAllLicenseQuery,
    useGetAllCategoryQuery,
    useCreateLicenseMutation,
    useGetAllUiKitsQuery,
    useCreateCategoryMutation,
    useGetSubcategoriesQuery,
    useCreateComponentsMutation,
    useDeleteComponentMutation,
    useUpdateComponentMutation,
    useUpdateLicenseMutation,
    useUpdateCategoryMutation,
    useDeleteLicenseMutation,
    useDeleteCategoryMutation,
    useCreateTemplatesMutation,
    useUpdateTemplatesMutation,
    useGetAllTemplatesQuery,
    useDeleteSubCategoryMutation,
    useDeleteTemplatesMutation,
    useGetAllIntegrationQuery,
    useUpdateIntegrationMutation,
    useCreateIntegrationMutation,
    useCreateConversationMutation,
    useDeleteIntegrationMutation,
    useDeleteTicketMutation,
    useGetAllTicketQuery,
    useGetAnalyticsReportQuery,
    useUpdateTicketMutation,
} = dataApiSlice

export default dataApiSlice
