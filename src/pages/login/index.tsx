import { createForm } from '@formily/core'
import { Field } from '@formily/react'
import { Form, FormItem, Input, Password, Submit } from '@formily/antd'
import { Card } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import s from './index.less'

const normalForm=createForm({
  validateFirst: true,
})

const phoneForm=createForm({
  validateFirst: true,
})

export default function Login() {
  return (
    <div className={s.container}>
      <div className={s.form}>
        <Card title="登录" style={{ width: 400 }}>
          <Form
            form={normalForm}
            layout="vertical"
            size="large"
            onAutoSubmit={console.log}
          >
            <Field
              name="username"
              title="用户名"
              required
              decorator={[FormItem]}
              component={[
                Input,
                {
                  prefix: <UserOutlined />,
                },
              ]}
            />
            <Field
              name="password"
              title="密码"
              required
              decorator={[FormItem]}
              component={[
                Password,
                {
                  prefix: <LockOutlined />,
                },
              ]}
            />
            <Submit block size="large">
              登录
            </Submit>
          </Form>
          <div className={s.footer}>
            <a href="/register">新用户注册</a>
            <a href="#忘记密码">忘记密码?</a>
          </div>
        </Card>
      </div>
    </div>
  )
}
