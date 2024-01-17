import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Videos = () => {
    const videoArr = [
        "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.jpg",
        "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"


    ];
    const [videoSrc, setVideosrc] = useState(videoArr[0]);



    return (

        <Stack direction={['column', 'row']} h={'100vh'}>
            <VStack w={'full'}>

                <video
                    controls
                    autoPlay
                    controlsList="nodownload"
                    src={videoSrc}
                    style={{
                        width: '100%',
                    }}
                ></video>
                <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'} >
                    <Heading>Sample video 1</Heading>
                    <Text>This is the decription of the video testing or demo propose </Text>
                </VStack>

            </VStack>

            <VStack w={['full', 'xl']} alignItems={'stretch'} p={'8'} spacing={'8'} overflow={'auto'}>

                {videoArr.map((item, index) => (
                    <Button
                        variant={'ghost'}
                        colorScheme={"purple"}
                        onClick={() => {
                            setVideosrc(item)
                        }}
                    >
                        Lecture{index + 1}
                    </Button>
                ))}

            </VStack>


        </Stack>

    )
}

export default Videos