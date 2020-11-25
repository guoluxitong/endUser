/**
 * Created by jiachenpan on 16/11/18.
 */

export function getUrlKey(name){
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, "" ])[1].replace(/\+/g,'%20'))||null;}
