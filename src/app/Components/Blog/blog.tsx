import { makeTime } from "@/app/utils/consts";
import { getBlogs } from "@/app/utils/libs/contentful";
import Image from "next/image";
import Link from "next/link";
const Blog = async () => {
  const blogs: any = await getBlogs()
  return (
    <section id="blog" className="blog">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4 posts-list">
          {blogs?.map((blog: any, index: number) => (
            <div key={index++} className="col-xl-4 col-md-6">
            <article>
              <div className="post-img">
                <Image 
                  width={600}  
                  height={400} 
                  src="/assets/img/blog/blog-1.jpg" 
                  alt="" 
                  className="img-fluid" 
                />
              </div>
              <h2 className="title">
                <Link href={`/pages/blog/${blog.sys.id}`}>
                  {blog.fields.title}
                </Link>
              </h2>
              <div className="d-flex align-items-center">
                <Image 
                  width={50} 
                  height={50} 
                  src="/assets/img/blog/blog-author.jpg" 
                  alt="" 
                  className="img-fluid post-author-img flex-shrink-0" 
                />
                <div className="post-meta">
                  <p className="post-author-list">
                    <Link 
                      href={`${blog.fields.author.fields.link}`}
                    >{blog.fields.author.fields.name}</Link>
                  </p>
                  <p className="post-date">
                    <span>
                      Updated 
                    <time style={{ marginLeft: "3px" }}
                      dateTime={`${makeTime({ timestamp: blog.sys.updatedAt})}`}>
                        {makeTime({ timestamp: blog.sys.updatedAt })}
                    </time>
                    </span>
                  </p>
                </div>
              </div>
            </article>
          </div>
          ))}
        </div>
        <div className="blog-pagination">
          <ul className="justify-content-center">
            <li><a href="#">1</a></li>
            <li className="active"><a href="#">2</a></li>
            <li><a href="#">3</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Blog;