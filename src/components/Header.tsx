import Link from 'next/link';

import { Flex, Button, Box, ButtonGroup, Text, Image } from '@chakra-ui/react';


export function Header() {
    return (
        <Box w="100%" borderBottom="1px solid #e7e7e7">
            <Flex justifyContent="space-between" alignItems="center" m="0 20rem" p="1rem 0">
                <section>
                    <Link href="/">
                        <Button bg="transparent" border="0" _hover={{background: 'none'}} p="1rem 1rem 1rem 0">
                            <Image
                                boxSize="2.6rem"
                                src="/assets/chef.svg"
                                alt="Chef.it Icon"
                            />
                            <Text ml={4}>Chef.it</Text>
                        </Button>
                    </Link>
                </section>
                <ButtonGroup color="#FFF">
                    <Button bg="#6C63FF"> 
                        Login
                    </Button>
                    
                    <Button bg="#6C63FF">
                        Sign Up
                    </Button>
                </ButtonGroup>
            </Flex>
        </Box>
    );
}