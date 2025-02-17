import { form, input, Card, Button } from 'antd';

const Settings = () => {
  return (
    <Card title="Restaurant Details" style ={{margin: 20}}>
        <form layout="vertical" wrapperCol={{ span: 8 }}>
            <Form.Item label="Restaurant Name" required>
                <input placeholder="Enter restaurant name here" />
            </Form.Item>
            <form.Item label="Restaurant Address" required>
                </form.Item>
                <Form.Item>
                    <Button type="primary">Submit</Button>
                </Form.Item>
        </form>

    </Card>
  );
}