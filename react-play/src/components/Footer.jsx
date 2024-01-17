import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend, AiFillYoutube, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Footer = () => {
    return (
        <Box bg={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'} >

            <Stack direction={['column', 'row']}>
                <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                    <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', 'left']}>
                        Subscribe to get Updates
                    </Heading>
                    <HStack borderBottom={'2px solid white'} p={'2'}>
                        <Input placeholder={'Enter your email here..'} border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none' />
                        <Button p={'0'} color={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                            <AiOutlineSend />
                        </Button>
                    </HStack>
                </VStack>


                <VStack w={'full'} borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']}>
                    <Heading textTransform={'uppercase'} textAlign={'center'}>
                        REACT TUBE
                    </Heading>
                    <Text >React Tube is by Design Subham Inc.<br></br>

                        Copyright © 2024 Design Subham Inc.<br></br> All rights reserved.</Text>
                </VStack>


                <VStack w={'full'} >
                    <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', 'left']}>Social media</Heading>

                    <Button variant={'link'}  >
                        <a href="https://youtube.com/@subhamdash-wu6sf?si=ffvS2-TVl3K2EAtZ">
                            <AiFillYoutube size={'50'} color='white' />
                            <span colorScheme='whiteAlpha'
                            >Youtube{'\u00a0'}</span>
                        </a>
                    </Button>
                    <Button variant={'link'}>
                        <a href="https://www.linkedin.com/in/-subham-dash"  >
                            <AiFillLinkedin size={'50'} color='white' />
                            <span colorScheme='whiteAlpha'>{'\u00a0'}LinkedIn</span>
                        </a>
                    </Button>
                    <Button variant={'link'}  >
                        <a href="https://github.com/Subham-0" >
                            <AiFillGithub size={'50'} color='white' />
                            <span colorScheme='whiteAlpha'>Github{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}</span>
                        </a>
                    </Button>

                </VStack>

            </Stack>


        </Box >
    )
}

export default Footer