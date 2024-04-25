import React, { useState } from 'react';
import { Flex, Image, useDisclosure, Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react';
import propertyImage from '../../../assets/img/properties/0a042646783622c976b43add0ff7e56a-cc_ft_768.webp';
import propertyImage2 from '../../../assets/img/properties/1c7fe840dabb1d0d65f68a5b952c974b-uncropped_scaled_within_1536_1152.webp';
import propertyImage1 from '../../../assets/img/properties/1e05e512e5166ee28b0c91bdf7dfc334-cc_ft_768.webp';
import propertyImage3 from '../../../assets/img/properties/4ca56e80d896a7914f6fc461c91db76f-cc_ft_768.webp';
import propertyImage4 from '../../../assets/img/properties/c5bc7663cf0f041ae1d7beca4c0866fd-cc_ft_768.webp';
import propertyImage5 from '../../../assets/img/properties/3fedd76a617a7f7e9cc7cb691342c9b0-cc_ft_768.webp';
import propertyImage6 from '../../../assets/img/properties/612b9a92f097fe93b059ea12945986ba-cc_ft_768.webp';
import propertyImage7 from '../../../assets/img/properties/b1780d0c1936886b9749dd2fb1106af6-cc_ft_768.webp';
// import propertyImage8 from '../../../assets/img/properties/8eefcf37b74fe8da77bf4a5d9992a583-cc_ft_768.webp';
import CustomCard from '../../../components/card/Card';

const imageUrls = [
    propertyImage,
    propertyImage1,
    propertyImage2,
    propertyImage3,
    propertyImage4,
    propertyImage5,
    propertyImage6,
    propertyImage7,
    // propertyImage8
];

const PropertyImage: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isHovered, setIsHovered] = useState(false);
    const [currentImage, setCurrentImage] = useState<string | undefined>(undefined);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleImageClick = (imageUrl: string) => {
        setCurrentImage(imageUrl);
        onOpen();
    };

    const chunks = (arr: string[], size: number) => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
            arr.slice(index * size, index * size + size)
        );
    };

    return (
        <CustomCard
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-between'}
            flexWrap={'wrap'}
            p='20px'
            mb='20px'
            borderWidth='1px'
            borderRadius='md'
        >
            {chunks(imageUrls, 4).map((chunk, index) => (
                <Flex key={index} justifyContent="space-between" width="100%">
                    {chunk.map((imageUrl, innerIndex) => (
                        <Flex
                            key={innerIndex}
                            justifyContent='center'
                            alignItems='center'
                            position='relative'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleImageClick(imageUrl)}
                            cursor='pointer'
                            mb={innerIndex === chunk.length - 1 ? 0 : '20px'}
                            flex="1"
                            minWidth="0"
                        >
                            <Image
                                src={imageUrl}
                                alt='Property'
                                width={100}
                                height={100}
                                borderRadius='md'
                            />
                            {isHovered && (
                                <Flex
                                    position='absolute'
                                    top='50%'
                                    left='50%'
                                    transform='translate(-50%, -50%)'
                                    color='white'
                                    fontWeight='bold'
                                    fontSize='xl'
                                    textShadow='1px 1px 2px rgba(0, 0, 0, 0.6)'
                                >
                                    Click to Preview
                                </Flex>
                            )}
                        </Flex>
                    ))}
                </Flex>
            ))}
            <Modal isOpen={isOpen} onClose={onClose} size='xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <Image src={currentImage}
                        h={'100vh'}
                        w={'100vw'}
                         alt='Property' borderRadius='md' />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </CustomCard>
    );
};

export default PropertyImage;
