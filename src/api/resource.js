import request from '@/utils/request'
import { getToken } from '@/utils/auth'
export function getUserResources(employeeId) {
  return request({
    url: '/webapi/endusermanage/resource/user',
    method: 'get',
    params: {employeeId}
  })
}

export function getRoleResources(roleId) {
  return request({
    url: '/webapi/endusermanage/resource/role',
    method: 'get',
    params: {roleId}
  })
}
