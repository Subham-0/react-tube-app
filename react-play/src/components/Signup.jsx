import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom';

const Signup = () => {
    return (
        <Container maxW={'container.xl'} h={"120vh"} p={"16"}>

            <form>
                <VStack alignItems={'stretch'} spacing={"8"} w={['full', '96']} m={"auto"} my={"16"}>

                    <Heading textAlign={'center'}>REACT TUBE</Heading>
                    <Avatar alignSelf={"center"} boxSize={'32'} />

                    <Input placeholder={'Name'} type={'text'} focusBorderColor={"purple.500"} />

                    <Input placeholder={'Email'} type={'email'} focusBorderColor={"purple.500"} />

                    <Input placeholder={'Password'} type={'password'} focusBorderColor={"purple.500"} />



                    <Button colorScheme={'purple'} type={'submit'} >
                        Sign Up
                    </Button>

                    <Text textAlign={'right'}>Already Signed Up?{" "}
                        <Button variant={'link'} colorScheme={'purple'}>
                            <RouterLink to={'/login'}>LogIn</RouterLink>
                        </Button>
                    </Text>

                </VStack>
            </form>
        </Container>
    )
}



export default Signup