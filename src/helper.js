const parsePostUrl = (id, title) => {
// return '/blog/'+id+'-'+title;
return '/blog/' + id;
}

function sortPosts(a, b) {
return new Date(b.created).getTime() - new Date(a.created).getTime();
}

export { parsePostUrl, sortPosts }