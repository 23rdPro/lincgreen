"use client";
import { makeTime } from "@/app/utils/consts";
import Image from "next/image";
import PropType from "prop-types";
const BlogSidebar = ({ posts }: any) => {
  return (
    <div className="mt-3">
      {posts?.map(( post: any, index: number) => (
        <div key={index++} className="post-item mt-3">
          <Image
            unoptimized
            src={`https://${post.fields.coverImage.fields.file.url}`} 
            alt="" 
            width={80}
            height={80}
          />
          <div>
            <h4><a href="blog-details.html">{post.fields.title}</a></h4>
            <time dateTime={`${makeTime({ timestamp: post.sys.updatedAt })}`}>
              {makeTime({ timestamp: post.sys.updatedAt })}
            </time>
          </div>
        </div>
      ))}
    </div>
  )
};
BlogSidebar.propTypes = {
  posts: PropType.any.isRequired
}
export default BlogSidebar;