import orders from './assets/data/orders.json';
import {Card, Table, Tag} from 'antd';

const Orders = () => {
    const tableColumns = [
        {
            title: 'Order ID',
            dataIndex: 'order_id',
            key: 'order_id',
        },
        {
            title: 'Customer Name',
            dataIndex: 'customer_name',
            key: 'customer_name',
        },
        {
            title: 'Restaurant',
            dataIndex: 'restaurant',
            key: 'restaurant',
        },
        {
            title: 'Total Amount',
            dataIndex: 'total_amount',
            key: 'total_amount',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
    ];
    return (
        <Card title={'Orders'} style={{margin: 20}}>
            <Table 
            dataSource={orders}
            columns={tableColumns}/>
        </Card>
    )
};