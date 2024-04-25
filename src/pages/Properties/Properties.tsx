import React from 'react';
import {
  Box,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import CustomCard from '../../components/card/Card';
import Banner from '../../components/menu/MainMenu';
import { RowObj } from '../../data/data';


interface PropertiesTableProps {
  tableData: RowObj[];
}

const PropertiesTable: React.FC<PropertiesTableProps> = ({ tableData }) => {
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');

  const history = useNavigate();

  const handleRowClick = (propertyId: string) => {
    // Navigate to property details page with the propertyId
    history(`/properties/${propertyId}`);
  };

  const columns = [
    {
      Header: 'ADDRESS',
      accessor: 'address',
      Cell: ({ row }: { row: RowObj }) => (
        <Flex
          align='center'
          cursor='pointer'
          onClick={() => handleRowClick(row.id)}>
          <Text color={textColor} fontSize='sm' fontWeight='700'>
            {row.address}
          </Text>
        </Flex>
      ),
    },
    {
      Header: 'TYPE',
      accessor: 'type',
      Cell: ({ row }: { row: RowObj }) => (
        <Flex align='center'>
          {row.type === 'Apartment Complex' && <FaHome color='green' />}
          {row.type === 'Condominium' && <FaHome color='blue' />}
          {row.type === 'Townhouse' && <FaHome color='red' />}
          <Text color={textColor} fontSize='sm' fontWeight='700'>
            {row.type}
          </Text>
        </Flex>
      ),
    },
    {
      Header: 'PORTFOLIO',
      accessor: 'portfolio',
      Cell: ({ row }: { row: RowObj }) => (
        <Text color={textColor} fontSize='sm' fontWeight='700'>
          {row.portfolio}
        </Text>
      ),
    },
    {
      Header: 'TENANTS',
      accessor: 'tenants',
      Cell: ({ row }: { row: RowObj }) => (
        <Text color={textColor} fontSize='sm' fontWeight='700'>
          {row.tenants.join(', ')}
        </Text>
      ),
    },
  ];

  return (
    <CustomCard flexDirection='column' w='100%' mt={'50px'} pt={'50px'} px='0px' overflowX={{ sm: 'scroll', lg: 'hidden' }}>
      <Flex px='25px' mb='8px' justifyContent='space-between' align='center'>
        <Text color={textColor} fontSize='22px' fontWeight='700' lineHeight='100%'>
          Properties Table
        </Text>
        <Banner />
      </Flex>
      <Box>
        <Table variant='simple' color='gray.500' mb='24px' mt='12px'>
          <Thead>
            <Tr>
              {columns.map((column) => (
                <Th key={column.Header} pe='10px' borderColor={borderColor}>
                  {column.Header}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map((row) => (
              <Tr key={row.id}>
                {columns.map((column) => (
                  <Td key={column.accessor} fontSize='sm' minW={{ sm: '150px', md: '200px', lg: 'auto' }} borderColor='transparent'>
                    {column.Cell({ row })}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </CustomCard>
  );
};

export default PropertiesTable;
