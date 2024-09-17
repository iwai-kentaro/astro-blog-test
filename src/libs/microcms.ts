import pkg from "microcms-js-sdk";
const { createClient } = pkg;

const client = createClient({
    serviceDomain: import.meta.env.SERVICE_DOMAIN,
    apiKey: import.meta.env.API_KEY,
});

export const getBlogs = async (queries) => {
    return await client.get({ 
        endpoint: "blogs", 
        queries,
    });
};


export const getBlogDetail = async (
    blogId:string , 
    queries?
) => {
    return await client.getListDetail({ 
        endpoint: "blogs", 
        contentId:blogId ,
        queries,
    });
};