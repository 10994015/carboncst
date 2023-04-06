import axiosClient from "../axios";

export function login({commit}, data){
    return axiosClient.post('login', data).then(res=>{
        commit('setUser', res.data.user);
        commit('setToken', res.data.token);
        return data;
    })
}

export function logout({commit}){
    return axiosClient.post('logout').then(res=>{
        commit('setToken', null);
        return res;
    })
}
export function getUser({commit}){
    return axiosClient.get('/user').then(res=>{
        commit('setUser', res.data)
        return res;
    })
}
//article
export function getArticles({commit}, {url = null, search = '', perPage = 10, sort_field, sort_direction}){
    commit('setArticles', [true]);
    url = url || '/articles';
    return axiosClient.get(url, {params:{search, per_page:perPage, sort_field, sort_direction}}).then(res=>{
        commit('setArticles', [false, res.data]);
    }).catch(err=>{
        commit('setArticles', [false]);
    })
}
export function getArticle({commit}, id){
    return axiosClient.get(`/articles/${id}`);
}
export function createArticle({commit}, article){
    const hidden = (article.hidden) ? 1 :0;
    if(article.image instanceof File){
        const form = new FormData();
        form.append('title', article.title);
        form.append('image', article.image);
        form.append('content', article.content);
        form.append('category', article.category);
        form.append('hidden', hidden);
        article = form;
    }
    return axiosClient.post('/articles', article);
}
export function isExistArticle({commit}, id){
    return axiosClient.post(`/isExistArticle`, {id: id}).then(res=>{
        return res;
    });
}
export function updateArticle({commit}, article){
    const id = article.id;
    const hidden = (article.hidden) ? 1 :0;
    if(article.image instanceof File){
        const form = new FormData();
        form.append('id', article.id);
        form.append('title', article.title);
        form.append('image', article.image);
        form.append('content', article.content);
        form.append('category', article.category);
        form.append('hidden', hidden);
        form.append('_method', 'PUT');
        article = form;
    }else{
        article._method = 'PUT'
    }
    return axiosClient.post(`/articles/${id}`, article);
}

export function deleteArticle({commit}, id){
    return axiosClient.delete(`/articles/${id}`);
}
export function deleteArticleItems({commit}, ids){
    return axiosClient.post(`/articleItems`, {'ids':ids});
}


//banner
export function getBanners({commit}, {url = null, search = '', perPage = 10, sort_field, sort_direction}){
    commit('setBanners', [true]);
    url = url || '/banners';
    return axiosClient.get(url, {params:{search, per_page:perPage, sort_field, sort_direction}}).then(res=>{
        commit('setBanners', [false, res.data]);
    }).catch(err=>{
        commit('setBanners', [false]);
    })
}
export function getBanner({commit}, id){
    return axiosClient.get(`/banners/${id}`);
}
export function createBanner({commit}, banner){
    const hidden = (banner.hidden) ? 1 :0;
    if(banner.image instanceof File){
        const form = new FormData();
        form.append('url', banner.url);
        form.append('image', banner.image);
        form.append('hidden', hidden);
        banner = form;
    }
    return axiosClient.post('/banners', banner);
}
export function isExistBanner({commit}, id){
    return axiosClient.post(`/isExistBanner`, {id: id}).then(res=>{
        return res;
    });
}
export function updateBanner({commit}, banner){
    const id = banner.id;
    const hidden = (banner.hidden) ? 1 :0;
    if(banner.image instanceof File){
        const form = new FormData();
        form.append('id', banner.id);
        form.append('url', banner.url);
        form.append('image', banner.image);
        form.append('hidden', hidden);
        form.append('_method', 'PUT');
        banner = form;
    }else{
        banner._method = 'PUT'
    }
    return axiosClient.post(`/banners/${id}`, banner);
}
export function deleteBanner({commit}, id){
    return axiosClient.delete(`/banners/${id}`);
}
export function deleteBannerItems({commit}, ids){
    return axiosClient.post(`/bannerItems`, {'ids':ids});
}

//chairman

export function getChairmans({commit}, {url = null, search = '', perPage = 10, sort_field, sort_direction}){
    commit('setChairmans', [true]);
    url = url || '/chairmans';
    return axiosClient.get(url, {params:{search, per_page:perPage, sort_field, sort_direction}}).then(res=>{
        commit('setChairmans', [false, res.data]);
    }).catch(err=>{
        commit('setChairmans', [false]);
    })
}
export function getChairman({commit}, id){
    return axiosClient.get(`/chairmans/${id}`);
}
export function createChairman({commit}, chairman){
    const hidden = (chairman.hidden) ? 1 :0;
    if(chairman.image instanceof File){
        const form = new FormData();
        form.append('name', chairman.name);
        form.append('message_date', chairman.message_date);
        form.append('content', chairman.content);
        form.append('image', chairman.image);
        form.append('hidden', hidden);
        chairman = form;
    }
    return axiosClient.post('/chairmans', chairman);
}
export function isExistChairman({commit}, id){
    return axiosClient.post(`/isExistChairman`, {id: id}).then(res=>{
        return res;
    });
}
export function updateChairman({commit}, chairman){
    const id = chairman.id;
    const hidden = (chairman.hidden) ? 1 :0;
    if(chairman.image instanceof File){
        const form = new FormData();
        form.append('id', chairman.id);
        form.append('name', chairman.name);
        form.append('message_date', chairman.message_date);
        form.append('content', chairman.content);
        form.append('image', chairman.image);
        form.append('hidden', hidden);
        form.append('_method', 'PUT');
        chairman = form;
    }else{
        chairman._method = 'PUT'
    }
    return axiosClient.post(`/chairmans/${id}`, chairman);
}
export function deleteChairman({commit}, id){
    return axiosClient.delete(`/chairmans/${id}`);
}
export function deleteChairmanItems({commit}, ids){
    return axiosClient.post(`/chairmanItems`, {'ids':ids});
}

//award program

export function getAwardprograms({commit}, {url = null, search = '', perPage = 10, sort_field, sort_direction}){
    commit('setAwardprograms', [true]);
    url = url || '/awardprograms';
    return axiosClient.get(url, {params:{search, per_page:perPage, sort_field, sort_direction}}).then(res=>{
        commit('setAwardprograms', [false, res.data]);
    }).catch(err=>{
        commit('setAwardprograms', [false]);
    })
}
export function getAwardprogram({commit}, id){
    return axiosClient.get(`/awardprograms/${id}`);
}
export function createAwardprogram({commit}, awardprogram){
    const hidden = (awardprogram.hidden) ? 1 :0;
    const form = new FormData();
    form.append('name', awardprogram.name);
    form.append('award_name', awardprogram.award_name);
    form.append('year', awardprogram.year);
    form.append('units', awardprogram.units);
    form.append('link', awardprogram.link);
    form.append('hidden', hidden);
    awardprogram = form;
    return axiosClient.post('/awardprograms', awardprogram);
}
export function isExistAwardprogram({commit}, id){
    return axiosClient.post(`/isExistAwardprogram`, {id: id}).then(res=>{
        return res;
    });
}
export function updateAwardprogram({commit}, awardprogram){
    const id = awardprogram.id;
    const hidden = (awardprogram.hidden) ? 1 :0;
    if(awardprogram.image instanceof File){
        const form = new FormData();
        form.append('id', awardprogram.id);
        form.append('name', awardprogram.name);
        form.append('award_name', awardprogram.award_name);
        form.append('year', awardprogram.year);
        form.append('link', awardprogram.link);
        form.append('units', awardprogram.units);
        form.append('hidden', hidden);
        form.append('_method', 'PUT');
        awardprogram = form;
    }else{
        awardprogram._method = 'PUT'
    }
    return axiosClient.post(`/awardprograms/${id}`, awardprogram);
}
export function deleteAwardprogram({commit}, id){
    return axiosClient.delete(`/awardprograms/${id}`);
}
export function deleteAwardprogramItems({commit}, ids){
    return axiosClient.post(`/awardprogramItems`, {'ids':ids});
}

//letter

export function getLetters({commit}, {url = null, search = '', perPage = 10, sort_field, sort_direction}){
    commit('setLetters', [true]);
    url = url || '/letters';
    return axiosClient.get(url, {params:{search, per_page:perPage, sort_field, sort_direction}}).then(res=>{
        commit('setLetters', [false, res.data]);
    }).catch(err=>{
        commit('setLetters', [false]);
    })
}
export function getLetter({commit}, id){
    return axiosClient.get(`/letters/${id}`);
}
export function createLetter({commit}, letter){
    const hidden = (letter.hidden) ? 1 :0;
    if(letter.file instanceof File){
        const form = new FormData();
        form.append('name', letter.name);
        form.append('file', letter.file);
        form.append('hidden', hidden);
        letter = form;
    }
    return axiosClient.post('/letters', letter);
}
export function isExistLetter({commit}, id){
    return axiosClient.post(`/isExistLetter`, {id: id}).then(res=>{
        return res;
    });
}
export function updateLetter({commit}, letter){
    const id = letter.id;
    const hidden = (letter.hidden) ? 1 :0;
    if(letter.file instanceof File){
        const form = new FormData();
        form.append('id', letter.id);
        form.append('name', letter.name);
        form.append('file', letter.file);
        form.append('hidden', hidden);
        form.append('_method', 'PUT');
        letter = form;
    }else{
        letter._method = 'PUT'
    }
    return axiosClient.post(`/letters/${id}`, letter);
}

export function deleteLetter({commit}, id){
    return axiosClient.delete(`/letters/${id}`);
}
export function deleteLetterItems({commit}, ids){
    return axiosClient.post(`/letterItems`, {'ids':ids});
}

//cst database 

export function getCstDatabases({commit}, {url = null, search = '', perPage = 10, sort_field, sort_direction}){
    commit('setCstDatabases', [true]);
    url = url || '/cstDatabases';
    return axiosClient.get(url, {params:{search, per_page:perPage, sort_field, sort_direction}}).then(res=>{
        commit('setCstDatabases', [false, res.data]);
    }).catch(err=>{
        commit('setCstDatabases', [false]);
    })
}
export function getCstDatabase({commit}, id){
    return axiosClient.get(`/cstDatabases/${id}`);
}
export function createCstDatabase({commit}, cstdatabase){
    const hidden = (cstdatabase.hidden) ? 1 :0;
    if(cstdatabase.file instanceof File){
        const form = new FormData();
        form.append('name', cstdatabase.name);
        form.append('units', cstdatabase.units);
        form.append('job_title', cstdatabase.job_title);
        form.append('field', cstdatabase.field);
        form.append('button_1', cstdatabase.button_1);
        form.append('link_1', cstdatabase.link_1);
        form.append('button_2', cstdatabase.button_2);
        form.append('link_2', cstdatabase.link_2);
        form.append('button_3', cstdatabase.button_3);
        form.append('link_3', cstdatabase.link_3);
        form.append('button_4', cstdatabase.button_4);
        form.append('link_4', cstdatabase.link_4);
        form.append('button_5', cstdatabase.button_5);
        form.append('link_5', cstdatabase.link_5);
        form.append('hidden', hidden);
        cstdatabase = form;
    }
    return axiosClient.post('/cstDatabases', cstdatabase);
}
export function isExistCstDatabase({commit}, id){
    return axiosClient.post(`/isExistCstDatabase`, {id: id}).then(res=>{
        return res;
    });
}
export function updateCstDatabase({commit}, cstdatabase){
    const id = cstdatabase.id;
    const hidden = (cstdatabase.hidden) ? 1 :0;
    if(cstdatabase.file instanceof File){
        const form = new FormData();
        form.append('id', cstdatabase.id);
        form.append('name', cstdatabase.name);
        form.append('units', cstdatabase.units);
        form.append('job_title', cstdatabase.job_title);
        form.append('field', cstdatabase.field);
        form.append('button_1', cstdatabase.button_1);
        form.append('link_1', cstdatabase.link_1);
        form.append('button_2', cstdatabase.button_2);
        form.append('link_2', cstdatabase.link_2);
        form.append('button_3', cstdatabase.button_3);
        form.append('link_3', cstdatabase.link_3);
        form.append('button_4', cstdatabase.button_4);
        form.append('link_4', cstdatabase.link_4);
        form.append('button_5', cstdatabase.button_5);
        form.append('link_5', cstdatabase.link_5);
        form.append('hidden', hidden);
        form.append('_method', 'PUT');
        cstdatabase = form;
    }else{
        cstdatabase._method = 'PUT'
    }
    return axiosClient.post(`/cstDatabases/${id}`, cstdatabase);
}

export function deleteCstDatabase({commit}, id){
    return axiosClient.delete(`/cstDatabases/${id}`);
}
export function deleteCstDatabaseItems({commit}, ids){
    return axiosClient.post(`/cstdatabaseItems`, {'ids':ids});
}

//seminar

export function getCstSeminars({commit}, {url = null, search = '', perPage = 10, sort_field, sort_direction}){
    commit('setCstSeminars', [true]);
    url = url || '/cstSeminars';
    return axiosClient.get(url, {params:{search, per_page:perPage, sort_field, sort_direction}}).then(res=>{
        commit('setCstSeminars', [false, res.data]);
    }).catch(err=>{
        commit('setCstSeminars', [false]);
    })
}
export function getCstSeminar({commit}, id){
    return axiosClient.get(`/cstSeminars/${id}`);
}
export function createCstSeminar({commit}, smeinar){
    const hidden = (smeinar.hidden) ? 1 :0;
    if(smeinar.image instanceof File){
        const form = new FormData();
        form.append('title', smeinar.title);
        form.append('link', smeinar.link);
        form.append('image', smeinar.image);
        form.append('content', smeinar.content);
        form.append('hidden', hidden);
        smeinar = form;
    }
    return axiosClient.post('/cstSeminars', smeinar);
}
export function isExistCstSeminar({commit}, id){
    return axiosClient.post(`/isExistCstSeminar`, {id: id}).then(res=>{
        return res;
    });
}
export function updateCstSeminar({commit}, seminar){
    const id = seminar.id;
    const hidden = (seminar.hidden) ? 1 :0;
    if(seminar.image instanceof File){
        const form = new FormData();
        form.append('id', seminar.id);
        form.append('title', seminar.title);
        form.append('link', seminar.link);
        form.append('image', seminar.image);
        form.append('content', seminar.content);
        form.append('hidden', hidden);
        form.append('_method', 'PUT');
        seminar = form;
    }else{
        seminar._method = 'PUT'
    }
    return axiosClient.post(`/cstSeminars/${id}`, seminar);
}

export function deleteCstSeminar({commit}, id){
    return axiosClient.delete(`/cstSeminars/${id}`);
}
export function deleteCstSeminarItems({commit}, ids){
    return axiosClient.post(`/cstseminarItems`, {'ids':ids});
}

// oversea

export function getOverseas({commit}, {url = null, search = '', perPage = 10, sort_field, sort_direction}){
    commit('setOverseas', [true]);
    url = url || '/overseas';
    return axiosClient.get(url, {params:{search, per_page:perPage, sort_field, sort_direction}}).then(res=>{
        commit('setOverseas', [false, res.data]);
    }).catch(err=>{
        commit('setOverseas', [false]);
    })
}
export function getOversea({commit}, id){
    return axiosClient.get(`/overseas/${id}`);
}
export function createOversea({commit}, oversea){
    const hidden = (oversea.hidden) ? 1 :0;
    if(oversea.image instanceof File){
        const form = new FormData();
        form.append('title', oversea.title);
        form.append('link', oversea.link);
        form.append('image', oversea.image);
        form.append('content', oversea.content);
        form.append('hidden', hidden);
        oversea = form;
    }
    return axiosClient.post('/overseas', oversea);
}
export function isExistOversea({commit}, id){
    return axiosClient.post(`/isExistOversea`, {id: id}).then(res=>{
        return res;
    });
}
export function updateOversea({commit}, oversea){
    const id = oversea.id;
    const hidden = (oversea.hidden) ? 1 :0;
    if(oversea.image instanceof File){
        const form = new FormData();
        form.append('id', oversea.id);
        form.append('title', oversea.title);
        form.append('link', oversea.link);
        form.append('image', oversea.image);
        form.append('content', oversea.content);
        form.append('hidden', hidden);
        form.append('_method', 'PUT');
        oversea = form;
    }else{
        oversea._method = 'PUT'
    }
    return axiosClient.post(`/overseas/${id}`, oversea);
}

export function deleteOversea({commit}, id){
    return axiosClient.delete(`/overseas/${id}`);
}
export function deleteOverseaItems({commit}, ids){
    return axiosClient.post(`/overseaItems`, {'ids':ids});
}