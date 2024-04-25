import React from 'react';
import { Text, Flex, useColorModeValue } from '@chakra-ui/react';
import CustomCard from '../../../components/card/Card';

const CommunityOverview: React.FC = () => {
  const textColor = useColorModeValue('secondaryGray.900', 'white');

  return (
  
    <Flex flexDirection='column'  px='25px' mt='12px'>
      <Text color={textColor} fontSize='22px' fontWeight='700' mb='8px'>
        Community Overview
      </Text>  
      <CustomCard
    p='20px' 
    mb='20px'
    borderWidth='1px' 
    borderRadius='md'
    lineHeight={6}>
      <Text color={textColor} fontSize='sm' mb='12px'>
        Welcome to Converge NW, the luxury community in Waukee! At Converge NW, we offer a large selection of townhomes and apartments for rent. Our community has a wide range of premium amenities, making it the ideal choice for those seeking a contemporary suburban lifestyle.
      </Text>
      <Text color={textColor} fontSize='sm' mb='12px'>
        As an added benefit, our location is truly unbeatable. Situated just seconds away from the brand-new Waukee High School and football field, our community provides convenience and access to educational and recreational facilities that can't be matched.
      </Text>
      <Text color={textColor} fontSize='sm' mb='12px'>
        So, whether you're looking for the perfect townhome or apartment for rent, Converge NW has you covered. Your journey to suburban luxury begins now. Don't miss out, we're leasing right now!
      </Text>    
      </CustomCard>
    </Flex>

  );
};

export default CommunityOverview;
