import { withLogMessage } from '@/hoc/withLogMessage'

import { Button as OriginalButton } from './Button'
import { Card as OriginalCard } from './Card'
import { CardBody as OriginalCardBody } from './Card'
import { CardFooter as OriginalCardFooter } from './Card'
import { CardHeader as OriginalCardHeader } from './Card'
import { Comment as OriginalComment } from './Comment'
import { Content as OriginalContent } from './Content'
import { Counter as OriginalCounter } from './Counter'
import { Filters as OriginalFilters } from './Filters'
import { Input as OriginalInput } from './Input'
import { Layout as OriginalLayout } from './Layout'
import { Post as OriginalPost } from './Post'
import { PostDetails as OriginalPostDetails } from './PostDetails'

export const Button = withLogMessage(OriginalButton, 'Button')
export const Card = withLogMessage(OriginalCard, 'Card')
export const CardHeader = withLogMessage(OriginalCardHeader, 'CardHeader')
export const CardBody = withLogMessage(OriginalCardBody, 'CardBody')
export const CardFooter = withLogMessage(OriginalCardFooter, 'CardFooter')
export const Comment = withLogMessage(OriginalComment, 'Comment')
export const Content = withLogMessage(OriginalContent, 'Content')
export const Counter = withLogMessage(OriginalCounter, 'Counter')
export const Filters = withLogMessage(OriginalFilters, 'Filters')
export const Input = withLogMessage(OriginalInput, 'Input')
export const Layout = withLogMessage(OriginalLayout, 'Layout')
export const Post = withLogMessage(OriginalPost, 'Post')
export const PostDetails = withLogMessage(OriginalPostDetails, 'PostDetails')
