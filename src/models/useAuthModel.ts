import { useState, useCallback } from 'react'
import { history } from 'umi';
import { login } from '@/service/login'
import Storage from '@/utils/storage'
import { LoginParams } from '../constant/login';
import { signOut } from '../service/login';

export default function useAuthModel() {
  const [user, setUser] = useState(null)

  const onSignIn = useCallback((params: LoginParams) => {
    login(params).then(res => {
      if(res.data){
        setUser(res.data.user)
        Storage.setItem('token', res.data.token)
        history.push('/')
      }
    })
  }, [])

  const onSignOut = useCallback((stu_id: string) => {
    signOut(stu_id).then(()=>{
      setUser(null)
      Storage.removeItem('token')
      history.push('/login')
    })
  }, [])

  return {
    user,
    onSignIn,
    onSignOut,
  }
}
