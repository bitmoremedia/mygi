exports.customShouldUpdateScroll = function(prevRouterProps, nextRouterProps) {
  if (prevRouterProps){
    // do not scroll if the user is moving between routes on the 'glycemic-index' page
    const { location: { pathname: prevPathname } } = prevRouterProps;
    const { location: { pathname } } = nextRouterProps;
    if (prevPathname.indexOf('/glycemic-index/') > -1 && pathname.indexOf('/glycemic-index/') > -1) {
      return false;
    }
  }
  return true;
}
