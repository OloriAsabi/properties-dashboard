import React from 'react';
import { Text, Flex, useColorModeValue } from '@chakra-ui/react';
import CustomCard from '../../../components/card/Card';
import { RowObj } from '../../../data/data';

interface PropertyRentalDetailsProps {
    property: RowObj;
}  

const PropertyRentalDetails: React.FC<PropertyRentalDetailsProps> = ({ property }) => {
  const textColor = useColorModeValue('secondaryGray.900', 'white');

  return (
    <Flex flexDirection='column' w='100%' px='25px' mt='12px'>
      <Text color={textColor} fontSize='22px' fontWeight='700' mb='8px'>
        Property Rental Details
      </Text>
      <CustomCard
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        p='20px'
        mb='20px'
        borderWidth='1px'
        borderRadius='md'
        lineHeight={6}
      >
             <Flex justifyContent='space-between' flexDirection='row'  align='start'>
             <Flex justifyContent='space-between' flexDirection='column'  align='start' mb='12px' flex='1'>
          <Text fontSize='sm' color='gray.400'>
            Rental Price
          </Text>
          <Text color={textColor} fontSize='sm' fontWeight='700'>
            {property?.propertyRentalDetail?.marketRentAmount}
          </Text>
        </Flex>  
        <Flex justifyContent='space-between' flexDirection='column'  align='start' mb='12px' flex='1'>
          <Text fontSize='sm' color='gray.400'>
            Property Manager
          </Text>
          <Text color={textColor} fontSize='sm' fontWeight='700'>
            {property?.propertyRentalDetail?.propertyManager}
          </Text>
        </Flex>
             </Flex>
                <Flex justifyContent='space-between' flexDirection='row'  align='start'> 
                <Flex justifyContent='space-between' flexDirection='column'  align='start' mb='12px' flex='1'>
          <Text fontSize='sm' color='gray.400'>
            Beds
          </Text>
          <Text color={textColor} fontSize='sm' fontWeight='700'>
            {property?.propertyRentalDetail?.beds}
          </Text>
        </Flex>
        <Flex justifyContent='space-between' flexDirection='column'  align='start' mb='12px' flex='1'>
          <Text fontSize='sm' color='gray.400'>
            Baths
          </Text>
          <Text color={textColor} fontSize='sm' fontWeight='700'>
            {property?.propertyRentalDetail?.baths}
          </Text>
        </Flex>
        </Flex>
        <Flex justifyContent='space-between' flexDirection='row'  align='start'>
        <Flex justifyContent='space-between' flexDirection='column'  align='start' mb='12px' flex='1'>
          <Text fontSize='sm' color='gray.400'>
          Non Revenue Start Date
          </Text>
      <Text color={textColor} fontSize='sm' fontWeight='700'>
            {property?.propertyRentalDetail?.nonRevenueStartDate}
          </Text>
        </Flex>
        <Flex justifyContent='space-between' flexDirection='column'  align='start' mb='12px' flex='1'>
          <Text fontSize='sm' color='gray.400'>
          Non Revenue Type
          </Text>
          <Text color={textColor} fontSize='sm' fontWeight='700'>
            {property?.propertyRentalDetail?.nonRevenueType}
          </Text>
        </Flex>
        </Flex>
        <Flex justifyContent='space-between' flexDirection='row'  align='start'>
        <Flex justifyContent='space-between' flexDirection='column'  align='start' mb='12px' flex='1'>
          <Text fontSize='sm' color='gray.400'>
            Non Revenue Unit
          </Text>
          <Text color={textColor} fontSize='sm' fontWeight='700'>
            {property?.propertyRentalDetail?.nonRevenueUnit}
          </Text>
        </Flex>
        <Flex justifyContent='space-between' flexDirection='column'  align='start' mb='12px' flex='1'>
                <Text fontSize='sm' color='gray.400'>
                 Security Deposit Amount
                </Text>
                <Text color={textColor} fontSize='sm' fontWeight='700'>
                  {property?.propertyRentalDetail?.securityDepositAmount}
                </Text>
              </Flex>
        </Flex>
              <Flex justifyContent='space-between' flexDirection='row'  align='start'>
              <Flex justifyContent='space-between' flexDirection='column'  align='start' mb='12px' flex='1'>
          <Text fontSize='sm' color='gray.400'>
            Property Size
          </Text>
          <Text color={textColor} fontSize='sm' fontWeight='700'>
            {property?.propertyRentalDetail?.size}
          </Text>
        </Flex>
        </Flex>
      </CustomCard>
    </Flex>
  );
};

export default PropertyRentalDetails;
