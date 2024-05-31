
import { BLOCKS, INLINES, Document } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import PropTypes from "prop-types"
import Image from 'next/image';
import Link from 'next/link';
const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p>{children}</p>,
    [BLOCKS.HEADING_1]: (node: any, children: any) => <h3>{children}</h3>,
    [BLOCKS.HEADING_2]: (node: any, children: any) => <h3>{children}</h3>,
    [BLOCKS.HEADING_3]: (node: any, children: any) => <h4>{children}</h4>,
    [BLOCKS.HEADING_4]: (node: any, children: any) => <h4>{children}</h4>,
    [BLOCKS.HEADING_5]: (node: any, children: any) => <h4>{children}</h4>,
    [BLOCKS.HEADING_6]: (node: any, children: any) => <h4>{children}</h4>,
    [BLOCKS.QUOTE]: (node: any, children: any) => <blockquote><p>{children}</p></blockquote>,
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      try {
        const { file, title } = node.data.target.fields;
        const fileURL = `https://${file.url}`
        return <Image unoptimized src={fileURL} alt={title} width={790} height={500} />
      } catch(error) {
        console.error(error, node)
        return null
      }
    },
    [INLINES.HYPERLINK]: (node: any, children: any) => {
      try {
        const { uri } = node.data;
        return (
          <Link href={uri} target="_blank" rel="noopener noreferrer">
            {children}
          </Link>
        )
      } catch(error) {
        console.error(error, node)
        return <span>{children}</span>
      }
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
      try {
        const {fields } = node.data.target;
        if (fields.file.contentType.includes('video')) {
          return (
            <video className="glightbox btn-watch-video d-flex align-items-center" controls>
              <source src={fields.file.url} type={fields.file.contentType} />
              Your browser does not support the video tag.
            </video>
          )
        }
      } catch(error) {
        console.error(error)
        return null;
      }
    }
  }
};
type RendererProps = {
  richText: Document;
};
const Renderer = ({ richText }: RendererProps) => {
  if (!richText || !richText.content) {
    console.error(richText)
    return null 
  }
  try {
    return <>{documentToReactComponents(richText, options)}</>
  } catch (error) {
    console.error(error)
    return null;
  }
};
Renderer.propTypes = {
  richText: PropTypes.any.isRequired
};
export default Renderer;