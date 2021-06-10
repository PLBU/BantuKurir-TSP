// Convert a decimal to a binary string
const dec2StringBin = (dec, length) => {
    let stringBinary = dec.toString(2);

    while (stringBinary.length < length) {
        stringBinary = '0' + stringBinary;
    }

    return stringBinary;
}

// Flip bitmask from Least Significant Bit to kth bit
const flipBits = (n, k) => {
    let mask = 1;
    for (let i = 1; i < k; ++i)
        mask |= mask << 1;

    return ~n & mask;
}

// Get fastest route from TSP 
const getFastestRoute = (pos, mask, N, memo, cost) => {
    /* 
        int pos: current position or node
        int mask: current visited node representated by bitmask
        int N: all available node
        JSON memo: memoization of DP {minCost: int, path: int[]}
        int[][] cost: 2d array of cost  
    */
    const keyMemo = `${pos} ${mask}`;
    if (mask === flipBits(1 << N, N + 1)) return memo[keyMemo] = {minCost: cost[pos][0], path: [pos]};
    if (keyMemo in memo) return memo[keyMemo];

    let minCost = Number.MAX_VALUE;
    let maskString = dec2StringBin(mask, N);
    let nextKeyMemo;
    for (let index = N - 1; index >= 0; index--) {
        let node = N - index - 1;
        if (maskString[index] === '0' && pos !== node) {
            let minCostCandidate = getFastestRoute(node, mask | (1 << node), N, memo, cost).minCost + cost[pos][node]
            if (minCostCandidate <= minCost) {
                minCost = minCostCandidate;
                nextKeyMemo = `${node} ${mask | (1 << node)}`
            }
        }
    }

    return memo[keyMemo] = {minCost: minCost, path: [pos, ...memo[nextKeyMemo].path]};
}

module.exports = { getFastestRoute };