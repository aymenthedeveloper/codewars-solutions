function domainName(url){
  const pattern = /^((https?:\/\/)?(www\.)?([a-z0-9-]+)(\..+))$/i;
  return url.replace(pattern, '$4');
}