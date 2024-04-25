import React from 'react';
import { Text, Flex, useColorModeValue } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CustomCard from '../../../components/card/Card';
import { RowObj } from '../../../data/data';
import CommunityOverview from './CommunityOverview';

interface PropertiesTableProps {
    property: RowObj;
}  

const PropertiesDetailsCard: React.FC<PropertiesTableProps> = ({ property }) => {
  const textColor = useColorModeValue('secondaryGray.900', 'white');

  return (
    <Flex flexDirection='column' w='100%' px='25px' mt='12px'>
      <Text color={textColor} fontSize='22px' fontWeight='700' mb='8px'>
        Properties Details Table
      </Text>
      <CustomCard key={property?.id} 
        display={'flex'} 
        justifyContent={'space-between'} 
        p='20px' 
        mb='20px'
        flexDirection={'column'}
        borderWidth='1px' 
        borderRadius='md'
        lineHeight={6}>
        <Flex justifyContent='space-between' flexDirection='row'  align='start'>
        <Flex justifyContent='space-between' flexDirection='column'  align='start' mb='12px' flex='1'>
          <Text fontSize='sm' color='gray.400'>
            ADDRESS
          </Text>
          <Link to={`/admin/properties/${property?.id}`}>
            <Text color={textColor} fontSize='sm' fontWeight='700'>
              {property?.address}
            </Text>
          </Link>
        </Flex>
        <Flex justifyContent='space-between' flexDirection='column' align='start' mb='12px' flex='1'>
          <Text fontSize='sm' color='gray.400'>
            TYPE
          </Text>
          <Flex align='center'>
            {property?.type === 'Apartment Complex' && <FaHome color='green' />}
            {property?.type === 'Condominium' && <FaHome color='blue' />}
            {property?.type === 'Townhouse' && <FaHome color='red' />}
            <Text color={textColor} fontSize='sm' fontWeight='700' ml='5px'>
              {property?.type}
            </Text>
          </Flex>
        </Flex>
        </Flex>
        <Flex  justifyContent='space-between' flexDirection='row'  align='start'>
        <Flex justifyContent='space-between' flexDirection='column'  align='start' mb='12px' flex='1'>
          <Text fontSize='sm' color='gray.400'>
            PORTFOLIO
          </Text>
          <Text color={textColor} fontSize='sm' fontWeight='700'>
            {property?.portfolio}
          </Text>
        </Flex>
        <Flex justifyContent='space-between' flexDirection='column'  align='start' mb='12px' flex='1'>
          <Text fontSize='sm' color='gray.400'>
            COUNTY
          </Text>
         
          <Text color={textColor} fontSize='sm' fontWeight='700'>
            {property?.county}
          </Text>
        </Flex> 
        </Flex>
        <Flex  justifyContent='space-between' flexDirection='row'  align='start'>
        <Flex justifyContent='space-between' flexDirection='column'  align='start' mb='12px' flex='1'>
          <Text fontSize='sm' color='gray.400'>
            LEGAL DESCRIPTION
          </Text>
          <Text color={textColor} fontSize='sm' fontWeight='700'>
            {property?.legalDescription}
          </Text>
        </Flex>
        <Flex justifyContent='space-between' flexDirection='column'  align='start' mb='12px' flex='1'>
          <Text fontSize='sm' color='gray.400'>
            YEAR BUILT
          </Text>
          <Text color={textColor} fontSize='sm' fontWeight='700'>
            {property?.yearBuilt}
          </Text>
        </Flex>
        </Flex>
      </CustomCard>
    </Flex>
  );
};

export default PropertiesDetailsCard;
