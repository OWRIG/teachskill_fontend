import { useModel } from 'umi';
import { createForm } from '@formily/core'
import { Field } from '@formily/react'
import { Form, FormItem, Input, Password, Select, Submit } from '@formily/antd'
import { Card, Button, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { OrganizationList } from '@/constant/base'
import useAuthModel from '@/models/useAuthModel';

import s from './index.less'

const loginForm=createForm({
  validateFirst: true,
})

export default function Login() {
  const { onSignIn }=useAuthModel()
  
  const forgetPasswordFunc=() => {
    message.info('暂不对用户开放修改密码权限，请联系管理员')
  }

  return (
    <div className={s.container}>
      <div className={s.form}>
        <Card title="登录" style={{ width: 400 }}>
          <Form
            form={loginForm}
            layout="vertical"
            size="large"
            onAutoSubmit={onSignIn}
          >
            <Field
              name="organization"
              title="组织"
              decorator={[FormItem]}
              component={[Select]}
              dataSource={OrganizationList}
              required
            />
            <Field
              name="stu_id"
              title="学号"
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
            <Button type="text" onClick={forgetPasswordFunc}>忘记密码?</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
