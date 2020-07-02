
// ------------------------- path_dirName ------------------------
// return the part of the path that preceeds the last "/" in the string.
export function path_dirName(path: string): string
{
  let dirName = '';
  const fx = scan_revCharEqAny(path, path.length - 1, '\\/');
  if ( fx > 0 )
    dirName = path.substr(0,fx) ;
  return dirName ;
}

// ------------------------- path_fileName ------------------------
// return the part of the path that follows the last "/" in the string.
export function path_fileName(path: string): string
{
  let fileName = path;
  const fx = scan_revCharEqAny(path, path.length - 1, '\\/');
  // let fx = path.lastIndexOf('/');
  const bx = fx + 1;
  if ((bx > 0) && (bx < path.length))
  {
    fileName = path.substr(bx);
  }
  return fileName;
}

// ------------------------------ path_splitBaseName ------------------------------
export function path_splitBaseName(path: string): { coreName: string, extName: string }
{
  const baseName = path_fileName(path);
  let coreName = baseName;
  let extName = '';
  let ix = baseName.length;
  while (ix > 0)
  {
    ix -= 1;
    const ch1 = baseName.substr(ix, 1);
    if (ch1 == '.')
    {
      coreName = baseName.substr(0, ix);
      extName = baseName.substr(ix);
      break;
    }
  }
  return { coreName, extName };
}


// ----------------------------- scan_revCharEqAny --------------------------------
// scan backwards until character is equal any of chars in anyChar string.
export function scan_revCharEqAny(text: string, bx: number, anyChar: string): number
{
  let ix = bx;
  while (ix >= 0)
  {
    const ch1 = text.substr(ix, 1);
    const fx = anyChar.indexOf(ch1);
    if (fx >= 0)
      break;
    ix -= 1;
  }
  if (ix >= 0)
    return ix;
  else
    return -1;
}
