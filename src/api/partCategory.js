import request from '@/utils/request'
export function partCategoryList(query) {
    return request({
        url: '/webapi/endusermanage/partcategory/list',
        method: 'get',
        params: query
    })
}
