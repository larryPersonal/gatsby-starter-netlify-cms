import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import GalleryPagePreview from './preview-templates/GalleryPagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', GalleryPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
