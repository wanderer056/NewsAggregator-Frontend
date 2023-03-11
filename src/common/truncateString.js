export const truncateString = (text, len)=>{
    if(text.length > len){
        return text.slice(0, len) + '...'
    }
    else{
        return text
    }

}