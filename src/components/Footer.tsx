import Link from './lib/Link'
import siteMetadata from '../../data/siteMetadata'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col py-4 pb-14 lg:pb-2 items-center border-t border-black border-opacity-10">
        <div className="flex mb-2 space-x-2 text-sm text-gray-500">
          <Link href='/' className="hover:text-green-600 transition duration-200">{siteMetadata.title}</Link>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div>Website by:</div>
          <Link className="hover:text-green-600 transition duration-200" href={siteMetadata.devLink}>{siteMetadata.dev}</Link>
        </div>
      </div>
    </footer>
  )
}