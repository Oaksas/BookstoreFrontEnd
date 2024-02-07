import React from 'react'
import { useGetAllOrdersQuery } from '../services/usersApi'

const GetMyOrders: React.FC = () => {
    const userId = 1
    const { data: books, isFetching, isError } = useGetAllOrdersQuery(userId)
    console.log(books)
    return (
        <div>GetMyOrders</div>
    )
}

export default GetMyOrders