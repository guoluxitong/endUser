import request from '@/utils/request'
import qs from 'qs'
export function getProductCategoryListAndPage(query) {
  return request({
    url: '/webapi/endusermanage/productcategory/pagelist',
    method: 'get',
    params: query
  })
}

export function getProductCategoryList() {
  return request({
    url: '/webapi/endusermanage/productcategory/list',
    method: 'get'
  })
}

export function editBoilerModel(data) {
  return request({
    url: '/webapi/endusermanage/productcategory/modify',
    method: 'post',
    data: data
  })
}
export function createBoilerModel(data) {
  return request({
    url: '/webapi/endusermanage/productcategory/create',
    method: 'post',
    data: data
  })
}
