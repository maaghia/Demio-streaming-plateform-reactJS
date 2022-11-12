

const  FetchData = async () => {
    
    try {
        const res = await fetch('https://raw.githubusercontent.com/codelabsacademy/react-takehome-1/main/feed/sample.json', {cache: 'no-cache'});
        const info = await res.json();
        
        let entries = info.entries;
        return entries;
    } catch (error) {
        console.log(error);
    }
  }

  export default FetchData;