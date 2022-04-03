import React from 'react'
import { createForm } from '@formily/core'
import { Field, VoidField } from '@formily/react'
import {
  Form,
  FormItem,
  Input,
  Select,
  Password,
  Submit,
  FormButtonGroup,
} from '@formily/antd'
import { Card, Button } from 'antd'
import { SessionItems, SubjectList } from '@/constant/base'

import s from './index.less'

export default function Register() {

  const form=createForm({
    validateFirst: true,
  })

  return (
    <div className={s.container}>
      <div className={s.form}>
        <Card title="新用户注册" style={{ width: 620 }}>
          <Form
            form={form}
            labelCol={5}
            wrapperCol={16}
            onAutoSubmit={console.log}
          >
            <Field
              name="organization"
              title="组织"
              decorator={[FormItem]}
              component={[Select]}
              dataSource={[
                {
                  label: '南京师范大学',
                  value: 1,
                },
                {
                  label: '南京邮电大学',
                  value: 2,
                },
              ]}
              required
            />
            <Field
              name="session"
              title="入学年份"
              decorator={[FormItem]}
              component={[Select]}
              dataSource={SessionItems}
              required
            />
            <Field
              name="subject"
              title="学科"
              decorator={[FormItem]}
              component={[Select]}
              dataSource={SubjectList}
              required
            />
            <Field
              name="stu_id"
              title="学号"
              required
              decorator={[FormItem]}
              component={[Input]}
            />
            <Field
              name="name"
              title="姓名"
              required
              decorator={[FormItem]}
              component={[Input]}
            />
            <Field
              name="email"
              title="邮箱"
              required
              validator="email"
              decorator={[FormItem]}
              component={[Input]}
            />
            <Field
              name="password"
              title="密码"
              required
              decorator={[FormItem]}
              component={[
                Password,
                {
                  checkStrength: true,
                },
              ]}
              reactions={(field: any) => {
                const confirm=field.query('.confirm_password')
                field.selfErrors=
                  confirm.get('value')&&
                    field.value&&
                    field.value!==confirm.get('value')
                    ? '确认密码不匹配'
                    :''
              }}
            />
            <Field
              name="confirm_password"
              title="确认密码"
              required
              decorator={[FormItem]}
              component={[
                Password,
                {
                  checkStrength: true,
                },
              ]}
              reactions={(field: any) => {
                const password=field.query('.password')
                field.selfErrors=
                  password.get('value')&&
                    field.value&&
                    field.value!==password.get('value')
                    ? '确认密码不匹配'
                    :''
              }}
            />
            <Field
              name="description"
              title="个人简介"
              decorator={[FormItem]}
              component={[Input.TextArea, {
                maxLength: 140
              }]}
            />
            <FormButtonGroup.FormItem>
              <Submit block size="large">
                注册
              </Submit>
            </FormButtonGroup.FormItem>
          </Form>
        </Card>
      </div>
    </div>
  )
}
