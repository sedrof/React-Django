import React, { useState, useEffect } from 'react'
import { Icon, Table, Image, Segment, Dimmer, Pagination } from 'semantic-ui-react';
import TransactionForm from './addTransactions';
import './Paginations.css';


const TransactionsListPage = () => {

    const [transactions, setTransactions] = useState([])
    const [loading, setLoading]= useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [count, setCount] = useState(null);
    const [previousPage, setPreviousPage] = useState(null);

    useEffect(() => {
        getTransactions()
    }, [currentPage])


    
    const firstPage = () => setCurrentPage(1);

    const lastPage = () => setCurrentPage(numberOfPages);

    const incrementPageNumber = () => {
        if(currentPage < lastPage){
            setCurrentPage(previousPage => previousPage + 1)}}

    const decrementPageNumber = () => {
        if(currentPage <= 1) return; 
        setCurrentPage(previousPage => previousPage - 1);
      }
      
      
    const getTransactions = async () => {
        setLoading(true);
        let response = await fetch(`/calc/trans/?page=${currentPage}`)
        let data = await response.json()
        setLoading(false);
        setTransactions(data.results)
        setCount(data.count)
    }
    const numberOfPages = Math.ceil(count/10);

    const data = (event, data) => {
        setCurrentPage(data.activePage)
    }

    return (
        <div>
        <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Chp Reference</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Income Period</Table.HeaderCell>
            <Table.HeaderCell>Last Rent</Table.HeaderCell>
            <Table.HeaderCell>Household Rent</Table.HeaderCell>
            <Table.HeaderCell>Property Market Rent</Table.HeaderCell>
            <Table.HeaderCell>Rent Effective Date</Table.HeaderCell>
            <Table.HeaderCell>Print Report</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {loading ? <Segment className="loading">
                    <Dimmer active inverted>
                    </Dimmer>

                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                </Segment> :
                    transactions.map((transaction) => 
                    {
                        return         <Table.Body key={transaction.id}>
                        <Table.Row>
                          <Table.Cell> {transaction.chp_reference}</Table.Cell>
                          <Table.Cell>{transaction.complete ? <div>
                                    <Icon link name='check' color='green' />
                                </div> : <div>
                                <Icon link name='close' color='red' />
                            </div>}</Table.Cell>
                        <Table.Cell>{transaction.income_period}</Table.Cell>
                          <Table.Cell>{transaction.complete? transaction.last_rent: <div>
                                <Icon link name='close' color='red' />
                            </div> }</Table.Cell>
                          <Table.Cell>{transaction.household_rent && transaction.complete? Math.round(transaction.household_rent * 100) / 100: <div>
                                <Icon link name='close' color='red' />
                            </div>}</Table.Cell>
                          <Table.Cell>{transaction.property_market_rent}</Table.Cell>
                          <Table.Cell>{transaction.rent_effective_date}</Table.Cell>
                          <Table.Cell>transaction.</Table.Cell>
                          <Table.Cell>
                              <Icon link name='edit' color='blue' />
                              <Icon link name='trash' color='red' />
                              </Table.Cell>
                        </Table.Row>
                        
                      </Table.Body>
                       
                    }
                                    )             
                }
         
      </Table>
      <div className='pagination'> 
            <Pagination
            
                defaultActivePage={1}
                firstItem={{ content: <Icon name='angle double left' onClick={firstPage} />, icon: true }}
                lastItem={{ content: <Icon name='angle double right' onClick={lastPage} />, icon: true }}
                prevItem={{ content: <Icon name='angle left' onClick={decrementPageNumber} />, icon: true }}
                nextItem={{ content: <Icon name='angle right' onClick={incrementPageNumber} />, icon: true }}
                pointing
                secondary
                onPageChange={data}
                totalPages={numberOfPages}
            />
            </div>
            <TransactionForm/>
      </div>
              

    )
}

export default TransactionsListPage