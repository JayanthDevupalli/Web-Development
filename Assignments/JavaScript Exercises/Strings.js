function findLongestPalindrome(s) {
    let res = "", len = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j of [i, i + 1]) {
            let l = i, r = j;
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                if (r - l + 1 > len) {
                    len = r - l + 1;
                    res = s.slice(l, r + 1);
                }
                l--;
                r++;
            }
        }
    }
    console.log(res);
}

findLongestPalindrome('babad');
findLongestPalindrome('cbbd');
findLongestPalindrome('madam');