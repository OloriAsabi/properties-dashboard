import React, { useState } from 'react';
import { Text, Flex, Button, useColorModeValue } from '@chakra-ui/react';
import CustomCard from '../../../components/card/Card';
import { RowObj } from '../../../data/data';


interface PropertyRentalDetailsProps {
  property: RowObj;
}

const PropertyLeaseCard: React.FC<PropertyRentalDetailsProps> = ({ property }) => {
  const [showCurrent, setShowCurrent] = useState(true);
  const [showPast, setShowPast] = useState(false);
  const [showFuture, setShowFuture] = useState(false);
  const textColor = useColorModeValue('secondaryGray.900', 'white');

  const filteredLeases = property.leaseDetails.filter(lease => {
    if (showCurrent && lease.status === 'current') return true;
    if (showPast && lease.status === 'past') return true;
    if (showFuture && lease.status === 'future') return true;
    return false;
  });

  return (
    <Flex flexDirection='column' w='100%' px='25px' mt='12px'>
      <Text color={textColor} fontSize='22px' fontWeight='700' mb='8px'>
        Lease Details
      </Text>
      <Flex justifyContent='flex-end' mb='12px'>
        <Button
          onClick={() => {
            setShowCurrent(true);
            setShowPast(false);
            setShowFuture(false);
          }}
          variant={showCurrent ? 'solid' : 'outline'}
          colorScheme='teal'
          mr='2'
        >
          Current
        </Button>
        <Button
          onClick={() => {
            setShowCurrent(false);
            setShowPast(true);
            setShowFuture(false);
          }}
          variant={showPast ? 'solid' : 'outline'}
          colorScheme='teal'
          mr='2'
        >
          Past
        </Button>
        <Button
          onClick={() => {
            setShowCurrent(false);
            setShowPast(false);
            setShowFuture(true);
          }}
          variant={showFuture ? 'solid' : 'outline'}
          colorScheme='teal'
        >
          Future
        </Button>
      </Flex>
      {filteredLeases.length > 0 ? (
        filteredLeases.map(lease => (
          <CustomCard
            key={lease.status}
            display={'flex'}
            justifyContent={'space-between'}
            p='20px'
            mb='20px'
            flexDirection={'column'}
            borderWidth='1px'
            borderRadius='md'
            lineHeight={6}
          >
            <Text fontSize='sm' color='gray.400'>
              Lease Start Date
            </Text>
            <Text color={textColor} fontSize='sm' fontWeight='700'>
              {lease.leaseStartDate}
            </Text>
            <Text fontSize='sm' color='gray.400'>
              Lease End Date
            </Text>
            <Text color={textColor} fontSize='sm' fontWeight='700'>
              {lease.leaseEndDate}
            </Text>
            <Text fontSize='sm' color='gray.400'>
              Lease Term
            </Text>
            <Text color={textColor} fontSize='sm' fontWeight='700'>
              {lease.leaseTerm}
            </Text>
            <Text fontSize='sm' color='gray.400'>
              Tenants
            </Text>
            <Text color={textColor} fontSize='sm' fontWeight='700'>
              {lease.tenants.join(', ')}
            </Text>
          </CustomCard>
        ))
      ) : (
        <Text>No leases to display for the selected category.</Text>
      )}
    </Flex>
  );
};

export default PropertyLeaseCard;
