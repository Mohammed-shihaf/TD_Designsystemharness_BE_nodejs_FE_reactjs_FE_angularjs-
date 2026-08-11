# TD_Designsystemharness_BE_nodejs_FE_reactjs_FE_angularjs-

Design-System Cross-Framework Test Harness: one Node.js (Express)
backend serves a shared `/api/design-tokens` endpoint; both a React
and an Angular frontend fetch the same tokens and render using them,
so their output can be parity-tested against each other.

See ARCHITECTURE.txt for build commands and the full architecture.

Branches: `designsystemharness_BE_nodejs<18|20|22|24>_FE_reactjs<18|20|22|24>_FE_angularjs<16|17|18|19>`
(64 combinations of Node.js × React × Angular versions).
