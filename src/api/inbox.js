import fetch from 'utils/fetch';
import { Observable } from 'rxjs/Observable';

export function fetchList(query) {
    return fetch({
        url: '/inbox/list',
        method: 'get',
        params: query
    });
}

export function fetchDetail(id) {
    return fetch({
        url: '/inbox/detail',
        method: 'get',
        params: id
    });
}

export function delReceiveMail(idArr) {
    const idStr = String(idArr);
    console.log('要删除的收件id:' + idStr);
    return Observable.create(observer => {
        setTimeout(() => { observer.next(true); }, 1000);
    });
}