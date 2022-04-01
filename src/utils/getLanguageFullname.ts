export const getLanguageFullname = (shortName: string): string => {
    switch (shortName) {
      case 'en':
        return 'English';
      case 'ja':
          return 'Japanese';
       case 'ko':
          return 'Korean';
        case 'sv':
          return 'Swedish';   
        case 'es':
          return 'Spanish'
      default:
        return 'Unknown';
    }
  };