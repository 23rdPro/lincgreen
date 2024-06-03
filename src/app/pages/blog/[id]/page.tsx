import BlogSidebar from "@/app/Components/BlogSidebar";
import Renderer from "@/app/Components/Renderer";
import { makeTime } from "@/app/utils/consts";
import { getBlogs, getEntry } from "@/app/utils/libs/contentful";
import Image from "next/image";
export default async function Post({ params }: { params: { id: string } }) {
  const post: any = await getEntry(params.id)
  const posts: any = await getBlogs()
  return (
    <main id="main">
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-8">
              <article className="blog-details">
                <div className="post-img">
                  <Image 
                    unoptimized
                    width={900} 
                    height={700} 
                    src={`https://${post.coverImage.fields.file.url}`}
                    alt="" 
                    className="img-fluid" 
                  />
                </div>
                <h2 className="title">{post.title}</h2>
                <div className="meta-top">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person"></i> 
                      <a href={`${post.author.fields.link}`}>{post.author.fields.name}</a>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i> 
                      <a>
                        <time dateTime={`${makeTime({ timestamp: post.author.sys.updatedAt })}`}>
                          {makeTime({ timestamp: post.author.sys.updatedAt })}
                        </time>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <Renderer richText={post.body} />
                </div>
                <div className="meta-bottom">
                  <i className="bi bi-tags"> </i>
                  <ul className="tags">
                    {post.tags.map((tag: any, index: number) => (
                      <li key={index++}><a href={tag.fields.link}>{tag.fields.name}</a></li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar-item recent-posts">
                  <h3 className="sidebar-title">Recent Posts</h3>
                  <BlogSidebar posts={posts} />
                </div>
                <div className="sidebar-item tags">
                  <h3 className="sidebar-title">Tags</h3>
                  <ul className="mt-3">
                    {post.tags.map((tag: any, index: number) => (
                      <li key={index++}><a href={tag.fields.link}>{tag.fields.name}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
};