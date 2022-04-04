import { history } from 'umi';
import { createForm } from '@formily/core'
import { Field } from '@formily/react'
import {
  Form,
  FormItem,
  Input,
  Select,
  Password,
  Submit,
  Radio,
  FormButtonGroup,
} from '@formily/antd'
import { Card } from 'antd'
import { SessionItems, SubjectList, OrganizationList } from '@/constant/base'
import { register } from '@/service/login'
import { RegisterParams } from '../../constant/login';

import s from './index.less'

export default function Register() {

  const form=createForm({
    validateFirst: true,
  })

  const onRegister=(params: RegisterParams) => {
    const p={ ...params, confirm_password: void 0 }
    register(p).then(res => {
      history.push('/login')
    })
  }
  return (
    <div className={s.container}>
      <div className={s.form}>
        <Card title="新用户注册（请仔细填写）" style={{ width: 620 }}>
          <Form
            form={form}
            labelCol={5}
            wrapperCol={16}
            onAutoSubmit={onRegister}
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
              description="请填写真实姓名，以便查询和成绩统计"
            />
            <Field
              name="gender"
              title="性别"
              required
              decorator={[FormItem]}
              component={[Radio.Group]}
              dataSource={[
                {
                  label: '男',
                  value: 1,
                },
                {
                  label: '女',
                  value: 2,
                },
                {
                  label: '其他',
                  value: 3,
                },
              ]}
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
