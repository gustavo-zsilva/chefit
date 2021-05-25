import { ReactNode } from 'react';

import { Flex, Box } from '@chakra-ui/react';

import { Header } from './Header';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div>
            <Header />

            <Flex direction="column" maxW="80rem" m="4rem auto">
                {children}
            </Flex>
        </div>
    )
}