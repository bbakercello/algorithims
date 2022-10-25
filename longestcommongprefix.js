var longestCommonPrefix = function(strs) {
    return strs.reduce((prev,next) => {
        let i=0;
        while(prev[i] && next[i] && prev[i] === next[i]) i++;
        return(prev.slice(0,i));
    })
};
longestCommonPrefix(["flower","flow","flight"])
