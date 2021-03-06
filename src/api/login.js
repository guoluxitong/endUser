import request from '@/utils/request'
import qs from 'qs'

export function login(account, password) {
  return request({
    url: '/account/enduser/login',
    method: 'post',
    data: qs.stringify({ loginId: account, password: password})
  })
}
export function wechatlogin(account) {
  return request({
    url: '/wechat/employee/find',
    method: 'get',
    params: { 'loginId': account}
  })
}
export function getUserInfo(employeeId) {
  return request({
    url: '/webapi/endusermanage/user/info',
    method: 'get',
    params:{ "employeeId": employeeId}
  })
}
