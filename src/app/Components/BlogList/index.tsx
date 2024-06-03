import { makeTime } from "@/app/utils/consts";
import Image from "next/image";
import Link from "next/link";
import PropType from "prop-types";
export default function BlogList({ blogs }: any) {
  return (
    <div className="row gy-4 posts-list">
      {blogs?.map((blog: any, index: number) => (
        <div key={index++} className="col-xl-4 col-md-6">
          <article>
            <div className="post-img">
              <Image 
                unoptimized
                width={600}  
                height={400} 
                src={`https://${blog.fields.coverImage.fields.file.url}`}
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
                unoptimized
                width={50} 
                height={50} 
                src={`https://${blog.fields.author.fields.image.fields.file.url}`}
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
  );
};
BlogList.propTypes = {
  blogs: PropType.any.isRequired
}