import { request } from 'umi';

// export async function fakeSubmitForm(params: any) {
//   return request('/api/forms', {
//     method: 'POST',
//     data: params,
//   });
// }

export async function SubmitOrder(params: any) {
  return request('/api/v1/order', {
    method: 'POST',
    data: params,
  });
}
