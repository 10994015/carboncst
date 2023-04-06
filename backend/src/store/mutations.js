export function setUser(state, user){
    state.user.data = user;
}

export function setToken(state, token){
    state.user.token = token;
    if(token){
        sessionStorage.setItem('TOKEN', token);
    }else{
        sessionStorage.removeItem('TOKEN');
    }
}

export function setArticles(state, [loading, res=null]){
    if(res){
        state.articles = {
            data: res.data,
            links: res.meta.links,
            total: res.meta.total,
            limit: res.meta.per_page,
            from: res.meta.from,
            to: res.meta.to,
            page: res.meta.current_page,
        }
    }
    state.articles.loading = loading;
}

export function setBanners(state, [loading, res=null]){
    if(res){
        state.banners = {
            data: res.data,
            links: res.meta.links,
            total: res.meta.total,
            limit: res.meta.per_page,
            from: res.meta.from,
            to: res.meta.to,
            page: res.meta.current_page,
        }
    }
    state.banners.loading = loading;
}

export function setChairmans(state, [loading, res=null]){
    if(res){
        state.chairmans = {
            data: res.data,
            links: res.meta.links,
            total: res.meta.total,
            limit: res.meta.per_page,
            from: res.meta.from,
            to: res.meta.to,
            page: res.meta.current_page,
        }
    }
    state.chairmans.loading = loading;
}

export function setAwardprograms(state, [loading, res=null]){
    if(res){
        state.awardprograms = {
            data: res.data,
            links: res.meta.links,
            total: res.meta.total,
            limit: res.meta.per_page,
            from: res.meta.from,
            to: res.meta.to,
            page: res.meta.current_page,
        }
    }
    state.awardprograms.loading = loading;
}

export function setLetters(state, [loading, res=null]){
    if(res){
        state.letters = {
            data: res.data,
            links: res.meta.links,
            total: res.meta.total,
            limit: res.meta.per_page,
            from: res.meta.from,
            to: res.meta.to,
            page: res.meta.current_page,
        }
    }
    state.letters.loading = loading;
}

export function setCstDatabases(state, [loading, res=null]){
    if(res){
        state.cstdatabases = {
            data: res.data,
            links: res.meta.links,
            total: res.meta.total,
            limit: res.meta.per_page,
            from: res.meta.from,
            to: res.meta.to,
            page: res.meta.current_page,
        }
    }
    state.cstdatabases.loading = loading;
}

export function setCstSeminars(state, [loading, res=null]){
    if(res){
        state.cstseminars = {
            data: res.data,
            links: res.meta.links,
            total: res.meta.total,
            limit: res.meta.per_page,
            from: res.meta.from,
            to: res.meta.to,
            page: res.meta.current_page,
        }
    }
    state.cstseminars.loading = loading;
}

export function setOverseas(state, [loading, res=null]){
    if(res){
        state.overseas = {
            data: res.data,
            links: res.meta.links,
            total: res.meta.total,
            limit: res.meta.per_page,
            from: res.meta.from,
            to: res.meta.to,
            page: res.meta.current_page,
        }
    }
    state.overseas.loading = loading;
}