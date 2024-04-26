import React from 'react';
import { Text, Flex, Badge, useColorModeValue } from '@chakra-ui/react';
import { RowObj } from '../../../data/data';
import CustomCard from '../../../components/card/Card';

interface RentSignedDocumentProps {
    property: RowObj;
}

const RentSignedDocument: React.FC<RentSignedDocumentProps> = ({property }) => {
    const textColor = useColorModeValue('secondaryGray.900', 'white');
  
  return (
    <Flex flexDirection='column' w='100%' px='25px' mt='12px'>
    <Text color={textColor} fontSize='22px' fontWeight='700' mb='8px'>
    Rent Signed Document
    </Text>
  <CustomCard
    display={'flex'}
    justifyContent={'space-between'}
    p='20px'
    mb='20px'
    flexDirection={'column'}
    borderWidth='1px'
    borderRadius='md'
    lineHeight={6}
  >
    <Flex
      borderWidth="1px"
      borderRadius="lg"
      p="4"
      mb="4"
      alignItems="center"
      justifyContent="space-between"
      flexDirection={'row'}
    >
      <Flex 
      flexDirection="row"   
      alignItems="center"
      justifyContent="space-between">
        <Text fontWeight="bold">Name: {property.rentSignedDocument.name}</Text>
        <Flex alignItems="center">
          <Text fontSize="sm">Status:</Text>
          <Badge
            ml="1"
            colorScheme={property.rentSignedDocument.status === 'completed' ? 'green' : 'yellow'}
          >
            {property.rentSignedDocument.status}
          </Badge>
        </Flex>
        <Text fontSize="sm">Date Created: {property.rentSignedDocument.dateCreated}</Text>
        {/* Add more details here */}
      </Flex>

    </Flex>
    </CustomCard>
    </Flex>
  );
};

export default RentSignedDocument;
