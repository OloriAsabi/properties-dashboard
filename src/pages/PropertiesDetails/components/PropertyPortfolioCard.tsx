import React from 'react';
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import CustomCard from '../../../components/card/Card';
import { RowObj } from '../../../data/data';

interface PropertyPortfolioDetailsProps {
    landlord: RowObj;
}

const PropertyPortfolioCard: React.FC<PropertyPortfolioDetailsProps> = ({ landlord }) => {
    const textColor = useColorModeValue('secondaryGray.900', 'white');
  
    return (
        <Flex flexDirection='column' w='100%' px='25px' mt='12px'>
        <Text color={textColor} fontSize='22px' fontWeight='700' mb='8px'>
          Properties Profolio
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
        <Text color={textColor} fontSize='sm' fontWeight='700'>
          {landlord.landlord.portfolio}
        </Text>
        <Text fontSize='sm' color='gray.400'>
          Landlord Name
        </Text>
        <Text color={textColor} fontSize='sm' fontWeight='700'>
          {landlord.landlord.name}
        </Text>
        <Text fontSize='sm' color='gray.400'>
          Percentage Ownership
        </Text>
        <Text color={textColor} fontSize='sm' fontWeight='700'>
          {landlord.landlord.percentageOwnership}%
        </Text>
      </CustomCard>
      </Flex>
    );
  };
  
  export default PropertyPortfolioCard;
  