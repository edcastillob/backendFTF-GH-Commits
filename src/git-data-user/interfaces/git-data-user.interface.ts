

export interface GitDataUserInterface {
    sha: string; 
    url: string; 
    commit: {
      message: string; 
      author: {
        date: string; 
        name: string; 
      };
    };
  }
  