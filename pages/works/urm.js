import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Unlimited Register Machine">
      <Container>
        <Title>
          Unlimited Register machine <Badge>2024</Badge>
        </Title>
        <P>
        A theoretical model of computation used to perform basic arithmetic
            operations. It illustrates how simple instructions can form the
            basis of complex algorithms.
        </P>
        <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/asparagus0161/unlimited-register-machine">
          https://github.com/asparagus0161/unlimited-register-machine <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java</span>
        </ListItem>
      </List>
      <WorkImage src="/works/urm.png" alt="URM" />
      </Container>
    </Layout>
  )
}

export default Work