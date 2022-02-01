import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://61f7a5d239431d0017eaf92e.mockapi.io/",
  }),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => "/contacts",
      providesTags: ["Contact"],
    }),

    createContacts: builder.mutation({
      query: (name, number) => ({
        url: "./contacts",
        method: "POST",
        body: {
          name: name,
          phone: number,
        },
      }),
      invalidatesTags: ["Contact"],
    }),

    deleteContacts: builder.mutation({
      query: (contactId) => ({
        url: `./contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactsMutation,
  useCreateContactsMutation,
} = contactsApi;
