export function getPageName(page:any){
    let pageName;
    switch(page){
    case 1:
      pageName = "Choose Image";
      break;
      case 2:
      pageName = "Choose Instance Type";
      break;
      case 3:
      pageName = "Choose Storage and Network";
      break;
      case 4:
      pageName = "Configure Security";
      break;
      case 5:
        pageName = "Review and Launch";
        break;
    default:
      pageName = "Choose Image";
  }
  return pageName;
}

