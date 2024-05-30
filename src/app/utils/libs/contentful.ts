import { createClient } from "contentful"
export const [spaceId, token, cmaToken] = [
  process.env.SPACE_ID,
  process.env.TOKEN,
  process.env.CMATOKEN
];
async function getClient() {
  const client = createClient({ 
    space: `${spaceId}`, accessToken: `${token}` 
  })
  return client
};
export async function getData() {
  const client = await getClient()
  try {
    const data = await client.getEntries({ content_type: "lincGreenProspects" })
    return data.items[0].fields;
  } catch (error) {
    console.error(error)
    return {};
  }
};
export async function getEntry(id: string) {
  const client = await getClient()
  try {
    const entry = await client.getEntry(id=id)
    return entry.fields
  } catch (error) {
    console.error(error)
    return {};
  }
};
export async function getBlogs() {
  const client = await getClient()
  try {
    const blogs = await client.getEntries({ content_type: "lincgreenBlog" })
    return blogs.items;
  } catch(error) {
    console.error(error)
  }
};