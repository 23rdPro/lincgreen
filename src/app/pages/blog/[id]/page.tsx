import Breadcrumb from "@/app/Components/Breadcrumb";
import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import Renderer from "@/app/Components/Renderer";
import TopBar from "@/app/Components/TopBar";
import { makeTime } from "@/app/utils/consts";
import { getBlogs, getData, getEntry } from "@/app/utils/libs/contentful";
import Image from "next/image";
export default async function Post({ 
  params }: { 
    params: { id: string },
  }
) {
  const post: any = await getEntry(params.id)
  const posts = await getBlogs()
  const fields: any = await getData()
  const socials = fields.socials || []
  const email = fields.email || "info@lincgreen.org"
  return (
    <>
      <TopBar socials={socials} email={email} />
      <Header />
      <main id="main">
        <Breadcrumb />
        <section id="blog" className="blog">
          <div className="container" data-aos="fade-up">
            <div className="row g-5">
              <div className="col-lg-8">
                <article className="blog-details">
                  <div className="post-img">
                    <Image 
                      priority
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
                    <div className="mt-3">
                      {posts?.map(( pozt: any, index: number) => (
                        <div key={index++} className="post-item mt-3">
                          <Image 
                            priority
                            src={`https://${pozt.fields.coverImage.fields.file.url}`} 
                            alt="" 
                            width={80}
                            height={80}
                          />
                          <div>
                            <h4><a href="blog-details.html">{pozt.fields.title}</a></h4>
                            <time dateTime={`${makeTime({ timestamp: post.author.sys.updatedAt })}`}>
                              {makeTime({ timestamp: post.author.sys.updatedAt })}
                            </time>
                          </div>
                        </div>
                      ))}
                    </div>
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
      <Footer socials={socials} />
    </>
  )
};