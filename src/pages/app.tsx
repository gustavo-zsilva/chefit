import Head from 'next/head';
import Image from 'next/image';

import { FiArrowRight } from 'react-icons/fi';

import { Box, Heading, Text, Flex, Grid, GridItem, Tag, Skeleton, SkeletonText } from '@chakra-ui/react';

import { Layout } from "../components/Layout";
import { RecipeCard } from '../components/RecipeCards';

export default function App() {
    return (
        <Layout>
            <Head>
                <title>Chef.it | Home</title>
            </Head>

            <Grid templateColumns="repeat(4, 1fr)" gap={4} maxW="100%">
                <GridItem display="flex" justifyContent="space-between" colSpan={4} h={400} border="1px solid #e4e4e4" borderRadius={4}>
                    <Flex flex={2} flexDirection="column" justifyContent="space-between" borderRight="1px solid #e4e4e4">
                        <Box p={4} >
                            <Heading 
                                as="h3"
                                p="2px 8px"
                                textTransform="uppercase"
                                fontStyle="italic"
                                w="fit-content"
                                mb={2}
                                fontSize="1.4rem"
                                color="#6C63FF"
                                borderRadius={2}
                                fontWeight="bold"
                            >
                                Receita do dia
                            </Heading>
                            <Heading as="h2" fontSize="2.6rem">Bolo de chocolate</Heading>
                        </Box>
                        
                        <Box m={0} alignItems="center" borderBottomLeftRadius={4} p={4} bg="#6C63FF" color="#FFF" fontWeight="medium">
                           
                            Cooker:
                            <Tag colorScheme="whiteAlpha" ml={2} cursor="pointer">
                                Usuário1
                            </Tag>
                           
                        </Box>
                    </Flex>
                    <Box flex={3} boxShadow="-6px 0 6px #00000010" h="100%" w="100%">
                        <Skeleton>
                            <Image src="/assets/chocolate-cake.jpeg" layout="fill" objectFit="cover" />
                        </Skeleton>
                    </Box>
                </GridItem>
                <Box
                    border="1px solid #e4e4e4"
                    borderRadius={4}
                    maxW="100%"
                    textOverflow="ellipsis"
                    cursor="pointer"
                >
                    <Box maxH={150} overflow="hidden">
                        <Skeleton isLoaded>
                            <Image
                                src="/assets/chocolate-cake.jpeg"
                                width={310}
                                height={200}
                                objectFit="cover"
                            />
                        </Skeleton>
                    </Box>

                    <Box p={4}>
                        <SkeletonText fontSize="1.6rem" isLoaded>
                            Receita de bolo de chocolate
                        </SkeletonText>
                    </Box>

                    <Flex
                        borderTop="1px solid #e4e4e4"
                        p="0.6rem 1rem"
                        alignItems="center"
                        justifyContent="space-between"
                        _hover={{ background: '#f5f4f4', transform: { scale: 1.1 }, transition: '.2s' }}
                    >
                        <SkeletonText noOfLines={1} isLoaded>
                            <Tag colorScheme="blackAlpha">
                                Usuário1
                            </Tag>
                        </SkeletonText>
                        <FiArrowRight size={26} />
                    </Flex>
                </Box>
            </Grid>
        </Layout>
    );
}