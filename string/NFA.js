'use strict';

const Digraph = require('../graphs/directed/unweighted/Digraph');
const NonrecursiveDirectedDFS = require('../graphs/directed/NonrecursiveDirectedDFS');

class NFA {
    constructor(regexp) {
        if(typeof regexp !== 'string') {
            throw new Error(`Illegal Argument Error: arg(${typeof regexp}) must be string type`);
        }
        regexp = `(${regexp})`;
        this._regexp = regexp;
        const n = this._regexp.length;
        this._nfa = new Digraph(n + 1);
        this._exitState = n;
        const stack = [];
        for(let i = 0; i < n; i++) {
            let lp = i;

            const ch = regexp.charAt(i);
            if(ch === '(' || ch === '|') {
                stack.push(i);
            } else if(ch === ')') {
                lp = stack.pop();

                if(regexp.charAt(lp) === '|') {
                    const or = lp;
                    lp = stack.pop();

                    if(regexp.charAt(lp) !== '(') {
                        throw new Error(`Illegal Argument Error: invalid regular expression`);
                    }

                    this._nfa.addEdge(lp, or + 1);
                    this._nfa.addEdge(or, i);
                }
            }

            if(ch === '(' || ch === ')' || ch === '*') {
                this._nfa.addEdge(i, i + 1);
            }
            if(i < n - 1 && regexp.charAt(i + 1) === '*') {
                this._nfa.addEdge(lp, i + 1);
                this._nfa.addEdge(i + 1, lp);
            }
        }

        if(stack.length) {
            throw new Error(`Illegal Argument Error: invalid regular expression`);
        }
    }

    recognizes(txt) {
        let dfs = new NonrecursiveDirectedDFS(this._nfa, 0);
        let epsilonMatch = dfs.reachableV();

        const n = txt.length;
        for(let i = 0; i < n; i++) {
            const txtCh = txt.charAt(i);
            if(txtCh === '*' || txtCh === '|' || txtCh === '(' || txtCh === ')') {
                throw new Error(`Illegal Argument Error: text contains the metacharacter(${txtCh} at index ${i})`);
            }

            const exactMatch = [];

            for(let v of epsilonMatch) {
                if(v === this._exitState) {
                    continue;
                }
                if(this._regexp.charAt(v) === txt.charAt(i) || this._regexp.charAt(v) === '.') {
                    exactMatch.push(v + 1);
                }
            }

            dfs = new NonrecursiveDirectedDFS(this._nfa, exactMatch);
            epsilonMatch = dfs.reachableV();

            if(!epsilonMatch.length) {
                return false;
            }
        }

        return dfs.visited(this._exitState) ? true : false;
    }
}

module.exports = NFA;
