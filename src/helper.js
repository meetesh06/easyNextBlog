const parsePostUrl = (id, title) => {
// return '/blog/'+id+'-'+title;
return '/blog/' + id;
}

function sortPosts(a, b) {
    return moment(b.created, 'DD-MM-YYYY').toDate() - moment(a.created, 'DD-MM-YYYY').toDate()
}

export { parsePostUrl, sortPosts }