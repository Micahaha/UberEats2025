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
            title: 'Delivery Address',
            dataIndex: 'deliveryAddress',
            key: 'deliveryAddress',
        },
        
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price) =>  `$ {price} $`
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: renderOrderStatus
        }
    ];
    return (
        <Card title={'Orders'} style={{margin: 20}}>
            <Table 
            dataSource={orders}
            columns={tableColumns}/>
        </Card>
    )
};