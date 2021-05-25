import Head from 'next/head';
import Link from 'next/link';

import { Box, Flex, Heading, Button, ButtonGroup, Text } from '@chakra-ui/react';

import { Layout } from '../components/Layout';

import { FiArrowRight } from 'react-icons/fi';

// import styles from '../styles/pages/Landing.module.css';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Landing | Chef.it</title>
      </Head>

      <Box display="flex" gridGap="4rem">
        <Flex flexDirection="column" maxW="35rem" justifyContent="space-between">
          <Box>
            <Heading mb={4}>Share your favorite cooking recipes</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloremque corrupti ut sed odit praesentium accusantium iusto. Velit voluptatibus, molestiae adipisci aspernatur reprehenderit aliquid veritatis facere saepe et sit voluptatem!
            </Text>
          </Box>
         
          <ButtonGroup size="lg">
            <Link href="/app">
              <Button flex="1" border="0" p="2rem" _hover={{background: '#5b54dd'}} bg="#6C63FF" color="#fff" variant="solid" rightIcon={<FiArrowRight size={32} />}>
                Access the platform
              </Button>
            </Link>
            
            <Link href="/signup">
              <Button variant="ghost" p="2rem">
                I don't have an account
              </Button>
            </Link>
          </ButtonGroup>
        </Flex>

        <div>
          <img src="/assets/donut.svg" alt="Donut Image" />
        </div>
      </Box>
    </Layout>
  )
}
