import React, { useState } from 'react'
import { Button, message, Input, Form, Row, Col } from 'antd'

const App = () => {
    const [form] = Form.useForm()
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (values) => {
        message.success('Форма отправлена!')
        console.log('Received values:', values)
    }

    const handleClick = () => {
        message.info('Это уведомление')
    }

    return (
        <div style={{ padding: '50px' }}>
            <h2>Пример с использованием Ant Design</h2>

            {/* Кнопка с уведомлением */}
            <Button type="primary" onClick={handleClick}>
                Нажми меня
            </Button>

            {/* Форма с валидацией */}
            <Form
                form={form}
                onFinish={handleSubmit}
                style={{ marginTop: '20px', maxWidth: '400px' }}
            >
                <Form.Item
                    name="username"
                    label="Имя пользователя"
                    rules={[{ required: true, message: 'Пожалуйста, введите имя!' }]}
                >
                    <Input placeholder="Введите имя" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Отправить
                    </Button>
                </Form.Item>
            </Form>

            {/* Сетка для разделения контента */}
            <Row gutter={16} style={{ marginTop: '40px' }}>
                <Col span={8}>
                    <div style={{ backgroundColor: '#f0f2f5', padding: '20px' }}>
                        Колонка 1
                    </div>
                </Col>
                <Col span={8}>
                    <div style={{ backgroundColor: '#f0f2f5', padding: '20px' }}>
                        Колонка 2
                    </div>
                </Col>
                <Col span={8}>
                    <div style={{ backgroundColor: '#f0f2f5', padding: '20px' }}>
                        Колонка 3
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default App