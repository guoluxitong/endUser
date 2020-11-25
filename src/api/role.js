import request from '@/utils/request'

export function getRoleList(pageNum,pageSize) {
  return request({
    url: '/webapi/endusermanage/role/list',
    method: 'get',
    params:{pageNum,pageSize}
  })
}

export function createRole(data) {
  return request({
    url: '/webapi/endusermanage/role/create',
    method: 'post',
    data:data
  })
}
export function editRole(data) {
  return request({
    url: '/webapi/endusermanage/role/modify',
    method: 'post',
    data:data
  })
}


export function editRoleResources(roleId,data) {
  return request({
    url: '/webapi/endusermanage/role/resource/map',
    method: 'post',
    params:{roleId},
    data:data
  })
}

export function deleteRole(roleId) {
  return request({
    url: '/webapi/endusermanage/role/remove',
    method: 'post',
    params:{roleId}
  })
}
