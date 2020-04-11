def isMatch(text, pattern) -> bool:
    memo = dict() # 备忘录
    def dp(i, j):
        if (i, j) in memo:
            return memo[(i, j)]
        if j == len(pattern):
            return i == len(text)

        first = i < len(text) and pattern[j] in {text[i], '.'}
        if j <= len(pattern) - 2 and pattern[j + 1] == '*':
            print(dp(i, j + 2))
            ans = dp(i, j + 2) or first and dp(i + 1, j)
        else:
            ans = first and dp(i + 1, j + 1)

        memo[(i, j)] = ans
        return ans

    return dp(0, 0)

# print(isMatch("mississippi", "mis*is*p*."))  -> false
# print(isMatch("aaaaaaaaaaaaab", "a*a*a*a*a*a*a*a*a*a*c"))
