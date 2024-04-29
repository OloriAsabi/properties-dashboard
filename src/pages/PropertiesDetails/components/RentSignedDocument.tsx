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
      gap={10}
    >

             <Flex justifyContent='center' flexDirection='column'  align='start' mb='12px' flex='1'>
             <Text fontWeight="bold">Name: {property.rentSignedDocument.name}</Text>
             </Flex>
<Flex justifyContent='center' flexDirection='row'  align='start' mb='12px'>    
          <Text fontSize="sm">Status:</Text>
          <Badge
            ml="1"
            colorScheme={property.rentSignedDocument.status === 'completed' ? 'green' : 'yellow'}
          >
            {property.rentSignedDocument.status}
          </Badge>
</Flex>
        <Flex justifyContent='space-between' flexDirection='column'  align='start' mb='12px' flex='1'>
        <Text fontSize="sm">Date Created: {property.rentSignedDocument.dateCreated}</Text>
        </Flex>
        {/* Add more details here */}
      </Flex>

    </CustomCard>
    </Flex>
  );
};

export default RentSignedDocument;
