import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="PDF Merger Tool">
      <Container>
        <Title>
          PDF Merger <Badge>2024</Badge>
        </Title>
        <P>
          A basic PDF merging tool made with Python backend combined with
          HTML/CSS and Javascript frontend
        </P>
        <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/asparagus0161/pdf-merger">
          https://github.com/asparagus0161/pdf-merger <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, eel</span>
        </ListItem>
      </List>
      <WorkImage src="/works/pdf-merger.png" alt="Pdf Merger" />
      </Container>
    </Layout>
  )
}

export default Work