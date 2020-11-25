import request from '@/utils/request'
import qs from 'qs'
export function productSearch(data) {
  return request({
    url: '/webapi/endusermanage/product/search',
    method: 'post',
    data: data.product,
    params: {pageNum: data.pageNum, pageSize: data.pageSize}
  })
}

export function getProductUsers(productId) {
  return request({
    url: '/webapi/endusermanage/product/users',
    method: 'get',
    params: {productId}
  })
}
export function getUsers(productId) {
  return request({
    url: '/webapi/endusermanage/product/users',
    method: 'get',
    params: {productId: productId}
  })
}
export function editProduct(data) {
  return request({
    url: '/webapi/endusermanage/product/modify',
    method: 'post',
    data: data
  })
}
export function insertProduct(data) {
  return request({
    url: '/webapi/endusermanage/product/create',
    method: 'post',
    data: data
  })
}

export function modifyProductUser(productId,data) {
  return request({
    url: '/webapi/endusermanage/product/users/modify',
    method: 'post',
    params:{productId},
    data: data
  })
}
export function deleteProductById(id,controllerNo) {
  return request({
    url: '/webapi/endusermanage/product/remove',
    method: 'post',
    data: qs.stringify({id: id, controllerNo: controllerNo})
  })
}

